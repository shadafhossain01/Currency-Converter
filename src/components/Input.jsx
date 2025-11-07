import React from "react";

const Input = ({ label, Currency, setCurrency, Amount, setAmount, currencyOptions }) => {
  return (
    <div className="bg-white md:w-[520px] rounded-[15px] p-[18px] flex justify-between mt-[17px]">
      {/* Input Box */}
      <div>
        <label className="block font-medium text-gray-400 mb-4 text-[17px]">
          {label}
        </label>
        <input type="number" className="outline-none font-bold text-[17px]" value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
      </div>

      {/* Slecet Currenty Box */}
      <div>
        <label className="block font-medium text-gray-400 mb-4 text-[17px] ">
          Currency Type
        </label>
        <select
          value={Currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-gray-200 px-4 py-2 outline-none rounded-[10px] cursor-pointer font-medium"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
