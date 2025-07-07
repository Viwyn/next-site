import React from "react";
import Image from "next/image";
import { FaRegBell, FaSearch, FaUser } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";

const PostPage = () => {
	return (
		<div className="min-h-screen min-w-full flex flex-col justify-between bg-[#F8FAED] ">
			<div className="flex justify-center items-center px-4">
				<div className="flex items-center justify-center">
					<Image
						src="/kirisit.webp"
						alt="Kiri Logo"
						className="w-20 h-20"
						width={100}
						height={100}
					/>
					<h1 className="text-2xl font-extrabold text-black">Gibu</h1>
				</div>
				<div className="bg-white rounded-xl w-[512px] py-3 px-3 ml-5 flex flex-horizontal items-center">
					<FaSearch className="text-blue-700"></FaSearch>
                    <input type="text" placeholder="Search posts, ideas, and more..." className="ml-5"/>
				</div>
				<div className="flex items-center mx-7 justify-between w-[100px]">
					<FaRegBell className="text-[#222221]" size={20}></FaRegBell>
					<GoMail className="text-[#222221]" size={22}></GoMail>
					<BsLightningCharge
						className="text-[#222221]"
						size={20}
					></BsLightningCharge>
				</div>
				<div className="flex items-center justify-between w-auto text-black whitespace-nowrap gap-4">
					<h1 className="w-fit">More</h1>
					<h1 className="w-fit">My Donations</h1>
					<h1 className="w-fit text-blue-700 font-bold">Switch to Insitution</h1>
				</div>
				<div className="px-5">
					<FaUser className="text-blue-700" size={24}></FaUser>
				</div>
			</div>
			<div className="flex flex-col h-full w-full px-5 items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center">
                    <button className="bg-green-200 hover:bg-green-300 text-green-700 text-xs font-extralight cursor-pointer hover:scale-110 transition duration-150 p-3 rounded-lg border-green-400 border-2">DONATE</button>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Your help is Needed
                    </h1>
                </div>
                <div className="flex flex-horizontal items-center justify-start gap-20 w-full px-5 overflow-hidden">
                    <div className="flex flex-col items-center justify-start h-[440px] min-w-[369px] bg-gray-100">
                        <div className="bg-gray-900 h-2/5 w-full flex items-center justify-center">
                            <h1>Image here</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 w-full">
                            <div className="flex flex-col items-start justify-between w-full">
                                <div className="text-center text-[#027A48] text-xs bg-[#ECFDF3] px-2 py-1 rounded-lg">
                                    Education
                                </div>
                                <h1 className="font-bold text-xl text-gray-900 pt-5">Organisation 1</h1>
                            </div>
                            <div className="flex flex-col items-start justify-between w-full pt-3 border-b-2 border-gray-300 pb-5">
                                <div className="w-full h-[10px] bg-gray-200 rounded-xl">
                                    <div className="w-[75%] h-full bg-[#FBBF24] rounded-xl"/>
                                </div>
                                <div className="flex flex-horizontal items-center justify-between w-full pt-2">
                                    <div className="pt-2">
                                        <h1 className="text-gray-700 text-s pt-2">Goal</h1>
                                        <h1 className="text-gray-900 text-xl font-bold">MYR 1000</h1>
                                    </div>
                                    <div className="pt-2">
                                        <h1 className="text-gray-700 text-s pt-2">Collected</h1>
                                        <h1 className="text-gray-900 text-xl font-bold">MYR 750</h1>
                                    </div>
                                    <div className="pt-2">
                                        <h1 className="text-gray-700 text-s pt-2">Remaining</h1>
                                        <h1 className="text-gray-900 text-xl font-bold">MYR 250</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-horizontal items-center justify-between w-full pt-5">
                                <button className="bg-blue-500 font-bold text-xl py-3 w-full mr-10 cursor-pointer hover:bg-blue-600 transition-colors duration-150 rounded-4xl">Donate</button>
                                <div className="text-gray-900 bg-gray-200 cursor-pointer hover:bg-gray-300 transition-colors duration-150 p-3 rounded-full">
                                    <PiShareFat size={24}></PiShareFat>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div className="flex flex-col items-center justify-center pb-5">
                <div className="flex flex-horizontal items-center justify-center">
                    <Image
						src="/kirisit.webp"
						alt="Kiri Logo"
						className="w-15 h-15"
						width={100}
						height={100}
					/>
                    <h1 className="text-s text-gray-900 font-bold">Gibu</h1>
                </div>
                <div className="flex flex-horizontal items-center justify-center text-gray-900 gap-7">
                    <h1>About</h1>
                    <h1>Services</h1>
                    <h1>Join Us</h1>
                    <h1>Contact</h1>
                    <h1>Help</h1>
                    <h1>Privacy</h1>
                </div>
            </div>
		</div>
	)
}

export default PostPage
