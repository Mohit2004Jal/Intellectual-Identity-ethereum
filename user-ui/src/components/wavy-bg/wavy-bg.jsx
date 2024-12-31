import WordPullUp from "../magicui/word-pull-up";
import { WavyBackground } from "../magicui/wavy-background";
import { DirectionAwareHover } from "../magicui/direction-aware-hover";
import { regular, miladfak, guyeth } from "../../assets/index";

export default function WaveBg() {
    return (
        <div className='relative flex w-full flex-col pt-40 overflow-hidden'>
            <WavyBackground className="mx-auto">
                <span className='text-4xl md:text-5xl lg:text-7xl text-white font-bold font-Roboto inter-var text-center '>
                    <WordPullUp startOnView={true}>
                        Intellectual property management on blockchain
                    </WordPullUp>
                </span>
                <p
                    className="text-base md:text-lg my-10 text-white font-normal inter-var text-center">
                    We provide a platform for you to register your intellectual property on the blockchain.
                </p>

                <div className='flex flex-row flex-wrap justify-center gap-4'>
                    <DirectionAwareHover imageUrl={regular}>
                        <p className="font-bold text-xl">Explore Ethereum</p>
                    </DirectionAwareHover>
                    <DirectionAwareHover imageUrl={miladfak}>
                        <p className="font-bold text-xl text-black">Dive into NFT's</p>
                    </DirectionAwareHover>
                    <DirectionAwareHover imageUrl={guyeth}>
                        <p className="font-bold text-xl">Get Security</p>
                    </DirectionAwareHover>
                </div>
            </WavyBackground>
        </div>
    )
}