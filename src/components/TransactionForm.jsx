import { useState } from "react";
import axios from "axios";

function TransactionForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // Allow only alphabets and spaces
  const handleTitleChange = (e) => {
    const value = e.target.value;

    if (/^[A-Za-z\s]*$/.test(value)) {
      setTitle(value);
    }
  };

  const addTransaction = async (e) => {
    e.preventDefault();

    // Extra safety validation
    if (!/^[A-Za-z\s]+$/.test(title)) {
      alert("Title should contain only alphabets");
      return;
    }

    await axios.post(
      "https://incomeexpense-backend.onrender.com/api/transactions",
      {
        title,
        amount: Number(amount),
      }
    );

    window.location.reload();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Add New Transaction
      </h3>

      <form onSubmit={addTransaction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
