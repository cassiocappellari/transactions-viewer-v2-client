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
            <th>Account</th>
            <th>Description</th>
            <th>Category</th>
            <th>Reference</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Transaction Date</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction of transactions" :key="transaction.id">
            <router-link
              :to="{ name: 'details', params: { transaction: transaction.id } }"
            >
              <td>Details</td>
            </router-link>
            <td>{{ transaction.account }}</td>
            <td>{{ transaction.description }}</td>
            <td>{{ transaction.category }}</td>
            <td>{{ transaction.reference }}</td>
            <td>{{ transaction.currency }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.status }}</td>
            <td>{{ transaction.transactionDate }}</td>
            <td>{{ transaction.createdAt }}</td>
            <td>{{ transaction.updatedAt }}</td>
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
    },
  },

  data() {
    return {
      startMonth: "",
      endMonth: "",
    };
  },
};
</script>
