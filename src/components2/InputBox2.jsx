import React, { useId } from "react";

function InputBox2({
  label,
  amount,
  setAmount,
  currencyChange = "usd",
  setCurrencyChange,
  currencyOptions = [],
  amountDisabled,
  currencyDisabled,
  className = "",
}) {
  const useCurrencyID = useId();
  return (
    <div
      className={`w-4/6 p-4 flex bg-white justify-between rounded-lg gap-2 ${className}`}
    >
      <div className="flex flex-col">
        <label htmlFor={useCurrencyID} className="font-bold">
          {label}
        </label>
        <input
          id={useCurrencyID}
          type="number"
          placeholder="Amount"
          min={0}
          value={amount}
          onClick={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={amountDisabled}
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Currrency Type</p>
        <select
          disabled={currencyDisabled}
          value={currencyChange}
          onChange={(e) =>
            setCurrencyChange && setCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox2;
