import React, { useState } from 'react';
import ChatBot from "react-chatbotify";
import DefaultAvatar from '../assets/tour-guide.png'; // Avatar icon

function ChatbotComponent() {
  
  const CustomizedSettings = {
    header: {
      title: "Wicked Interactive",
      showAvatar: true,
      avatar: DefaultAvatar
    },
    botBubble: {
      showAvatar: true,
      avatar: DefaultAvatar
    },
    chatButton: {
      icon: DefaultAvatar
    }
  };

  // Define a simple FAQ mapping with keywords
  const faqResponses = [
    {
      keywords: ["Wicked XR Banners", "what is", "definition"],
      response: "Wicked XR Banners is an innovative platform that creates AI-powered virtual concierges accessible through QR codes on physical banners or signs, blending the physical and digital worlds for enhanced customer engagement."
    },
    {
      keywords: ["AR Banners", "what are", "augmented reality banners"],
      response: "AR Banners are traditional print banners or posters enhanced with AR technology. By scanning these banners with their smartphones, travelers unlock a world of immersive, interactive content that brings your tours and destinations to life."
    },
    {
      keywords: ["how does", "work", "function"],
      response: "Users scan a QR code on a physical banner, which launches a web-based AR experience featuring an AI-powered virtual concierge that can answer questions and provide assistance."
    },
    {
      keywords: ["download", "app"],
      response: "No, Wicked XR Banners is entirely web-based. Users don't need to download any app to interact with the virtual concierges."
    },
    {
      keywords: ["devices", "compatible"],
      response: "Wicked XR Banners works on a wide range of modern smartphones and tablets that have a camera and can access the internet."
    },
    {
      keywords: ["customizable", "appearance", "personalize"],
      response: "Highly customizable! You can tailor the appearance, personality, knowledge base, and behavior of your virtual concierges to align with your brand and specific needs."
    },
    {
      keywords: ["multiple concierges", "create", "different purposes"],
      response: "Yes, you can create multiple virtual concierges, each with its own specialized knowledge and purpose."
    },
    {
      keywords: ["update", "information"],
      response: "You can easily update your virtual concierge's knowledge base through our user-friendly content management system."
    },
    {
      keywords: ["large companies", "size", "small businesses"],
      response: "No, Wicked XR Banners is designed to be scalable and can benefit businesses of all sizes, from small local shops to large corporations."
    },
    {
      keywords: ["customer data", "privacy", "security"],
      response: "We take data privacy seriously. All interactions are encrypted, and we comply with GDPR and other relevant data protection regulations."
    },
    {
      keywords: ["integrate", "CRM", "customer service"],
      response: "Yes, we offer API integrations with many popular CRM and customer service platforms. Custom integrations can also be developed."
    },
    {
      keywords: ["languages", "support"],
      response: "Our AI can support multiple languages. The specific languages available can be discussed during your consultation."
    },
    {
      keywords: ["setup", "how long", "time"],
      response: "The setup time can vary depending on the complexity of your needs. A basic system can be up and running in a few weeks."
    },
    {
      keywords: ["support", "implementation"],
      response: "We offer comprehensive support throughout the implementation process and ongoing technical support after launch."
    },
    {
      keywords: ["AI learn", "improve"],
      response: "Our AI uses machine learning to analyze interactions and improve its responses over time."
    },
    {
      keywords: ["high volume", "simultaneous users"],
      response: "Yes, our system is designed to scale and can handle multiple simultaneous interactions."
    },
    {
      keywords: ["metrics", "track"],
      response: "You can track various metrics including user engagement rates, common queries, user satisfaction, interaction duration, and more."
    },
    {
      keywords: ["compare", "traditional customer service"],
      response: "Wicked XR Banners offers 24/7 availability, consistent service quality, scalability, and detailed analytics that traditional methods often can't match."
    },
    {
      keywords: ["complex processes", "multi-step"],
      response: "Yes, our AI is capable of handling complex, multi-turn conversations and can guide users through intricate processes."
    },
    {
      keywords: ["limit", "information"],
      response: "While there's no strict limit, we recommend focusing on the most relevant and frequently needed information for optimal performance."
    },
    {
      keywords: ["offline", "functionality"],
      response: "The initial QR code scan requires an internet connection, but we're exploring options for limited offline functionality in future updates."
    },
    {
      keywords: ["incorrect information", "accuracy"],
      response: "We use a combination of carefully curated knowledge bases, ongoing monitoring, and regular updates to maintain accuracy."
    },
    {
      keywords: ["appearance change", "dynamic"],
      response: "Yes, we can implement dynamic appearances that change based on various factors if desired."
    },
    {
      keywords: ["accessibility", "disabilities"],
      response: "We strive to make our solution as accessible as possible, including features like text-to-speech, high contrast modes, and keyboard navigation."
    },
    {
      keywords: ["social media", "integrate"],
      response: "Yes, we can implement sharing features and social media integrations as needed."
    },
    {
      keywords: ["industries", "suitable", "best fit"],
      response: "While Wicked XR Banners can benefit many industries, it's particularly well-suited for retail, hospitality, healthcare, education, finance, and tourism."
    },
    {
      keywords: ["A/B test", "optimize"],
      response: "Yes, our platform supports A/B testing to help you optimize your virtual concierge's performance."
    },
    {
      keywords: ["AI can't answer", "escalate", "human staff"],
      response: "The AI can be programmed to escalate unanswered questions to human staff or provide alternative contact methods."
    },
    {
      keywords: ["payments", "bookings", "process"],
      response: "While the virtual concierge can guide users through the process, actual payment processing would typically be handled through integration with secure payment gateways."
    },
    {
      keywords: ["AI technology", "updates"],
      response: "We continuously work on improving our AI technology and roll out updates regularly to ensure you always have access to the latest capabilities."
    },
    {
      keywords: ["internal communications", "company"],
      response: "Absolutely! Many companies use our platform for internal training, onboarding, and information dissemination."
    },
    {
      keywords: ["brand consistency", "touchpoints"],
      response: "We work closely with you to define brand guidelines that are then consistently applied across all virtual concierge interactions."
    },
    {
      keywords: ["remember preferences", "repeat visitors"],
      response: "Yes, with user consent, the system can remember preferences and personalize experiences for repeat visitors."
    },
    {
      keywords: ["different departments", "products"],
      response: "Certainly! You can create multiple specialized virtual concierges to cater to different areas of your business."
    },
    {
      keywords: ["peak traffic", "handle", "spikes"],
      response: "Our cloud-based infrastructure is designed to automatically scale to handle traffic spikes, ensuring consistent performance."
    },
    {
      keywords: ["analytics", "foot traffic", "engagement"],
      response: "Yes, by tracking QR code scans and interactions, we can provide insights into physical space engagement patterns."
    },
    {
      keywords: ["hello", "hi", "greetings"],
      response: "Hello! Welcome to Wicked Interactive AR Marketing. How can I assist you today?"
    },
    // {
    //   keywords: ["thank you", "thanks"],
    //   response: "You're welcome! If you have any more questions, feel free to ask!"
    // },
    // {
    //   keywords: ["no", "goodbye", "bye", "see you later"],
    //   response: "Goodbye! Have a great day! If you need assistance again, don't hesitate to reach out."
    // }
  ];

  const flow = {
    start: {
      message: "Hello! Welcome to Wicked Interactive AR Marketing.",
      transition: {duration: 0 },
      path: 'ask_user'
    },
      ask_user: {
      message: 'How may I assist you?',
      path: 'process_input'

    },
    process_input: {
      transition: {duration: 0},
      path: async (params) => checkInput(params)
    },
    unknown_input: {
      message: 'Sorry, I did not understand your input. Can you please repeat that?',
      path: 'process_input'
    },
    respond_input: {
      transition: {duration: 3000},
      message: async (params) => returnResponse(params),
      path: 'anything_else'
    },
    anything_else: {
      message: 'Is there anything else you need help with?',
      path: async (params) => checkInput(params)
    },
    thanks: {
      message: "You're welcome! If you have any more questions, feel free to ask!",
      path: 'process_input'
    },
    end: {
      message: "Goodbye! Have a great day! If you need assistance again, don't hesitate to reach out."
    }
  };

  function returnResponse(params) {
    let userInput = params.userInput.toLowerCase();
    for (const faq of faqResponses) {
      for (const keyword of faq.keywords) {
        if (userInput.includes(keyword.toLowerCase())) {
          // Returns response based via keyword
          return faq.response;  
        }
      }
    }
    return null;
  }

  function checkInput(params) {
    const userInput = params.userInput.toLowerCase(); // Get the user input in lower case
    // Check if the user input matches goodbye keywords
    const goodbyes = ["no", "goodbye", "bye", "see you later"];
    const thanks = ["thank you", "thanks"];
    if (goodbyes.includes(userInput)) {
      console.log("end")
      return 'end'; // Transition to the end state
    }
    if (thanks.includes(userInput)) {
      console.log("thanks")
      return 'thanks'; // Transition to the end state
    }

    if (["goodbye", "bye", "see you later"].includes(userInput)) {
      console.log("end")
      return 'end'; // Transition to the end state
    }
  
    const response = returnResponse(params);
    if (response) {
      return 'respond_input'; // If there's a response, continue
    }
    return 'unknown_input'; // If no response is found, ask again
  }
  

  return (
    <ChatBot settings={CustomizedSettings} flow={flow} />
  );
}

export default ChatbotComponent;
