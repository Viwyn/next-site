'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight, FaRegBell, FaSearch, FaUser } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import CharityCard from "../components/CharityCards";

const PostPage = () => {
    const cardWidth = 389
    const totalCards = 6 // This should ideally be the actual number of cards you intend to display
    const maxMovedAmount = totalCards * cardWidth

    const [movedAmount, setMovedAmount] = useState(0)
    const [visibleCards, setVisibleCards] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // New state for loading

    // Effect to handle the initial loading delay
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1-second loading delay

        return () => clearTimeout(loadingTimer);
    }, []);

    // Effect to gradually reveal cards after loading is complete
    useEffect(() => {
        if (!isLoading) {
            const interval = setInterval(() => {
                setVisibleCards(prev => {
                    // Ensure totalCards is correctly set to the actual number of cards you are rendering
                    // For example, if you are rendering 11 cards as in the map below, totalCards should be 11
                    if (prev < 11) { // Changed to 11 to match the number of rendered cards
                        return prev + 1;
                    }
                    clearInterval(interval);
                    return prev;
                });
            }, 150); // Adjust delay between cards here (milliseconds)

            return () => clearInterval(interval);
        }
    }, [isLoading]); // Run this effect when isLoading changes

    const goRight = () => {
        setMovedAmount(movedAmount => {
            const next = movedAmount - cardWidth
            return Math.max(next, -maxMovedAmount)
        })
    }
    const goLeft = () => {
        setMovedAmount(movedAmount => {
            const next = movedAmount + cardWidth
            return Math.min(next, 0)
        })
    }

    return (
        <div className="min-h-screen min-w-full flex flex-col justify-between bg-[#F8FAED] ">
            <div className="flex justify-center items-center px-4 py-2">
                <div className="flex items-center justify-center">
                    <Image
                        src="/kirimain.webp"
                        alt="Kiri Logo"
                        className="w-15 h-15 mr-1"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-2xl font-extrabold text-black">Gibu</h1>
                </div>
                <div className="bg-white rounded-xl w-[512px] py-3 px-3 ml-5 flex flex-horizontal items-center">
                    <FaSearch className="text-blue-700"></FaSearch>
                    <input
                        type="text"
                        placeholder="Search posts, ideas, and more..."
                        className="ml-5 text-gray-900 w-full"
                    />
                </div>
                <div className="flex items-center mx-7 justify-between w-[100px]">
                    <FaRegBell className="text-[#222221] cursor-pointer hover:scale-105 duration-150 transition-transform" size={20}></FaRegBell>
                    <GoMail className="text-[#222221] cursor-pointer hover:scale-105 duration-150 transition-transform" size={22}></GoMail>
                    <BsLightningCharge className="text-[#222221] cursor-pointer hover:scale-105 duration-150 transition-transform" size={20}
                    ></BsLightningCharge>
                </div>
                <div className="flex items-center justify-between w-auto text-black whitespace-nowrap gap-4">
                    <h1 className="w-fit cursor-pointer hover:scale-105 duration-150 transition-transform">
                        More
                    </h1>
                    <h1 className="w-fit cursor-pointer hover:scale-105 duration-150 transition-transform">
                        My Donations
                    </h1>
                    <h1 className="w-fit cursor-pointer hover:scale-105 duration-150 transition-transform text-blue-700 font-bold">
                        Switch to Insitution
                    </h1>
                </div>
                <div className="px-5">
                    <FaUser className="text-blue-700" size={24}></FaUser>
                </div>
            </div>
            <div className="flex flex-col h-full w-full px-5 items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center">
                    <button className="bg-green-200 hover:bg-green-300 text-green-700 text-xs font-extralight cursor-pointer hover:scale-110 transition duration-150 p-3 rounded-lg border-green-400 border-2">
                        DONATE
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Your help is Needed
                    </h1>
                </div>
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-[440px] w-full">
                        <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{width: '100%'}}></div>
                        </div>
                        <p className="mt-4 text-gray-600">Loading charities...</p>
                    </div>
                ) : (
                    <div className="flex flex-horizontal items-center justify-start gap-20 w-full px-5 overflow-hidden">
                        <div
                            style={{
                                transform: `translateX(${movedAmount}px)`,
                                transition: "transform 0.3s",
                            }}
                            className="flex gap-20"
                        >
                            {/* Render CharityCard components with animation props */}
                            {[...Array(6)].map((_, index) => (
                                <CharityCard
                                    key={index}
                                    isSuggested={index < 2} // Example: alternate suggested cards
                                    isVisible={index < visibleCards} // Pass visibility state
                                    delay={index * 100} // Pass delay for staggered animation
                                />
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex items-center justify-between gap-30 mt-5">
                    <button onClick={goLeft} className="p-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-150 hover:scale-110 cursor-pointer">
                        <FaAngleLeft className="text-gray-900" size={30}></FaAngleLeft>
                    </button>
                    <button onClick={goRight} className="p-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-150 hover:scale-110 cursor-pointer">
                        <FaAngleRight className="text-gray-900" size={30}></FaAngleRight>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pb-5">
                <div className="flex flex-horizontal items-center justify-center">
                    <Image
                        src="/kirimain.webp"
                        alt="Kiri Logo"
                        className="w-10 h-10 mr-1 mb-2"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-s text-gray-900 font-bold">Gibu</h1>
                </div>
                <div className="flex flex-horizontal items-center justify-center text-gray-900 gap-7">
                    <h1 className="cursor-pointer">About</h1>
                    <h1 className="cursor-pointer">Services</h1>
                    <h1 className="cursor-pointer">Join Us</h1>
                    <h1 className="cursor-pointer">Contact</h1>
                    <h1 className="cursor-pointer">Help</h1>
                    <h1 className="cursor-pointer">Privacy</h1>
                </div>
            </div>
        </div>
    );
}

export default PostPage
