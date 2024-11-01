'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
    recommendations: RecommendationType[];
};

const TestimonialSlider = ({ recommendations }: Props) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % recommendations.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + recommendations.length) % recommendations
            .length);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto py-2 p-2 rounded-lg shadow-lg">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}>
                    {recommendations.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-full p-8">
                            <div style={{height:550}} className="bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 p-6">
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={testimonial.recommendationProfilePic}
                                        alt={testimonial.recommendationBy}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold 
                               text-center text-gray-800">{testimonial.recommendationBy}
                                </h3>
                                <p className="text-center text-sm
                              font-semibold text-gray-500">
                                    <span className="text-green-600">{testimonial.company}

                                    </span>
                                </p>
                                <div className="mt-4 text-gray-600 text-justify">
                                    <p className="px-10 max-w-full mx-auto">{testimonial.recommendationText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots for navigation */}
            <div className="flex justify-center space-x-2 mt-4">
                {recommendations.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 
                        rounded-full ${current === index ? 'bg-green-600' :
                                'bg-gray-300'} transition-all duration-300`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>

            {/* Previous button */}
            <div className="absolute top-1/2 
                      left-0 transform -translate-y-1/2">
                <button
                    className="p-2 bg-green-900
                     hover:bg-green-800 
                     text-white rounded-full
                     transition-colors duration-300"
                    onClick={prevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Next button */}
            <div className="absolute top-1/2 
                      right-0 transform -translate-y-1/2">
                <button
                    className="p-2 bg-green-900
                     hover:bg-green-800
                     text-white rounded-full 
                     transition-colors duration-300"
                    onClick={nextSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
