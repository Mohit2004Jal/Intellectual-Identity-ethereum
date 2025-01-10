import { useParams, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { ShortenAddress } from "../index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Loader} from "../index";

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const { connectWallet, currentAccount, getNFTData } =
    useContext(TransactionContext);
  const navigate = useNavigate();
  const { tokenId } = useParams();

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNFTs, setFilteredNFTs] = useState([]);
  const [nftData, setNftData] = useState([]);

  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const nftCardRefs = useRef([]);
  const footerRef = useRef(null);

  // Fetch NFT data only if the wallet is connected
  useEffect(() => {
    if (currentAccount) {
      setLoading(true);
      getNFTData(tokenId)
        .then((data) => {
          setNftData(data);
          setFilteredNFTs(data); // Initially show all NFTs
        })
        .finally(() => setLoading(false));
    }
  }, [tokenId, currentAccount, getNFTData]);

  // Animations
  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -70,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(sectionRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.6,
      ease: "power3.out",
    });

    gsap.from(footerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.8,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  }, []);

  const handleNavigateBack = () => {
    navigate("/ips");
    navigate(0);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter NFTs based on search term
    const filtered = nftData.filter((nft) =>
      nft.IPname.toLowerCase().includes(searchTerm)
    );
    setFilteredNFTs(filtered);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* Navigation */}
      <header
        ref={headerRef}
        className="p-4 flex items-center justify-between bg-gradient-to-r from-black via-gray-800 to-black shadow-xl sticky top-0 z-50"
      >
        <button
          onClick={handleNavigateBack}
          className="bg-[#E7AF08] text-black font-bold px-4 py-2 rounded-md md:px-6 md:py-3 hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          ← Back
        </button>
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide text-[#E7AF08] animate-pulse">
          ✨ My Profile
        </h1>
      </header>

      {/* Wallet Section */}
      <section
        ref={sectionRef}
        className="flex flex-col items-center justify-center text-center my-8 md:my-14 px-4"
      >
        {!currentAccount ? (
          <>
            <p className="text-red-500 mt-4 animate-bounce text-lg">
              ⚠️ Wallet not connected! Please connect to proceed.
            </p>
            <button
              onClick={connectWallet}
              className="bg-[#E7AF08] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-400 ease-in-out mt-4"
            >
              Connect Wallet
            </button>
          </>
        ) : (
          <>
            <p className="bg-gray-800 text-[#E7AF08] rounded-md px-4 py-2 mt-4 md:mt-6 font-medium shadow-sm">
              Connected as: <strong>{ShortenAddress(currentAccount)}</strong>
            </p>
          </>
        )}
      </section>

      {/* Profile Information */}
      {currentAccount && (
        <>
          <section className="text-center mb-8 px-4">
            <h2 className="text-xl md:text-3xl font-bold my-4 md:my-6 text-[#E7AF08] underline">
              Your NFT Collection
            </h2>
            <p className="text-sm md:text-lg text-gray-400 animate-opacity">
              Total NFTs: <strong>{filteredNFTs.length}</strong>
            </p>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search NFTs..."
              className="mt-4 p-2 rounded-md w-full md:w-1/3 text-black text-center"
            />
          </section>

          {/* NFTs Showcase */}
          <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {loading ? (
              <>
                <p className="text-center text-gray-400">Loading NFTs...</p>
                <Loader />
              </>
            ) : filteredNFTs.length > 0 ? (
              filteredNFTs.map((nft, index) => (
                <div
                  key={index}
                  ref={(el) => (nftCardRefs.current[index] = el)}
                  className="group relative bg-gray-900 rounded-lg md:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-transform duration-400"
                >
                  <img
                    src={nft.image}
                    alt={nft.IPname}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-2xl font-semibold text-[#E7AF08] group-hover:text-white">
                      {nft.IPname}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-2 mb-4">
                      {nft.description}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      <strong>Owner:</strong> {nft.fullname} ({nft.Nftowner})
                    </p>
                    <span
                      className={`absolute top-2 right-2 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${
                        nft.status === "Available"
                          ? "bg-[#E7AF08] text-black animate-pulse"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {nft.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-6 text-sm md:text-lg">
                No NFTs found. Try searching or connect your wallet. 🚀
              </p>
            )}
          </section>
        </>
      )}
    </div>
  );
}
