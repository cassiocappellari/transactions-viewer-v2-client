import { gql } from "graphql-tag";

export const GET_TRANSACTIONS = gql`
  query getAllTransactions {
    getAllTransactions {
        id,
        account,
        description,
        category,
        reference,
        currency,
        amount,
        status,
        transactionDate,
        createdAt,
        updatedAt
    }
  }
`;

export const GET_TRANSACTIONS_BY_DATE_RANGE = gql`
  query getTransactionsByDateRange($startMonth: String, $endMonth: String) {
    getTransactionsByDateRange(startMonth: $startMonth, endMonth: $endMonth) {
      id
      account
      description
      category
      reference
      currency
      amount
      status
      transactionDate
      createdAt
      updatedAt
    }
  }
`;
