import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Income & Expense Tracker
        </h2>

        <div className="space-y-5">
          <Balance />
          <TransactionForm />
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
