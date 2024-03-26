import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 60.12,
    date: new Date("2024-01-19"),
  },
  {
    id: "e2",
    description: "A pair of socks",
    amount: 12.99,
    date: new Date("2024-01-12"),
  },
  {
    id: "e3",
    description: "Chipotle",
    amount: 24.1,
    date: new Date("2024-02-15"),
  },
  {
    id: "e4",
    description: "Groceries",
    amount: 100.12,
    date: new Date("2024-03-01"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 18.24,
    date: new Date("2024-03-24"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
