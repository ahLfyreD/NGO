import { useState } from 'react'
import { FaRegCopy } from "react-icons/fa";

const currencies = [
    { symbol: "₦", code: "NGN" },
    { symbol: "$", code: "USD" },
    { symbol: "€", code: "EUR" },
    { symbol: "£", code: "GBP" },
    { symbol: "₹", code: "INR" }
];

const DonateModal = ({ toggleModal }) => {


    const [currency, setCurrency] = useState(currencies[0].symbol); // Default to NGN symbol
    const [amount, setAmount] = useState("");
    const [give, setGive] = useState(true);
    const [viaCrypto, setViaCrypto] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [copySuccess, setCopySuccess] = useState("");

    // Handle currency change
    const handleCurrencyChange = (e) => {
        const selectedCurrency = currencies.find(
            (cur) => cur.code === e.target.value
        );
        setCurrency(selectedCurrency.symbol);
    };

    // Handle donation amount change
    const handleAmountChange = (e) => {
        let value = e.target.value;

        // Remove any non-digit characters (except periods for decimals)
        value = value.replace(/[^0-9.]/g, "");

        // Add commas to the value for thousands separation
        const parts = value.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setAmount(parts.join("."));
    };

    // Handle checkbox toggle
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    // Function to handle the copying of text
    const handleCopyClick = () => {
        const textToCopy = document.getElementById('btcAddress').innerHTML;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopySuccess("Copied!"); // Show success message on copy
                setTimeout(() => setCopySuccess(""), 2000); // Reset the message after 2 seconds
            })
            .catch((err) => {
                setCopySuccess("Failed to copy!");
                console.error("Error copying text: ", err);
            });
    };


    return (
        <div className='overlay fixed inset-0 h-[100vh] w-[100vw] overflow-scroll p-3 lg:flex lg:items-center lg:justify-center'>
            <div
                onClick={toggleModal}
                className='relative lg:absolute lg:top-10 lg:right-10 bg-white h-7 w-7 text-center rounded-full font-bold mb-10 cursor-pointer'>
                x
            </div>
            <div className='max-w-6xl h-[600px] py-5 mx-auto lg:flex lg:gap-5 lg:justify-center lg:items-center px-10 lg:px-0'>
                <div className='bg-white lg:max-w-[450px] h-full rounded-lg  '>
                    <div className='bg-donationImage bg-cover w-full h-[300px]'>

                    </div>
                    <div className='p-5'>
                        <p className='font-bold text-xl mb-3'>saveLife is working every day to end poverty.</p>
                        <p className='font-medium text-lg mb-3'>But we can’t do it without you. You can help us to save lives during a disaster, get clean water running in the most remote areas, send children, especially girls to school and stand up for the rights of women.</p>
                    </div>

                </div>
                <div className='bg-white w-full h-full lg:w-[350px]  rounded-lg flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-center p-5'>
                            <p>Secure Donation</p>
                        </div>
                        <div className='px-5'>
                            <div className='grid grid-cols-2 h-10 border border-gray-400 rounded-md mb-10'>
                                <div
                                    className={`flex justify-center items-center rounded-md cursor-pointer ${give && "bg-blue-500 text-white"}`}
                                    onClick={() => { setGive(true), setViaCrypto(false) }}
                                >
                                    <p>Give</p>
                                </div>
                                <div
                                    className={`flex justify-center items-center rounded-md cursor-pointer ${viaCrypto && "bg-blue-500 text-white"}`}
                                    onClick={() => { setGive(false), setViaCrypto(true) }}
                                >
                                    <p>Via Crypto</p>
                                </div>
                            </div>

                            {give && (
                                <>
                                    <div className='flex items-center border border-gray-400 rounded-lg p-2 mb-5'>
                                        <div>
                                            <span className='mr-[5px] text-gray-500'>{currency}</span>
                                        </div>
                                        <div className='flex-1'>
                                            <input
                                                type="text"
                                                placeholder="Enter amount"
                                                className='w-full h-full focus:outline-none'
                                                value={amount}
                                                onChange={handleAmountChange}
                                                style={{ padding: "5px" }}
                                            />
                                        </div>
                                        <div>
                                            <select onChange={handleCurrencyChange} className='focus:outline-none text-gray-500'>
                                                {currencies.map((cur) => (
                                                    <option key={cur.code} value={cur.code}>
                                                        {cur.code}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label>Dedicate this donation</label>
                                    </div>
                                    {isChecked && (
                                        <div style={{ marginTop: "10px" }}>
                                            <textarea
                                                cols="30"
                                                rows="5"
                                                className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none"
                                                placeholder='Enter text here'
                                            ></textarea>
                                        </div>
                                    )}
                                </>

                            )}

                            {viaCrypto && (
                                <>
                                    <div className='mb-3'>
                                        <h3>BTC or USDT</h3>
                                        <p>BEP20/ERC20</p>
                                        <div className='flex items-center gap-4'>
                                            <div className='w-[200px] overflow-hidden'>
                                                <p id='btcAddress' className='text-ellipsis whitespace-nowrap overflow-hidden'>
                                                    0xf421a6c0ac3d32f4c4a174840b79e8b0fa93578a
                                                </p>
                                            </div>
                                            <div className='flex gap-2'>
                                                <FaRegCopy onClick={handleCopyClick} />
                                                {copySuccess && <span className='font-light text-[10px]'>{copySuccess}</span>}
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <p>"Thank you for your generous contribution! Your support helps us continue our mission. To help us acknowledge your donation, kindly send your name and a copy of your transaction receipt to saveLifeNGO@gmail.com. Every bit counts, and we truly appreciate your support!"</p>
                                    </div>



                                </>
                            )}



                        </div>
                    </div>

                    {give && (
                        <>
                            <div className='flex w-full p-5'>
                                <button
                                    className='w-full border border-blue-600 bg-blue-600  p-3 font-semibold hover:text-[white] hover:bg-blue-800 transition-all ease-in-out duration-300 rounded-lg'>
                                    Donate
                                </button>
                            </div>
                        </>
                    )}



                </div>

            </div>
        </div>
    )
}

export default DonateModal
