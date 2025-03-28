import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import bgImage from "./assets/bg.jpg"; // Import your local image

function App() {

    // State variables to manage input amount, selected currencies, and converted amount
    const [amount, setAmount] = useState(1)
    const [from, setFrom] = useState("inr")
    const [to, setTo] = useState("usd")
    const [convertedAmount, setConvertedAmount] = useState(0)

    // Fetch currency conversion rates based on the 'from' currency
    const currencyInfo = useCurrencyInfo(from)

    // Extract available currency options from fetched data
    const options = Object.keys(currencyInfo)

    // Function to swap 'from' and 'to' currencies along with their respective values
    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    // Function to perform currency conversion based on selected currencies and amount
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <>

            <div
                className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${bgImage})`, // Set background image dynamically
                }}
            >
                <h1 className="text-3xl font-bold text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out">
                    Currency Converter
                </h1>
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault(); // Prevent default form submission
                                convert() // Perform conversion on form submission
                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount} // Pass current amount
                                    currencyOptions={options} // Pass available currency options
                                    onCurrencyChange={(currency) => setFrom(currency)} // Update 'from' currency
                                    selectCurrency={from} // Set selected 'from' currency
                                    onAmountChange={(amount) => setAmount(amount)} // Update amount when changed
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer hover:bg-blue-700"
                                    onClick={swap} // Call swap function when clicked
                                >
                                    swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount} // Display converted amount
                                    currencyOptions={options} // Pass available currency options
                                    onCurrencyChange={(currency) => setTo(currency)} // Update 'to' currency
                                    selectCurrency={to} // Set selected 'to' currency
                                    amountDisable // Disable manual input for converted amount
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700">
                                Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Display conversion button text dynamically */}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


export default App
