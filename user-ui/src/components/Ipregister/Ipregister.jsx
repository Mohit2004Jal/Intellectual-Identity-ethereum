import React, { useContext, useState } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import { useNavigate } from "react-router-dom";
import { uploadFileToIPFS } from "../../pinata";
import '../../css/Style.css';

const Ipregister = () => {
  const { connectWallet, currentAccount, updateCommission, updateFormParams, formParams,
    formData, registerIP, message, listNFT, uploadMetadataToIPFS } = useContext(TransactionContext);
  const [fileURL, setFileURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //This function uploads the NFT image to IPFS
  async function OnChangeFile(e) {
    setIsLoading(true)
    var file = e.target.files[0];
    try {
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response.pinataURL)
        setFileURL(response.pinataURL);
        setIsLoading(false)
      }
    }
    catch (e) {
      console.log("Error during file upload", e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sweett", { fileURL });
    listNFT(fileURL);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/ips`;
    navigate(path);
    navigate(0);
  }

  return (
    <>
      <div className='text-center'>
        <button
          data-testid="wallet"
          onClick={connectWallet}
          className='hover:brightness-125 bg-gradient-to-r from-black via-gray-500 to-black shadow-lg mt-36 mb-10 px-6 p-4 rounded-full text-white text-xl transition duration-150 ease-out hover:ease-in'>
          Connect Wallet
        </button>
      </div>

      <div className='bg-white'>
        <p className='mb-16 text-center text-gray-400'>don't forget to connect to your wallet</p>
      </div>

      <div>
        <button class="bg-gradient-to-r from-black via-gray-300 mb-6 arrow" onClick={routeChange}>Back</button>
      </div>

      <div data-testid="show"
        className='flex justify-between font-serif text-gray-600 contain-1 regcont'>
        <form className='flex bg-white mx-20 my-16 px-5 ipform'>
          <div className='fields'>
            <div className='mb-6 py-3 text-black'><h1>Register IP</h1></div>
            <div className=''>
              <div className="mb-4">
                <label className='text-xl'>IP Name </label><br></br>
                <input className='px-2 py-2 ip-box border rounded text-gray-700' placeholder="your material name" type="text" name="user" onChange={e => updateFormParams({ ...formParams, IPname: e.target.value })} value={formParams.IPname} />
              </div>
              <div className='mb-4'>
                <label className='text-xl'>Description</label><br></br>
                <input type="textarea" className='px-2 py-2 ip-box border rounded text-gray-700' name="IPname" placeholder='your material description' onChange={e => updateFormParams({ ...formParams, description: e.target.value })} value={formParams.description} />
              </div>
              <div className='mb-4'>
                <label className='text-xl'>Full Name</label><br></br>
                <input className='px-2 py-2 ip-box border rounded text-gray-700' type="text" name="fullname" placeholder='your full name' onChange={e => updateFormParams({ ...formParams, fullname: e.target.value })} value={formParams.fullname} />
              </div>
              <div className='mb-4'>
                <label className='text-xl'>Country Name</label><br></br>
                <input className='px-2 py-2 ip-box border rounded text-gray-700' type="text" name="country" placeholder='your country name' onChange={e => updateFormParams({ ...formParams, country: e.target.value })} value={formParams.country} />
              </div>
            </div>
          </div>
          <div className='mt-28 ml-6 px-4 fields second-box'>
            <div className='mb-4 second-lab'>
              <label className='text-xl'>Street Name</label><br></br>
              <input className='px-2 py-2 ip-box border rounded text-gray-700' type="text" name="addressplace" placeholder='your street name' onChange={e => updateFormParams({ ...formParams, street: e.target.value })} value={formParams.street} />
            </div>

            <div>
              <label className="block mb-2 font-bold text-purple-500 text-sm" htmlFor="image">Upload Logo</label>
              <input type={"file"} onChange={OnChangeFile}></input>
              {isLoading ? <p className='text-red-600 text-sm'>loading...</p> : null}
            </div>

            <div className='py-3 second-lab'>
              <button onClick={handleSubmit} className='bg-black mt-5 py-3 rounded w-28 text-lg text-white cursor-pointer'>Register</button>
            </div>
            <div>
              {message}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Ipregister