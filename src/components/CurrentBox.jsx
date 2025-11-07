import React, { useState } from "react";
import Input from "./Input";
import useGetCurrencyData from "../hooks/useGetCurrencyData";

const CurrentBox = () => {
    const [fromCurrency,setFromCurrency]=useState("usd")
    const [fromAmount,setFromAmount]=useState(0)
    const [toCurrency,setToCurrency]=useState("bdt")
    const [toAmount, setToAmount] = useState(0);
    const currencyData = useGetCurrencyData(fromCurrency);
    const currencyOptions=Object.keys(currencyData)

    const convertAmount=()=>setToAmount(fromAmount*currencyData[toCurrency].toFixed(2))
    const swapInput=()=>{
         setFromCurrency(toCurrency);
         setFromAmount(toAmount)
         setToAmount(fromAmount)
         setToCurrency(fromCurrency)
    }

  return (
    <div className="bg-[rgba(255, 255, 255, 0.1)] rounded-[10px] shadow-[0 4px 30px rgba(0, 0, 0, 0.1)]  p-[41px] backdrop-blur-[13px] border-2 border-[#ffffffb7] relative ">
      {/* From Input Box  */}
      <Input
        label="From"
        setCurrency={setFromCurrency}
        Currency={fromCurrency}
        Amount={fromAmount}
        setAmount={setFromAmount}
        currencyOptions={currencyOptions}
      />

      {/* Swap Btn */}
      <button
        onClick={() => swapInput()}
        className="bg-[#d99e00] text-white px-4 py-2 rounded-[10px] absolute left-[50%] -translate-x-[50%] top-[39%] cursor-pointer font-medium text-[18px]"
      >
        swap
      </button>

      {/* To Input Box  */}
      <Input
        label="To"
        Currency={toCurrency}
        setCurrency={setToCurrency}
        Amount={toAmount}
        currencyOptions={currencyOptions}
      />

      {/* Currency Convert Btn */}
      <button
        onClick={() => convertAmount()}
        className="bg-[#d99e00] text-white px-4 py-3 rounded-[10px] w-full mt-[21px] cursor-pointer font-medium text-[18px]"
      >
        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
      </button>
    </div>
  );
};

export default CurrentBox;
