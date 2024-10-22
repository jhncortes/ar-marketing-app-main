import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay from embla-carousel-autoplay
import { motion, useScroll, useInView, useTransform } from "framer-motion"
import { features, services, sectors } from '../homeContents.js' // Listed texts for sections

import DemoImage1 from '../assets/demoimage1.jpg';
import DemoImage2 from '../assets/demoimage2.jpg';
import DemoImage3 from '../assets/demoimage3.jpg';
import DemoImage4 from '../assets/demoimage4.jpg';
import DemoImage5 from '../assets/demoimage5.jpg';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const images = [
  DemoImage1,
  DemoImage2,
  DemoImage3,
  DemoImage4,
  DemoImage5,
];


// Home Component
function Home() {

  const ref = React.useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  // const { scrollYProgress, scrollY } = useScroll();
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const handleLearnMoreClick = () => {
    navigate('/info');
  };
  


  const { scrollY } = useScroll(); // Get the scroll position
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <div className='flex flex-col'>
      <div className='min-h-screen py-12 flex flex-col items-center justify-center text-center'>
        <h1 className='my-4'>
          Wicked <span className="text-primary">XR</span> Banners: <br/>
          Bringing Intelligent Virtual Concierges to <span className="text-violet-600">Life</span>
        </h1>
        <br />
      </div>
      <div className='flex items-center justify-center px-6 py-40 bg-stone-50'>
        <div className='max-w-6xl'>
          <div className='flex flex-wrap'>
            <h1>
              <span className="text-violet-600">Revolutionize </span>
              Customer Engagement with Customizable, Knowledge-Rich  
              <span className="text-violet-600"> Virtual Staff</span>
            </h1>
          </div>

           <h4 className='mt-6 font-normal max-w-4xl'>
             Step into the future of customer service with Wicked XR Banners. 
             Our platform offers fully customizable AI-powered concierges with rich, tailored knowledge bases.
             These virtual staff members are ready to transform how you engage with customers in your physical spaces,
             powered by our cutting-edge AI technology.
           </h4>
           <br />
          <Button onClick={handleLearnMoreClick}>Learn More</Button>

        </div>
      </div>
      <div className='flex items-center justify-center text-left px-6 py-40'>
        <div className='max-w-6xl w-full'>
           <h1>Discover the Power of Custom AI</h1>
           <h3 className='mt-6'>Book Your Free 15-Minute Consultation Now!</h3>
            <p className='mt-4 font-normal text-xl max-w-xl'>
              Curious about how intelligent, knowledge-rich virtual concierges can elevate your customer experience?
              Schedule a no-obligation, 15-minute consultation with our experts and unlock the potential of AI-powered assistance in your space.
            </p>
           <br />
           <Button onClick={handleBookingClick}>Schedule Your Free Consultation</Button>
        </div>
      </div>
      <div className='flex items-center justify-center text-center px-6 py-40 bg-stone-50'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1>See Our <span className="text-primary">Virtual Staff</span> in Action!</h1>
          <p className='font-normal text-xl my-8 max-w-2xl '>
            Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:
          </p>
          {/* Carousel with Autoplay Feature */}
          <div className='px-10'>
            <Carousel 
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}   
              className='max-w-xl'>
              <CarouselContent>
                {images.map((image, index) => {
                  return (
                    <CarouselItem key={index}>
                      <img src={image}/>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>  

        </div>
      </div>
      <div className='flex items-center justify-center text-center px-6 py-40'>
        <div className='max-w-7xl'>
          <h1>The Wicked XR Banners Experience:<br></br>Bringing Your Virtual Staff to Life</h1>
          <p className='font-normal text-xl my-8'>
            Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:
          </p>
          <Card className='text-left pt-6 bg-transparent'>
            <CardContent className='space-y-2'>
              {services.map((service, index) => {
                return (
                  <p key={index} className=''><b>{service.title}: </b>{service.description}</p>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='flex items-center justify-center text-center py-40 px-6 bg-stone-50'>
        <div className='max-w-4xl'>
          <h1 className='my-10'>Why Choose Wicked XR Banners for Your Virtual Concierges?</h1>
          <Card className='text-left pt-4 bg-transparent'>
            <CardContent className='space-y-2'>
              {features.map((feature, index) => {
                return (
                  <p key={index} className=''><b>{feature.title}: </b>{feature.description}</p>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center py-40 px-6'>
        <h1 className='font-bold text-center mb-1'>Transform Any Industry with Intelligent Virtual Assistance</h1>
        <p className='font-normal text-xl my-8'>Wicked XR Banners' knowledge-rich virtual concierges can revolutionize various sectors:</p>
        <div className='grid sm:grid-cols-3 items-stretch max-w-4xl gap-6 mt-6 h-full'>
          {sectors.map((sector, index) => {
            return (
              <Card key={index} className='hover:scale-105 transition-all'>
                <CardHeader>
                  <CardTitle>{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{sector.description}</p>
                </CardContent>
              </Card>   
            );
          })}
        </div>
      </div>      

    </div>

  );
}

export default Home;
