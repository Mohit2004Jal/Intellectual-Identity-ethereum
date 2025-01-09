import React, { useState, useContext, useEffect } from "react";
import { FaHourglass } from "react-icons/fa";
import '../../css/App.css';
import { TransactionContext } from '../../context/TransactionContext';
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { TypingAnimation } from "../../components/magicui/typing-animation";
import { AnimatedShinyText } from "../../components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { WobbleCard } from "../../components/magicui/wobble-card";
import { cn } from "../../components/lib/utils";
import { Meteors } from "../../components/magicui/meteors";
import { NumberTicker } from "../../components/magicui/number-ticker";

import {
  Iptable,
  Loader,
}
  from "../../components/index";

const Ip = () => {
  const { isLoading, textmessage, datas, getAllIps, getAllNFTs, nfts, connectWallet, countAccepted, accept, countRejected, reject, countPend, pend } = useContext(TransactionContext);
  const [query, setQuery] = useState("");
  //const [isLoading, setLoading] = useState(false);
  const keys = ["IPname", "fullname", "country", "addressplace"]
  console.log("mydad", nfts)


  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  }

  useEffect(() => {
    getAllNFTs();
    countAccepted();
    countRejected();
    countPend();
  }, []);

  return (
    <>
      <div className='mb-96 bg-black'>
        {textmessage ?
          <div className="bg-gray-800 static z-10 float-right px-10 py-3">
            <div>
              <p className="text-gray-100">{textmessage}</p>
            </div>
          </div> : null}

        <div className="flex flex-col justify-center items-center gap-4 px-4 lg:px-16 md:px-12 py-24 w-full  md:h-full text-center md:text-left">
          <TypingAnimation className="font-Lobster text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-yellow-700" delay={200} duration={100}>Intellectual Properties
          </TypingAnimation>
          <p className="font-Roboto text-center text-white md:text-xl text-sm">Unlock the true potential of your innovations with blockchain-powered intellectual property solutions. Effortlessly register, manage, and safeguard your creative assets in a secure and transparent ecosystem. Empower your ideas to thrive in a digitally connected world.
          </p>
          <div className="z-10 flex">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex justify-center items-center px-4 py-1 hover:text-neutral-600 hover:dark:text-neutral-400 transition hover:duration-300 ease-out">
                <button
                  onClick={connectWallet}
                  data-testid='button-one'>
                  ✨ Connect Wallet
                </button>
                <ArrowRightIcon className="ml-1 transition-transform group-hover:translate-x-0.5 duration-300 ease-in-out size-3" />
              </AnimatedShinyText>
            </div>
          </div>
        </div>

        <p className="text-4xl md:text-7xl font-Lobster pb-4 text-center text-neutral-100">
          key <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-yellow-700">Metrices</span> at your Glance
        </p>

        <div className="min-h-screen bg-black p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Total Ips Card */}
    <WobbleCard containerClassName="relative w-full p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-lg">
      <div
        className="w-full h-full p-4 rounded-md backdrop-blur-lg"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h3 className="text-xl font-bold text-white mb-2">Total Ips</h3>
        <span className="text-5xl font-bold text-yellow-500">
        <NumberTicker value={pend + accept + reject}/>
        </span>
      </div>
      <Meteors />
    </WobbleCard>

    {/* Total Pendings Card */}
    <WobbleCard
      containerClassName="relative w-full p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-lg"
    >
      <div
        className="w-full h-full p-4 rounded-md backdrop-blur-lg"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h3 className="text-xl font-bold text-white mb-2">Total Pendings</h3>
        <span className="text-5xl font-bold text-yellow-500">
          <NumberTicker value={pend}/>
        </span>
      </div>
      <Meteors />

    </WobbleCard>

    {/* Total Approves Card */}
    <WobbleCard
      containerClassName="relative w-full p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-lg"
    >
      <div
        className="w-full h-full p-4 rounded-md backdrop-blur-lg"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h3 className="text-xl font-bold text-white mb-2">Total Approves</h3>
        <span className="text-5xl font-bold text-yellow-500"><NumberTicker value={accept}/></span>
      </div>
      <Meteors />

    </WobbleCard>

    {/* Total Rejects Card */}
    <WobbleCard
      containerClassName="relative w-full p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-lg"
    >
      <div
        className="w-full h-full p-4 rounded-md backdrop-blur-lg"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h3 className="text-xl font-bold text-white mb-2">Total Rejects</h3>
        <span className="text-5xl font-bold text-yellow-500"><NumberTicker value={reject}/></span>
      </div>
      <Meteors />

    </WobbleCard>
  </div>
</div>

        <div>
          <input
            type="text"
            placeholder="Search..."
            className="look border-solid border-1 mb-12 mt-10 border-gray-300 mx-96 py-3 px-4"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          <NavLink to={{ pathname: `/ipregister` }}>
            <button
              data-testid='button-one'
              className='flex justify-end float-right mb-3 bg-black transition duration-150 ease-out hover:ease-in
        px-3 py-2 rounded text-white hover:brightness-105 transition duration-150 ease-in-out shadow-lg'>
              <FaPlus className='inline text-white mt-1 mr-1' /> Register IPs
            </button>
          </NavLink>
        </div>

        {/* <Iptable className="fades" data={nfts}/> */}

        {nfts.length != 0 ? <Iptable className="fades" /> : <Loader />}
        <div className='flex'>
          {/* <Getips/> */}
          {/* <Iptable className="fades"/> */}
        </div>
      </div>
    </>
  )
}

export default Ip