import React, { useContext } from 'react';
import { BidderContext } from '../../context/BidderContext';
import { TransactionContext } from '../../context/TransactionContext';
import { useNavigate, useLocation } from "react-router-dom";
import '../../css/Style.css';

const Bidregister = (props) => {
  const { depositBid, isLoading } = useContext(BidderContext);
  const { connectWallet } = useContext(TransactionContext);

  const { state } = useLocation();
  const { item } = state || {};

  const ipname = React.useRef();
  const ipadd = React.useRef();
  const bidval = React.useRef();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/ips`;
    navigate(path);
    navigate(0);
  }

  const handleSubmit = (e) => {
    //const { address, ownerIPname, bidvalue, bidderaddress } = bidformData;    
    e.preventDefault();
    //if (!address || !ownerIPname || !bidvalue || !bidderaddress ) return;
    depositBid(item.tokenId, ipadd.current.value, ipname.current.value, bidval.current.value);
  };

  return (
    <>
      <div className='text-center'>
        <button
          data-testid="wallet"
          onClick={connectWallet}
          className='hover:brightness-125 bg-gradient-to-r from-black via-gray-500 to-black shadow-lg mt-36 mb-10 px-6 p-4 rounded-full text-white text-xl transition duration-150 ease-in-out hover:ease-in'>
          Connect Wallet
        </button>
      </div>

      <div className='bg-white'>
        <p className='mb-16 text-center text-gray-400'>don't forget to connect to your wallet</p>
      </div>

      <div>
        <button className="bg-gradient-to-r from-black via-gray-300 mb-6 arrow" onClick={routeChange}>Back</button>
      </div>

      <div data-testid='show'
        className='flex justify-between font-serif text-gray-600 contain-1 regcont'>
        <form className='flex justify-center bg-white mx-20 mt-28 px-5 bidform'>
          <div className='px-10 fields'>
            <div className='mb-6 py-3 text-black text-center text-sm'><h1>Register IP Bidders'</h1></div>
            <div className=''>
              <div className="mb-4">
                <label className='text-xl'>IP owner public address</label><br></br>
                <input className='px-2 py-2 border rounded text-gray-700 input-box' ref={ipadd} value={item.Nftowner} type="text" name="address" placeholder="ip owner public address" />
              </div>

              <div className='mb-4'>
                <label className='text-xl'>Owners' IP Name</label><br></br>
                <input className='px-2 py-2 border rounded text-gray-700 input-box' ref={ipname} value={item.IPname} type="text" name="ownerIPname" placeholder='owner intellectual property name' />
              </div>

              <div className='mb-4'>
                <label className='text-xl'>Bidding Value</label><br></br>
                <input className='px-2 py-2 border rounded text-gray-700 input-box' ref={bidval} type="number" step='0.1' name="bidvalue" placeholder='bid value' />
              </div>

              <div className='py-3'>
                <button onClick={handleSubmit} className='bg-black mt-5 py-3 rounded w-28 text-lg text-white cursor-pointer'>Bid</button>
                {isLoading ? <p className='text-red-600 text-sm'>loading...</p> : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Bidregister