<template>
  <div>
    <div>
      <div id="back-container">
        <router-link :to="{ name: 'list' }">Back</router-link>
      </div>
      <table align="center" border="1">
        <thead>
          <tr>
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
          <tr>
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
import { GET_TRANSACTION_BY_ID } from "../graphql/queries";

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
