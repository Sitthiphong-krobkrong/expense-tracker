// src/App.js
import "./App.css";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { TransactionProvider } from "./context/TransactionContext";

function App() {

  const handleRefresh = () => {
    localStorage.removeItem("transactions");
    window.location.reload();
  };

  return (
    <TransactionProvider>
      <div className="container">
        <div className="row app_row bd bd-bottom ">
          <h2 className="app_row_h2 bd">แอปจดรายรับรายจ่าย</h2>
          <i
            className="fa fa-refresh app_row_icon bd"
            style={{ cursor: "pointer" }}
            role="button"
            title="รีเฟรชข้อมูล"
            aria-label="Refresh transactions"
          onClick={handleRefresh}
          />
        </div>
        <div className="pd-2 bd bd-bottom ">
          <div className="pd-2 bd">
            <Balance />
          </div>
          <div className="pd-2 bd bd-bottom ">
            <TransactionList />
          </div>
          <div className="pd-2 bd">
            <AddTransaction />
          </div>
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
