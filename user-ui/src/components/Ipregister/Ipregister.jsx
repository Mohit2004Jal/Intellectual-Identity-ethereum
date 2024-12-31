"use client";
import React, { useContext, useState } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import { useNavigate } from "react-router-dom";
import { uploadFileToIPFS } from "../../pinata";
import { ChevronRight } from "lucide-react";

import { cn } from "../lib/utils";
import { AnimatedGradientText } from "../magicui/gradient-button";
import { Label } from "../../pages/Contact/label";
import { Input } from "../../pages/Contact/input";
import { FileUpload } from "../magicui/upload";

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
    <main className=' bg-black'>
      <div className='flex justify-center flex-col items-center gap-2'>
        <div className='flex justify-center gap-5'>
          <button className="px-8 py-0.5  border-2 border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            onClick={connectWallet}
            data-testid="wallet"
          >
            Connect Wallet
          </button>
          <button className="px-8 py-0.5  border-2 border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            onClick={routeChange}
          >
            Back
          </button>
        </div>
        <p className='text-center text-neutral-100 font-Roboto'>Don't forget to connect to your wallet</p>
      </div>

      <div className='max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input font-Oswald'>
        <h2 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-themeTwo from-themeThree font-Lobster">
          IP Register
        </h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300 font-Roboto">
          Fill this form for IP registration
        </p>
        <form className="my-8">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="user">IP Name</Label>
            <Input id="user" placeholder="Enter IP Name" type="text"
              onChange={e => updateFormParams({ ...formParams, IPname: e.target.value })} value={formParams.IPname}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              placeholder="Type your description here"
              className={cn(
                "bg-zinc-800 text-neutral-300 p-2 rounded-md",
                "focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 "
              )}
              onChange={e => updateFormParams({ ...formParams, description: e.target.value })} value={formParams.description}
            ></textarea>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" placeholder="Enter Full name" type="text" onChange={e => updateFormParams({ ...formParams, fullname: e.target.value })} value={formParams.fullname} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="country">Country Name</Label>
            <Input id="country" placeholder="Enter your country" type="text" onChange={e => updateFormParams({ ...formParams, country: e.target.value })} value={formParams.country} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="addressplace">Street Name</Label>
            <Input id="addressplace" placeholder="Enter Street Name" type="text"
              onChange={e => updateFormParams({ ...formParams, street: e.target.value })} value={formParams.street}
            />
          </LabelInputContainer>
          <div>
            <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black border-neutral-800 rounded-lg">
              <FileUpload onChange={OnChangeFile} />
            </div>
            {isLoading ? <p className='text-red-600 text-sm'>loading...</p> : null}
          </div>
          <button
            className="relative group bg-gradient-to-br from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_##27272a_inset,0px_-1px_0px_0px_##27272a_inset]"
            type="submit"
            onClick={handleSubmit}
          >
            Register &rarr;
            <BottomGradient />
          </button>
          <div>
            {message}
          </div>
        </form>
      </div>
    </main>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="group-hover:opacity-100 block transition-opacity duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
      <span
        className="group-hover:opacity-100 blur-sm block transition-opacity duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
      />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};

export default Ipregister