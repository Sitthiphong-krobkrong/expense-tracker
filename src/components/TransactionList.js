// src/components/TransactionList.js
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div>
      <h3>รายการ</h3>
      <ul>
        {transactions.map((tx) => (
          <li className="bd trn_list_li"
            key={tx.id}
            style={{ color: tx.amount < 0 ? "red" : "green", display: "flex", justifyContent: "space-between", margin:"10px" }}
          >
            {tx.text} : {tx.amount.toLocaleString()} บาท
            <button onClick={() => deleteTransaction(tx.id)} style={{ background: "red", color: "white", width:"50px" }}><i className="fa fa-trash"></i>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
