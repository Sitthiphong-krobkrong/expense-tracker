// src/components/Balance.js
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function Balance() {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((acc, tx) => acc + tx.amount, 0);

  const total = income + expense;

  return (
    <div>
      <h3>ยอดคงเหลือ</h3>
      <div className="balance_flex_container bd">
        <div className="balance_content_st bd income_st">รายรับ :  <br/>{income.toLocaleString()} <br/>บาท</div>
        <div className="balance_content_st bd expense_st">รายจ่าย : <br/>{expense.toLocaleString()} <br/>บาท</div>
        <div className="balance_content_st bd total_st">คงเหลือ : <br/>{total.toLocaleString()} <br/>บาท</div>
      </div>

    </div>
  );
}

export default Balance;
