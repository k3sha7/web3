import { useContext } from "react"
import { SiEthereum } from 'react-icons/si'
import { Loader } from "."
import { TransactionContext } from "../context/TransactionContext"
import {shortenAddress} from "../utils/shortenAddress"

const Input = ({placeholder, name, type, value, handleChange}) => {
  return <input 
    placeholder={placeholder} 
    type={type} step='.0001' 
    value={value} 
    onChange={(e)=> handleChange(e, name)} 
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
}

export const Welcome = () => {
  const { connectWallet, currentAccount, handleChange, formData, sendTransaction } = useContext(TransactionContext)

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();
    
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  }

  return (
    <div className="flex antialiased w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col md:w-4/5 items-start justify-around md:p-20 py-12 px-4">
        <div className=" flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        {!currentAccount && <button 
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center text-white font-semibold items-center my-5 bg-gray-600 p-3 rounded-full cursor-pointer hover:bg-gray-700"
         >Connect Wallet</button>}
          <div className="p-3 bg-teal-400 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
              </div>
              <div>
                <div className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </div>
                <div className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
