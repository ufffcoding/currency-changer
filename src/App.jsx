import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = (e) => {
    e.preventDefault;
    setFrom(to);
    setTo(from);
  };
  const convert = (e) => {
    e.preventDefault;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <img
          className="w-full h-screen object-cover"
          src="./images/pexels-hitesh-choudhary-1114628.jpg"
          alt=""
        />
      </div>
      <div className=" flex items-center col-span-6  w-full bg-slate-500 h-screen justify-center">
        <div className="flex-col flex gap-2">
          <div className=" flex flex-col relative gap-2">
            <InputBox
              currencyOptions={currencyOptions}
              amount={amount}
              setAmount={setAmount}
              selectCurrency={from}
              setSelectCurrency={setFrom}
              label={"From"}
            />
            <button
              onClick={swap}
              className="absolute inset-0 mx-auto my-auto bg-white font-bold px-4 border w-fit h-fit rounded"
            >
              Swap
            </button>
            <InputBox
              amount={convertedAmount}
              currencyOptions={currencyOptions}
              selectCurrency={to}
              setSelectCurrency={setTo}
              label={"To"}
              amountDisabled
            />
          </div>
          <button
            onClick={convert}
            className="bg-white  px-2 font-bold rounded border border-black"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
