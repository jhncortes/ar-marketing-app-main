import React from 'react';
import { Button } from '@/components/ui/button';
import Placeholder from '../assets/placeholder.svg';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



function Info() {
  const navigate = useNavigate(); // Initialize useNavigate

  const cardContents = [
    {
      title: '1. AI-Powered Virtual Concierges with Custom Knowledge Bases',
      description: 'Create virtual staff as knowledgeable as your best employees:',
      contentList: [
        { feature: 'Tailored Knowledge Creation:', description: 'Build custom knowledge bases specific to your business, products, or services.' },
        { feature: 'Easy Knowledge Integration:', description: 'Seamlessly import existing databases, manuals, or FAQs to create comprehensive AI knowledge.' },
        { feature: 'Continuous Learning:', description: 'Your virtual concierges can update their knowledge base through interactions, staying current with the latest information.' }
      ]
    },
    {
      title: '2. Advanced AI Capabilities for Natural Interactions',
      description: 'Our proprietary AI technology enables unparalleled virtual assistance:',
      contentList: [
        { feature: 'Natural Language Understanding:', description: 'Our AI comprehends context and nuance, providing more human-like interactions.' },
        { feature: 'Multi-Turn Conversations:', description: 'Engage in complex, context-aware dialogues that feel natural and productive.' },
        { feature: 'Sentiment Analysis:', description: 'Virtual concierges can detect and respond to customer emotions, enhancing the quality of interactions.' }
      ]
    },
    {
      title: '3. Fully Customizable Virtual Characters',
      description: 'Tailor your virtual staff to embody your brand:',
      contentList: [
        { feature: 'Visual Customization:', description: 'Create characters that align with your brand aesthetics, from photorealistic to stylized designs.' },
        { feature: 'Personality Programming:', description: 'Define unique personalities that reflect your brand voice and values.' },
        { feature: 'Multilingual Capabilities:', description: 'Offer support in multiple languages to cater to a diverse customer base.' }
      ]
    },
    {
      title: '4. Seamless WebAR Integration',
      description: 'Bring your virtual concierges into the physical world:',
      contentList: [
        { feature: 'QR Code Activation:', description: 'Simple QR codes serve as gateways to your AI-powered staff.' },
        { feature: 'Web-Based Platform:', description: 'No app downloads required, ensuring easy access for all customers.' },
        { feature: 'Cross-Device Compatibility:', description: 'Works on a wide range of smartphones and tablets.' }
      ]
    },
    {
      title: '5. Continuous Improvement and Analytics',
      description: 'Optimize your virtual staff\'s performance over time:',
      contentList: [
        { feature: 'Interaction Analytics:', description: 'Gain valuable insights into customer queries, preferences, and satisfaction.' },
        { feature: 'Performance Metrics:', description: 'Track key performance indicators to continually enhance your virtual concierges.' },
        { feature: 'Regular AI Updates:', description: 'Benefit from ongoing improvements to our underlying AI technology.' }
      ]
    }
  ];
  

  const handleBookingClick = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div class='my-16 py-8 px-6 min-h-screen'>
      <div className=' flex flex-col items-center text-center mb-12'>
          <h1 class='mb-2'>Our Groundbreaking Solution</h1>
          <p className='text-xl mt-4 font-normal max-w-2xl'>Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:</p>
      </div>
      <div className='grid grid-col-6 space-y-28 items-center justify-center my-24'>
        {cardContents.map((content, index) => {
          return (
            <div key={index} className='max-w-7xl w-full'>
              <h2 className='mb-4 max-w-7xl text-4xl font-bold'>{content.title}</h2>
              <p className='mb-4 text-xl'>{content.description}</p>
              <div className='grid sm:grid-cols-3 grid-cols-1 gap-6 mt-8'>
                {content.contentList.map((list, index) => {
                  return (
                    <Card className='hover:scale-105 transition-all'>
                      <CardHeader>
                        <CardTitle>{list.feature}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{list.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}


      </div>
      <div className=' flex flex-col items-center text-center mt-20'>
          <h1 class='mb-2 max-w-3xl'>Embark on Your AI-Powered Customer Service Journey</h1>
          <p className='mt-6 text-xl max-w-2xl'>
              Don't miss the opportunity to lead the revolution in intelligent, personalised customer service. 
              With Wicked XR Banners, you can offer an unparalleled level of assistance and engagement.
            </p>
            <p className='mt-2 text-xl max-w-2xl'>
              Take the first step towards transforming your space with knowledgeable, always-available virtual staff. 
              Schedule your free 15-minute consultation today and discover how Wicked XR Banners can elevate your customer service to extraordinary new heights.
            </p>
            <Button onClick={handleBookingClick} className='mt-6 bg-violet-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-violet-700'>
              Book Your Free Consultation Now
            </Button>
      </div>
    </div>
  );
}

        {/* <div className='max-w-7xl w-full'>
            <h1 class='mb-2 max-w-3xl'>Embark on Your AI-Powered Customer Service Journey</h1>
            <p className='mt-6 text-xl max-w-2xl'>
              Don't miss the opportunity to lead the revolution in intelligent, personalised customer service. 
              With Wicked XR Banners, you can offer an unparalleled level of assistance and engagement.
            </p>
            <p className='mt-2 text-xl max-w-2xl'>
              Take the first step towards transforming your space with knowledgeable, always-available virtual staff. 
              Schedule your free 15-minute consultation today and discover how Wicked XR Banners can elevate your customer service to extraordinary new heights.
            </p>
            <Button onClick={handleBookingClick} className='mt-6 bg-violet-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-violet-700'>
              Book Your Free Consultation Now
            </Button>
        </div>
      </div> */}


export default Info;
