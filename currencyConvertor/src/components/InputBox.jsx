import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    // Extract the first two characters (ISO country code) from currency code
    const countryCode = selectCurrency.slice(0, 2).toUpperCase();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(evt) => onAmountChange && onAmountChange(Number(evt.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right items-center">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-2 py-1">
                    <img
                        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                        alt={`${selectCurrency} flag`}
                        className="w-6 h-6 rounded-sm"
                    />
                    <select
                        className="bg-transparent cursor-pointer outline-none"
                        value={selectCurrency}
                        onChange={(evt) => onCurrencyChange && onCurrencyChange(evt.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default InputBox;
