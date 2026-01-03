import { useEffect, useState } from "react";
import axios from "axios";

const Balance = () => {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const res = await axios.get(
        "https://incomeexpense-backend.onrender.com/api/transactions"
      );
      const total = res.data.reduce((acc, curr) => acc + curr.amount, 0);
      setBalance(total);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBalance();

    const interval = setInterval(() => {
      fetchBalance();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-lg text-center">
      <h4 className="text-sm uppercase tracking-wide opacity-90">
        Your Balance
      </h4>
      <h1 className="text-3xl font-bold mt-2">₹{balance}</h1>
    </div>
  );
};

export default Balance;
