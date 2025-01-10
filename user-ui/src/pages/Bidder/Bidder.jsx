import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import { BidderContext } from '../../context/BidderContext';
import '../../css/App.css';
import { useNavigate } from "react-router-dom";
import '../../css/Style.css';
import { Bidtable, Loader } from '../../components/index';
import TypingAnimation from '../../components/magicui/typing_animation';
import PlaceholdersAndVanishInput from '../../components/magicui/input_new';

const Bidder = () => {
  const { connectWallet, currentAccount, countbids } = useContext(TransactionContext);
  const { getBidders, bidData } = useContext(BidderContext);

  const [query, setQuery] = useState("");
  const placeholders = [
    "Search for your active bids...",
    "Find out which items you're bidding on...",
    "Looking for your latest bids? Start typing...",
    "Discover your highest bids in the auction...",
    "Check the status of your recent bids here...",
  ];

  const keys = ["ownerIPname"]

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  }

  useEffect(() => {
    getBidders();
    //countbidders(currentAccount);
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/ips`;
    navigate(path);
    navigate(0);
  }

  return (
    <div className='bg-black'>
      <div className='text-center flex justify-center items-center gap-5 flex-wrap'>
        <button
          data-testid="wallet"
          onClick={connectWallet}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Connect Wallet
          </span>
        </button>
        <button
          data-testid="wallet"
          onClick={routeChange}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            &nbsp; Back &nbsp;
          </span>
        </button>
      </div>

      <div className='bg-black'>
        <TypingAnimation className='text-center'>Connect to your wallet, to see your IP bidders</TypingAnimation>
      </div>
      {/* <div className='flex justify-around'>
        <p className='text-white cursor-pointer'>Bids</p>
        <div>
          <p className='text-white'>Total bids:</p>
        </div>
      </div> */}
      <div className='flex justify-center'>
        <PlaceholdersAndVanishInput
          className="border-1"
          placeholders={placeholders}
          onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className='flex justify-center flex-col items-center'>
        <div className='w-full font-bold text-lg mt-8'>{bidData.length === 0 ? <p className='text-center text-white'>You have no bidders, yet</p> : null}</div>
        <div>{bidData.length !== 0 ? <Bidtable data={search(bidData)} /> : <Loader />}</div></div>
    </div>
  )
}

export default Bidder