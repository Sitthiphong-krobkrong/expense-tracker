// src/components/AddTransaction.js
import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function AddTransaction() {
  const { addTransaction } = useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="add_trn_form">
      <h3>เพิ่มรายการใหม่</h3>
      <div className="add_trn_form_div">
        <label>ชื่อรายการ</label>
        <input value={text} onChange={(e) => setText(e.target.value)} required />
      </div>
      <div className="add_trn_form_div">
        <label>จำนวนเงิน (+รายรับ, -รายจ่าย)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <button type="submit" className="btn add_trn_btn_add"><i className="fa fa-plus-square"></i>เพิ่มรายการ</button>
    </form>
  );
}

export default AddTransaction;
