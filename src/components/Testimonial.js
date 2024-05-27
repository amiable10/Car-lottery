import React from 'react';
import client1 from "../images/client 1.png";
import { Slide, } from "react-awesome-reveal";

function Testimonial() {
  return (
    <section className='flex flex-col md:flex-row  h-full overflow-hidden px-15'>

        
        <div className='w-full md:w-1/2 bg-[#e7edfa] h-[50vh] flex flex-col items-center justify-center text-center px-10 gap-8'>
          <Slide direction='left'>
            <p className='text-xl font-semibold'>
                "Unbelievable this is a dream come true, <br /> no way would i ever think i would own a car like this. What a great blokes. <br /> Thank you very much! <br /> 5 star from me!!!"
            </p>

            <p className='uppercase text-lg'>
                Danny Churchman
            </p>
          </Slide>
        </div>
        

        
        <div className='w-full md:w-1/2 h-[50vh] overflow-hidden'>
          <Slide direction='right'>
            <img src={client1} alt='' className='h-full w-full' />
          </Slide>
        </div>
        

    </section>
  );
}

export default Testimonial;