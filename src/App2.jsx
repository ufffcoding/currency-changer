import React, { useState } from "react";
import InputBox2 from "./components2/InputBox2";
import useCurrencyInfo from "./hooks2/useCurrencyinfo";

function App2() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const convert = (e) => {
    e.preventDefault();
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div className=" h-screen flex flex-col gap-2 justify-center items-center bg-slate-400">
        <InputBox2
          label={"From"}
          amount={amount}
          setAmount={setAmount}
          currencyChange={from}
          setCurrencyChange={setFrom}
          currencyOptions={currencyOptions}
        />
        <InputBox2
          label={"To"}
          amount={convertedAmount}
          setAmount={setConvertedAmount}
          currencyChange={to}
          setCurrencyChange={setTo}
          currencyOptions={currencyOptions}
          amountDisabled
        />
        <div className="flex gap-2">
          <button onClick={swap} className="bg-white font-bold px-2 rounded-lg">
            Swap
          </button>
          <button
            className="bg-white px-2 rounded-lg font-bold"
            onClick={convert}
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App2;
