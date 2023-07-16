import React, { useState } from 'react'

export default function BankCardPayment() {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName,setCardHolderName] = useState("");
    const [expirationDate,setExpirationDate] = useState("");
    const [securityCode,setSecurityCode] = useState("");
    // const [amount, SetAmount] = useState();

    const handlePaymentSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="shipping mt-[30px] mb-[30px]">
            <form onSubmit={handlePaymentSubmit}>
                <ul className="flex flex-col justify-content-center">
                    <li className="mb-1">
                        <div className="mb-[2px] bg-[#f2f2f2] rounded-[5px]">
                            <div className="flex flex-col">
                                <label className="text-[10px] text-qgray m-[5px] mb-0" htmlFor="cardNumber">Card Number</label>
                                <input
                                className="m-[10px] mt-0 mb-1 bg-transparent focus:outline-none0 mb-1 bg-transparent focus:outline-none"
                                type="text"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={(e)=>setCardNumber(e.target.value)}
                                required
                                />
                            </div>
                        </div>
                    </li>
                    <li className="mb-1">
                        <div className="mb-[2px] bg-[#f2f2f2] rounded-[5px]">
                            <div className="flex flex-col">
                                <label className="text-[10px] text-qgray m-[5px] mb-0" htmlFor="cardHolderName">Name on Card</label>
                                <input
                                className="m-[10px] mt-0 mb-1 bg-transparent focus:outline-none"
                                type="text"
                                id="cardHolderName"
                                value={cardHolderName}
                                onChange={(e)=>setCardHolderName(e.target.value)}
                                required
                                />
                            </div>
                        </div>
                    </li>
                    <li className="mb-1 space-x-4 flex flex-row">
                        <div className="w-1/2 mb-[2px] bg-[#f2f2f2] rounded-[5px]">
                            <div className="flex flex-col">
                                <label className="text-[10px] text-qgray m-[5px] mb-0" htmlFor="expirationDate">Expiration Date (MM/YY)</label>
                                <input
                                className="m-[10px] mt-0 mb-1 bg-transparent focus:outline-none"
                                type="text"
                                id="expirationDate"
                                value={expirationDate}
                                onChange={(e)=>setExpirationDate(e.target.value)}
                                required
                                />
                            </div>
                        </div>
                        <div className="w-1/2 mb-[2px] bg-[#f2f2f2] rounded-[5px]">
                            <div className="flex flex-col">
                                <label className="text-[10px] text-qgray m-[5px] mb-0" htmlFor="securityCode">Security Code</label>
                                <input
                                className="m-[10px] mt-0 mb-1 bg-transparent focus:outline-none"
                                type="text"
                                id="securityCode"
                                value={securityCode}
                                onChange={(e)=>setSecurityCode(e.target.value)}
                                required
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    )
}