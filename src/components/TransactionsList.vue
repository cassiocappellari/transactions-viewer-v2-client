<template>
  <div>
    <div>
      <div id="filter-container">
        <label
          >Start month:
          <input
            type="datetime"
            v-mask="'####/##'"
            placeholder="YYYY/MM"
            v-model="startMonth"
            required
          />
        </label>
        <label id="filter-end-month"
          >End month:
          <input
            type="datetime"
            v-mask="'####/##'"
            placeholder="YYYY/MM"
            v-model="endMonth"
            required
          />
        </label>
        <button
          id="filter-button"
          @click="getTransactionsByDateRange(startMonth, endMonth)"
        >
          Filter
        </button>
      </div>
      <table align="center" border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Transaction Date</th>
            <th>Description</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Account</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction of transactions" :key="transaction.id">
            <router-link
              :to="{ name: 'details', params: { transaction: transaction.id } }"
            >
              <td>Details</td>
            </router-link>
            <td>{{ transaction.transactionDate }}</td>
            <td>{{ transaction.description }}</td>
            <td>{{ transaction.currency }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.account }}</td>
            <td>{{ transaction.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_BY_DATE_RANGE,
} from "../graphql/queries";

export default {
  name: "TransactionsList",

  apollo: {
    transactions: {
      query: GET_TRANSACTIONS,
      variables: () => ({ size: 30, skip: 0 }),
      update: (data) => data.getAllTransactions,
    },
  },

  methods: {
    getTransactionsByDateRange(startMonth, endMonth) {
      this.$apollo
        .query({
          query: GET_TRANSACTIONS_BY_DATE_RANGE,
          variables: {
            startMonth,
            endMonth,
          },
        })
        .then(({ data }) => {
          this.transactions = data.getTransactionsByDateRange;
        });

      this.isTransactionByRange = true;
    },

    fetchMore() {
      const queryName = "getAllTransactions";

      this.$apollo.queries.transactions.fetchMore({
        variables: {
          size: 30,
          skip: this.transactions?.length + 1,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => ({
          [queryName]: [
            ...previousResult[queryName],
            ...fetchMoreResult[queryName],
          ],
        }),
      });
    },
  },

  data() {
    return {
      startMonth: "",
      endMonth: "",
      isTransactionByRange: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (
        scrollTop + clientHeight >= scrollHeight &&
        !this.isTransactionByRange
      ) {
        this.fetchMore();
      }
    });
  },
};
</script>
