import React from 'react';

import HeroSection from '../../components/hero-section/heroSection';
import { VelocityScroll } from "../../components/magicui/scroll-based-velocity";
import WaveBg from '../../components/wavy-bg/wavy-bg';
import { RegisterNow } from '../../components/Register/register';
import { BackgroundBeamsWithCollision } from "../../components/magicui/collision";
import { ContactUs } from "../Contact/Contact"
import { Lamp } from '../../components/lastSection/lastSection';
import { BlockchainTestimonials } from '../../components/testimonials/testinomial';

const Home = () => {
  return (
    <main className='bg-black'>
      <HeroSection />
      <VelocityScroll className="font-Oswald text-yellow-500">
        Intellectual Identity
      </VelocityScroll>;
      <WaveBg />
      <RegisterNow />
      <BlockchainTestimonials />
      <BackgroundBeamsWithCollision>
        <ContactUs />
      </BackgroundBeamsWithCollision>
      <Lamp />
    </main>
  )
}

export default Home