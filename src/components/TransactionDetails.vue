<template>
  <div>
    <div>
      <div id="back-container">
        <router-link :to="{ name: 'list' }">Back</router-link>
      </div>
      <table align="center" border="1">
        <thead>
          <tr>
            <th>Transaction Date</th>
            <th>Description</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Account</th>
            <th>Category</th>
            <th>Reference</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ formatTransactionDate(transaction.transactionDate) }}</td>
            <td>{{ transaction.description }}</td>
            <td>{{ transaction.currency }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.account }}</td>
            <td>{{ transaction.category }}</td>
            <td>{{ transaction.reference }}</td>
            <td>{{ transaction.status }}</td>
            <td>{{ transaction.createdAt }}</td>
            <td>{{ transaction.updatedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { GET_TRANSACTION_BY_ID } from "../graphql/queries";
import { dateFormatter } from "../utils/dateFormatter";

export default {
  name: "TransactionDetails",

  methods: {
    getTransactionById(transactionId) {
      this.$apollo
        .query({
          query: GET_TRANSACTION_BY_ID,
          variables: {
            transactionId,
          },
        })
        .then(({ data }) => {
          this.transaction = data.getTransactionById;
        });
    },

    formatTransactionDate(date) {
      const formattedDate = dateFormatter(date);

      return formattedDate;
    },
  },

  data() {
    return {
      transactionParam: this.$route.params.transaction,
      transaction: {},
    };
  },

  mounted() {
    this.getTransactionById(this.transactionParam);
  },
};
</script>
