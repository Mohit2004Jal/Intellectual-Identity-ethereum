import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { TransactionContext } from '../../context/TransactionContext';

import { Contact } from "../index"
import { copyright2, check, guerlia, regular, miladfak, guyeth, nenad } from "../../assets/index";

import { TypingAnimation } from '../../components/magicui/typing-animation';
import { AnimatedShinyText } from "../../components/magicui/animated-shiny-text";
import { VelocityScroll } from "../../components/magicui/scroll-based-velocity";
import WordPullUp from "../../components/magicui/word-pull-up";
import { Meteors } from "../../components/magicui/meteor";
import { GridPattern } from "../../components/magicui/grid-pattern";
import InteractiveHoverButton from "../../components/magicui/animated-gradient-text";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";

import { cn } from "../../components/lib/utils";


const Home = () => {
  const { connectWallet } = useContext(TransactionContext);
  return (
    <>
      <div className='flex flex-row justify-center bg-black h-[calc(100vh-100px)]'>
        <div className="flex flex-col gap-4 px-16 py-24 w-1/2 h-full text">
          <div className='font-Oswald text-5xl text-white'>
            Mark your
            <TypingAnimation delay={50} className={'font-Lobster text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-700 to-yellow-900'}>
              business name and logo
            </TypingAnimation>
            for life with us.
          </div>
          <div className='text-white font-Roboto text-xl'>
            Prevent others from using yours' invention and when you want you can transfer
            your invention to others by selling it.
          </div>
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
        <div className='w-1/2 h-full'></div>
      </div>
      <div className='bg-black font-Oswald text-yellow-500'>
        <VelocityScroll>Intellectual Identity</VelocityScroll>;
      </div>

      {/* <div className='pt-24 relative flex w-full flex-col justify-center overflow-hidden'>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        <span className='font-Oswald text-5xl text-center'>
          <WordPullUp startOnView={true}>
            Intellectual property management on blockchain
          </WordPullUp>
        </span>
        <div className='flex justify-between gap-5 mx-10 mb-20 phot'>
          <div className='bg-white shadow-gray-500/50 shadow-lg w-96 h-60'>
            <img src={regular} alt="" className='cop' />
          </div>
          <div className='bg-white shadow-gray-500/50 shadow-xl w-96 h-60'>
            <img src={miladfak} alt="" className='cop' />
          </div>
          <div className='bg-white shadow-gray-500/50 shadow-lg w-96 h-60'>
            <img src={guyeth} alt="" className='cop' />
          </div>
        </div>
      </div> */}

      <div className='bg-gray-100 p-20 text-center content'>
        <h1 className='mb-5 text-4xl text-center'>Register your intellectual property</h1>
        <p className='mb-5 text-2xl text-center'>Get your IP approval!</p>
        <div className='text-center'>
          <img src={check} alt="" className='w-36 h-16 chec' />
          <NavLink to={{ pathname: `/ipregister` }}>
            <div className="relative justify-center" text="Register">
              <InteractiveHoverButton />
            </div>
          </NavLink>
        </div>
      </div>

      {/* <div className='flex flex-wrap justify-center my-28'>
        <img src={guerlia} alt="" className='shadow-gray-500/50 shadow-lg border rounded-lg w-96 h-96' />
        <img src={miladfak} alt="" className='shadow-gray-500/50 shadow-xl mt-7 ml-2 border rounded-lg w-96 h-96 phot2 secimg' />
        <img src={nenad} alt="" className='shadow-gray-500/50 shadow-lg ml-2 border rounded-lg w-96 h-96 thirimg' />
      </div>

      <div className='mb-24'>
        <img src={copyright2} alt="" className='copy' />
      </div> */}

      <div className='bg-gray-100'>
        <Contact />
      </div>
    </>
  )
}

export default Home