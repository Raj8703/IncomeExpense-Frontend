import { useEffect, useState } from "react";
import axios from "axios";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("https://incomeexpense-backend.onrender.com/api/transactions")
      .then((res) => setTransactions(res.data));
  }, []);

  const deleteTransaction = async (id) => {
    await axios.delete(
      `https://incomeexpense-backend.onrender.com/api/transactions/${id}`
    );
    setTransactions(transactions.filter((item) => item._id !== id));
  };

  return (
    <div className="mt-6 bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">
        Transaction History
      </h3>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions added yet</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((item) => (
            <li
              key={item._id}
              className={`flex justify-between items-center p-3 rounded-lg shadow-sm border 
              ${
                item.amount >= 0
                  ? "border-green-400 bg-green-50"
                  : "border-red-400 bg-red-50"
              }`}
            >
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p
                  className={`text-sm font-semibold ${
                    item.amount >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{item.amount}
                </p>
              </div>

              <button
                onClick={() => deleteTransaction(item._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
