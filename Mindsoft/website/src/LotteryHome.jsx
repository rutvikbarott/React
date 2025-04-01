import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Header from "./Header";


const LotteryHome = () => {
  // Section 1 Slider
  const slides = [
    { id: 1, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM" },
    { id: 2, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM" },
    { id: 3, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM" },
    { id: 4, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM" },
    { id: 6, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:50 PM" },
    { id: 7, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:50 PM" },
    { id: 8, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:50 PM" },
    { id: 9, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:50 PM" },
  ];

  // Section 2 Slider 
  const section2Slides = [
    { id: 1, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 2, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 3, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 4, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 5, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 6, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 7, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 8, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
    { id: 9, prize: "₹30 Lakhs", draw: "11.03.2025", time: "7:30 PM", ticketPrice: "$50" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [section2Index, setSection2Index] = useState(0);

  // Section 1 Slider 
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Section 2
  const prevSection2Slide = () => {
    setSection2Index((prev) => (prev === 0 ? section2Slides.length - 1 : prev - 1));
  };

  const nextSection2Slide = () => {
    setSection2Index((prev) => (prev === section2Slides.length - 1 ? 0 : prev + 1));
  };
  // section3 
  const steps = [
    { icon: "📋", title: "Sign-up for a free account" },
    { icon: "🎟️", title: "Choose a lottery to play" },
    { icon: "🛒", title: "Buy official tickets" },
    { icon: "📩", title: "Lottery courier service" },
    { icon: "🔔", title: "Receive our notifications" },
    { icon: "🏆", title: "Receive the winner’s reward" },
  ];

  // // section 4 how to play?
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  
  const videoSources = [
    { src: "/videos/tutorial.mp4", type: "video/mp4" },
    { src: "/videos/tutorial.webm", type: "video/webm" }
  ];

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowControls(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // section 5

  const winners = [
    {
      id: 1,
      name: "Rutvik Brahmbahtt",
      prize: "₹25 Lakhs",
      draw: "12345",
      time: "5:55 PM",
      ticketPrice: "₹20"
    },
    {
      id: 2,
      name: "Rutvik Brahmbahtt",
      prize: "₹15 Lakhs",
      draw: "12346",
      time: "11:55 AM",
      ticketPrice: "₹20"
    },
    {
      id: 3,
      name: "Rutvik Brahmbahtt",
      prize: "₹50 Lakhs",
      draw: "12347",
      time: "8:55 PM",
      ticketPrice: "₹20"
    },
    {
      id: 4,
      name: "Rutvik Brahmbahtt",
      prize: "₹30 Lakhs",
      draw: "12348",
      time: "6:30 PM",
      ticketPrice: "₹25"
    },
    {
      id: 5,
      name: "Rutvik Brahmbahtt",
      prize: "₹20 Lakhs",
      draw: "12349",
      time: "10:30 AM",
      ticketPrice: "₹25"
    },
    {
      id: 5,
      name: "Rutvik Brahmbahtt",
      prize: "₹20 Lakhs",
      draw: "12349",
      time: "10:30 AM",
      ticketPrice: "₹25"
    },
    {
      id: 5,
      name: "Rutvik Brahmbahtt",
      prize: "₹20 Lakhs",
      draw: "12349",
      time: "10:30 AM",
      ticketPrice: "₹25"
    },
    {
      id: 5,
      name: "Rutvik Brahmbahtt",
      prize: "₹20 Lakhs",
      draw: "12349",
      time: "10:30 AM",
      ticketPrice: "₹25"
    }, {
      id: 5,
      name: "Rutvik Brahmbahtt",
      prize: "₹20 Lakhs",
      draw: "12349",
      time: "10:30 AM",
      ticketPrice: "₹25"
    }
  ];

  const [rutvik, setrutvik] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setrutvik((prev) => (prev + 1) % winners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [winners.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
    
      setCurrentIndex((prev) => (prev + 1) % winners.length);
    }

    if (touchStart - touchEnd < -50) {

      setCurrentIndex((prev) => (prev - 1 + winners.length) % winners.length);
    }
  };

  // section 7
  const steps1 = [
    {
      number: '01',
      title: 'Choose contest',
      description: 'Register in URL & Choose your contest',
      image: require('../src/photos/game.png.png') 
    },
    {
      number: '02',
      title: 'Buy lucky numbers',
      description: 'Take your numbers & Complete your Purchase',
      image: require('../src/photos/Rectangle 65.png') 
    },
    {
      number: '03',
      title: 'Take your victory',
      description: 'Coming, you are about to reach success.',
      image: require('../src/photos/Rectangle 70.png') 
    }
  ];
  // section 8
  const faqs = [
    { 
      question: "Registration & Account",
      answer: "How does you call any questions for answers? If I already say, please contact us via email and click to note on my phone or if I had any."
    },
    { 
      question: "Customers Support",
      answer: "Have a customer a need from Contact and Thanks support team."
    },
    { 
      question: "Our Guide to Lode:",
      answer: [
        "Get a question about Contact? Get a touch with our Headquarter.",
        "Check out our FAQs update to see if we can provide the information provided."
      ],
      isList: true
    },
    { 
      question: "Contact us",
      answer: ""
    },
    { 
      question: "Help users",
      answer: ""
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-gray-100">
     
      <div className="container mx-auto px-4 py-8" style={{ backgroundColor: "#131037" }}>
   
        <Header/>

   
        <div className="w-full h-64 md:h-96 bg-blue-900 overflow-hidden relative mt-14">
          <img
            src={require(`../src/photos/Mask Group 4.png`)}
            alt="Rajshree 30 Weekly Lottery Banner"
            className="w-full h-full object-cover"
          />

        </div>

       {/* section 1 */}
        <section style={{ backgroundColor: "#131037" }} className="text-white rounded-lg p-6 mb-8 mt-8">
          <h2 className="text-center text-2xl font-bold mb-6">UPCOMING ATTRACTIONS</h2>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="flex-shrink-0 w-1/5 px-2">
                  <div className="bg-orange-500 text-white rounded-lg p-4 text-center shadow-lg">
                    <p className="text-sm font-semibold">RAJSHREE 55 EVENING</p>
                    <p className="text-sm">WIN FIRST PRIZE</p>
                    <p className="text-3xl font-bold">{slide.prize}</p>
                    <p className="text-sm mt-2">Draw: {slide.draw}</p>
                    <p className="text-sm">Time: {slide.time}</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            >
              →
            </button>
          </div>

          <div className="text-center mt-6">
            <button className="text-blue-500 underline hover:text-blue-700">
              VIEW ALL
            </button>
          </div>
        </section>

        {/* Section 2 */}
        <section style={{ backgroundColor: "#131037" }} className="text-white rounded-lg p-6 mb-8">
          <h2 className="text-center text-2xl font-bold mb-6">MONTHLY LOTTERIES</h2>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${section2Index * 20}%)` }}
            >
              {section2Slides.map((slide) => (
                <div key={slide.id} className="flex-shrink-0 w-1/5 px-2">
                  <div className="bg-orange-500 text-white rounded-lg p-4 text-center shadow-lg">
                    <p className="text-sm font-semibold">RAJSHREE 55 EVENING</p>
                    <p className="text-sm">WIN FIRST PRIZE</p>
                    <p className="text-3xl font-bold">{slide.prize}</p>
                    <p className="text-sm mt-2">Draw: {slide.draw}</p>
                    <p className="text-sm">Time: {slide.time}</p>
                    <p className="text-sm">Ticket Price: {slide.ticketPrice}</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSection2Slide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            >
              ←
            </button>
            <button
              onClick={nextSection2Slide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            >
              →
            </button>
          </div>
        </section>
        {/* section3 start */}
        <section>
          <div className="bg-[#0B0D24] text-white py-10 px-6">
            <h2 className="text-center text-2xl font-bold mb-6">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <span className="text-3xl">{step.icon}</span>
                  <p className="text-white">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* how to play */}
        {/* section5 start */}

        <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">Winners Gallery</h1>
        
        <div className="relative overflow-hidden">
         
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${rutvik * 20}%)` }}
          >
            {winners.map((winner) => (
              <div key={winner.id} className="flex-shrink-0 w-1/5 px-2">
                <div className="bg-orange-500 text-white rounded-lg p-4 text-center shadow-lg h-full">
                  <p className="text-sm font-semibold">{winner.name}</p>
                  <p className="text-sm">WIN FIRST PRIZE</p>
                  <p className="text-3xl font-bold my-2">{winner.prize}</p>
                  <p className="text-sm">Draw: {winner.draw}</p>
              
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setrutvik(prev => (prev - 1 + winners.length) % winners.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setrutvik(prev => (prev + 1) % winners.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
       
        <div className="flex justify-center mt-6 space-x-2">
          {winners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${rutvik === index ? 'bg-orange-600' : 'bg-orange-300'}`}
              onClick={() => setrutvik(index)}
            />
          ))}
        </div>
      </div>
    </section>
        {/* setion7 */}
        <section>
        <div className="max-w-6xl  mx-auto">
        <h1 className="text-3xl pt-5  text-center font-bold mb-12 text-white">How to get started</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps1.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-xl bg-[#1A1A36] border border-[#2D2D5A]
              transition-all duration-300 hover:bg-[#25254B] hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20
              hover:-translate-y-2"
            >
         
              <div className="mb-4 w-40 h-40 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="text-5xl font-bold text-blue-400 mb-4">{step.number}</div>
              
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300">
                {step.title}
              </h3>
              
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

        </section>

        {/* sedction 8 */}
        <section>
        
        <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold p-16 text-white mb-8">
          Frequently asked <span className="text-orange-500">questions</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
 
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              className="w-full max-w-md object-contain" 
              src={require(`../src/photos/Rectangle 75.png`)} 
              alt="FAQ Illustration" 
            />
          </div>
          
      
          <div className="lg:w-1/2 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="text-white">
                <div 
                  className="flex justify-between items-center cursor-pointer py-4 group"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className={`text-xl ${
                    index === 0 ? 'font-bold' : 
                    index === 3 ? 'font-medium' : 
                    'font-semibold'
                  } group-hover:text-blue-300 transition-colors`}>
                    {faq.question}
                  </h2>
                  <span className="text-2xl text-blue-400">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>

                {openIndex === index && (
                  <div className="pb-4 pl-4 text-gray-300">
                    {faq.isList ? (
                      <ul className="list-disc pl-6 space-y-2">
                        {faq.answer.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                )}

                {index !== faqs.length - 1 && (
                  <div className="border-t border-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
 
        </section>

      </div>
    </div>
  );
};

export default LotteryHome;