import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';

import { EvervaultCard, Icon } from "../magicui/secure";
import { TypingAnimation } from '../magicui/typing-animation';
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../lib/utils";

export default function HeroSection() {
    const { connectWallet } = useContext(TransactionContext);
    return (
        <div className='relative flex md:flex-row flex-col justify-center md:h-[calc(100vh-100px)]'>
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4 px-4 lg:px-16 md:px-12 py-24 w-full md:w-1/2 h-1/2 md:h-full text-center md:text-left">
                <div className='font-Oswald text-[clamp(2rem,3vw,10rem)] text-white'>
                    Mark your
                    <TypingAnimation delay={50} className={'font-Lobster text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-700 to-yellow-900 text-[clamp(2rem,3vw,10rem)]'}>
                        business name and logo
                    </TypingAnimation>
                    for life with us.
                </div>
                <div className='font-Roboto text-white md:text-xl text-sm'>
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
            <div className='md:block hidden md:w-1/2 md:h-full'>
                <div className="relative flex flex-col justify-center items-start border-white/[0.2] mx-auto p-2 border max-w-sm px-2 my-1">
                    <Icon className="-top-3 -left-3 absolute w-6 h-6 text-white" />
                    <Icon className="-bottom-3 -left-3 absolute w-6 h-6 text-white" />
                    <Icon className="-top-3 -right-3 absolute w-6 h-6 text-white" />
                    <Icon className="-right-3 -bottom-3 absolute w-6 h-6 text-white" />

                    <EvervaultCard text="Decode" />

                    <h2 className="lg:my-4 my-2 font-light text-center text-sm text-white mx-auto">
                        We provide the best security for your intellectual property.
                    </h2>
                    <p className="border-white/[0.2] mx-auto py-0.5 border rounded-full font-light text-sm text-white">
                        Intellectual Property Protection
                    </p>
                </div>
            </div>
        </div>
    )
}