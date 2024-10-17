import React from 'react';
import { Button } from '@/components/ui/button';
import DemoImage1 from '../assets/demoimage1.jpg';
import DemoImage2 from '../assets/demoimage2.jpg';
import DemoImage3 from '../assets/demoimage3.jpg';
import DemoImage4 from '../assets/demoimage4.jpg';
import DemoImage5 from '../assets/demoimage5.jpg';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay from embla-carousel-autoplay
import { motion, useScroll, useInView, useTransform } from "framer-motion"
import { features, services, sectors } from '../homeContents.js' // Listed texts for sections

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
      <div className='min-h-screen bg-stone-50 py-12'>
        <div className='flex flex-col items-center justify-center text-center'>
         <h1 className='my-4 text-7xl'>
           Wicked <span className="text-primary">XR</span> Banners: <br/>
           Bringing Intelligent Virtual Concierges to <span className="text-violet-600">Life</span>
         </h1>
         <br />
        </div>
      </div>
      <div className='flex items-center justify-center px-6 py-40'>
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
      <div className='flex items-center justify-center bg-stone-50 text-center px-6 py-40'>
        <div className='max-w-4xl'>
           <h1>Discover the Power of Custom AI</h1>
           <h3 className='mt-6'>Book Your Free 15-Minute Consultation Now!</h3>

            <p className='mt-4 font-normal text-xl max-w'>
              Curious about how intelligent, knowledge-rich virtual concierges can elevate your customer experience?
              Schedule a no-obligation, 15-minute consultation with our experts and unlock the potential of AI-powered assistance in your space.
            </p>


           {/* <img src={Placeholder} className='mt-6' /> */}
           <br />
           <Button onClick={handleBookingClick}>Schedule Your Free Consultation</Button>
        </div>
      </div>
      <div className='flex items-center justify-center text-center px-6 py-40'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1>See Our <span className="text-primary">Virtual Staff</span> in Action!</h1>
          <p className='font-normal text-xl my-8 max-w-2xl '>
            Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:
          </p>
          {/* Carousel with Autoplay Feature */}  
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
      <div className='flex items-center justify-center text-center bg-stone-50 px-6 py-40'>
        <div className='max-w-7xl'>
          <h1>The Wicked XR Banners Experience:<br></br>Bringing Your Virtual Staff to Life</h1>
          <p className='font-normal text-xl my-8'>
            Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:
          </p>
          <Card className='text-left pt-6 bg-transparent'>
            <CardContent className='space-y-4'>
              {services.map((service, index) => {
                return (
                  <p className=''><b>{service.title}: </b>{service.description}</p>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='flex items-center justify-center text-center py-40 px-6'>
        <div className='max-w-4xl'>
          <h1 className='my-10'>Why Choose Wicked XR Banners for Your Virtual Concierges?</h1>
          <Card className='text-left pt-4 bg-transparent'>
            <CardContent className='space-y-4'>
              {features.map((feature, index) => {
                return (
                  <p className=''><b>{feature.title}: </b>{feature.description}</p>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center py-40 px-6'>
        <h1 className='font-bold text-center mb-1'>Transform Any Industry with Intelligent Virtual Assistance</h1>
        <h3 className='text-center my-6'>Wicked XR Banners' knowledge-rich virtual concierges can revolutionize various sectors:</h3>
        <div className='grid grid-cols-3 items-center max-w-4xl gap-6 mt-6'>
          {sectors.map((sector) => {
            return (
              <Card className='hover:scale-105 transition-all'>
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
  //   <main className='flex flex-col overflow-hidden min-h-screen items-center justify-center flex-wrap'>
  //     <div className='text-center pt-20'>
  //       <h1 className='my-4 text-6xl'>
  //         Wicked <span className="text-primary">XR</span> Banners: <br/>
  //         Bringing Intelligent Virtual Concierges to <span className="text-violet-600">Life</span>
  //       </h1>
  //       <br />

  //     </div>
  //     <div className='max-w-6xl'>
  //       <div className='py-40'>
  //         <h1>
  //           <span className="text-violet-600">Revolutionize </span>
  //           Customer Engagement with Customizable, Knowledge-Rich  
  //           <span className="text-violet-600"> Virtual Staff</span>
  //         </h1>
  //         <h4 className='mt-6 font-normal max-w-3xl'>
  //           Step into the future of customer service with Wicked XR Banners. 
  //           Our platform offers fully customizable AI-powered concierges with rich, tailored knowledge bases.
  //           These virtual staff members are ready to transform how you engage with customers in your physical spaces,
  //           powered by our cutting-edge AI technology.
  //         </h4>
  //         <br />
  //       <Button onClick={handleLearnMoreClick}>Learn More</Button>

  //       </div>

  //       <div className='py-40 text-center'>
  //         <h1>Discover the Power of Custom AI</h1>
  //         <h3 className='mt-6'>Book Your Free 15-Minute Consultation Now!</h3>
  //         <p className='mt-4 font-normal text-xl text-center'>
  //           Curious about how intelligent, knowledge-rich virtual concierges can elevate your customer experience? 
  //           Schedule a no-obligation, 15-minute consultation with our experts and unlock the potential of AI-powered assistance in your space.
  //         </p>
  //         {/* <img src={Placeholder} className='mt-6' /> */}
  //         <br />
  //         <Button onClick={handleBookingClick}>Schedule Your Free Consultation</Button>
  //       </div>
  //     </div>


  //     <div className='flex flex-col items-center justify-center text-center py-40'>
  //       <h1>See Our <span className="text-primary">Virtual Staff</span> in Action!</h1>
  //       <p className='font-normal text-xl my-8 max-w-2xl '>
  //         Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:
  //       </p>
  //       {/* <CarouselPlugin /> */}
  //       <Carousel className='max-w-xl'>
  //         <CarouselContent>
  //           {images.map((image, index) => {
  //             return (
  //               <CarouselItem key={index}>

  //                 <img src={image}/>

  //               </CarouselItem>
  //             );
  //           })}
  //         </CarouselContent>
  //         <CarouselPrevious />
  //         <CarouselNext />
  //       </Carousel>
  //     </div>

  //     {/* New Section: The Wicked XR Banners Experience */}
  //     <div className='flex flex-col items-center justify-center text-center py-40'>
  //           <h1 className='text-3xl font-bold'>The Wicked XR Banners Experience : Bringing Your Virtual Staff to Life</h1>
  //           <div className='bg-white p-6 rounded-lg shadow-md'>
  //               <h3 className='text-2xl font-semibold'>Creating Your Custom AI-Powered Concierge</h3>
  //               <ul className='list-disc ml-6 mt-2 space-y-2 text-left'>
  //                   <li><b>Consultation:</b> Begin with a free 15-minute consultation to discuss your unique needs and goals.</li>
  //                   <li><b>Knowledge Base Creation:</b> We'll help you build a comprehensive, tailored knowledge base for your AI.</li>
  //                   <li><b>Character Design:</b> Collaborate with our team to create virtual staff that perfectly embodies your brand.</li>
  //                   <li><b>AI Personality Development:</b> Fine-tune the AI's personality, communication style, and decision-making processes.</li>
  //                   <li><b>Implementation:</b> We'll set up the WebAR technology and QR codes in your physical space.</li>
  //                   <li><b>Launch:</b> Your customers can now interact with knowledgeable, personalized virtual concierges with a simple QR code scan.</li>
  //                   <li><b>Ongoing Optimization:</b> Continuously refine your AI's performance based on real-world interactions and analytics.</li>
  //               </ul>
  //           </div>
  //       </div>

  //     {/* New Section: Why Choose Wicked XR Banners */}
  //     <div className='flex flex-col justify-center items-center py-40'>
  //         <h1 className='font-bold text-center max-w-3xl'>Why Choose Wicked XR Banners for Your Virtual Concierges?</h1>
  //         <div className='bg-white p-6 rounded-lg shadow-md'>
  //             <ul className='list-disc ml-6 mt-2 space-y-2 text-left'>
  //                 <li><b>Deep, Customizable Knowledge:</b> Create virtual staff as informed as your top experts.</li>
  //                 <li><b>Natural, Context-Aware Interactions:</b> Offer more human-like, intelligent conversations.</li>
  //                 <li><b>Scalable Personalized Service:</b> Provide one-on-one attention to every customer without increasing costs.</li>
  //                 <li><b>24/7 Availability:</b> Your virtual concierges are always ready to assist, day or night.</li>
  //                 <li><b>Consistent Brand Experience:</b> Ensure every interaction aligns perfectly with your brand identity.</li>
  //                 <li><b>Valuable Customer Insights:</b> Gain deep understanding of customer needs through AI-powered analytics.</li>
  //             </ul>
  //         </div>
  //     </div>

  //     {/* New Section: Transform Any Industry with Intelligent Virtual Assistance */}
  //     <div className='flex flex-col justify-center items-center py-40'>
  //         <h1 className='font-bold text-center mb-1'>Transform Any Industry with Intelligent Virtual Assistance</h1>
  //         <h3 className='text-center my-6'>Wicked XR Banners' knowledge-rich virtual concierges can revolutionize various sectors:</h3>
  //         <div className='grid grid-cols-3 items-center max-w-4xl gap-6 mt-6'>
  //           {sectors.map((sector) => {
  //             return (
  //               <Card className='hover:scale-105 transition-all'>
  //                 <CardHeader>
  //                   <CardTitle>{sector.title}</CardTitle>
  //                 </CardHeader>
  //                 <CardContent>
  //                   <p>{sector.description}</p>
  //                 </CardContent>
  //               </Card>   
  //             );
  //           })}
  //         </div>
  //     </div>
      
  //   </main>
  // );
  );
}

export default Home;
