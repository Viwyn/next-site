'use client'

import React from "react";
import { PiShareFat } from "react-icons/pi";

interface CharityCardProps {
    isSuggested?: boolean;
}

const CharityCard : React.FC<CharityCardProps> = ({isSuggested=false}) => {
	return (
		<div className={`flex flex-col items-center justify-start h-[440px] min-w-[369px] ${isSuggested ? 'bg-yellow-100' : 'bg-gray-100'} hover:scale-101 transition-transform duration-150 rounded-xl p-2 hover-shadow-lg py-2`}>
			<div className="bg-gray-900 h-2/5 w-full flex items-center justify-center">
				<h1>Image here</h1>
			</div>
			<div className="flex flex-col items-center justify-center p-3 w-full">
				<div className="flex flex-col items-start justify-between w-full">
                    <div className="flex flex-horizontal items-center justify-between w-full">
                        <div className="text-center text-[#027A48] text-xs bg-[#ECFDF3] px-2 py-1 rounded-lg">
                            Education
                        </div>
                        <div className={`text-gray-900 text-xs p-2 rounded-2xl bg-yellow-500 ${isSuggested ? '' : 'hidden'}`}>
                            {isSuggested ? ' AI Suggested' : ''}
                        </div>
                    </div>
					<h1 className="font-bold text-xl text-gray-900 pt-5">
						Organisation 1
					</h1>
				</div>
				<div className="flex flex-col items-start justify-between w-full pt-3 border-b-2 border-gray-300 pb-5">
					<div className="w-full h-[10px] bg-gray-200 rounded-xl">
						<div className="w-[75%] h-full bg-[#FBBF24] rounded-xl" />
					</div>
					<div className="flex flex-horizontal items-center justify-between w-full pt-2">
						<div className="pt-2">
							<h1 className="text-gray-700 text-s pt-2">Goal</h1>
							<h1 className="text-gray-900 text-xl font-bold">
								MYR 1000
							</h1>
						</div>
						<div className="pt-2">
							<h1 className="text-gray-700 text-s pt-2">
								Collected
							</h1>
							<h1 className="text-gray-900 text-xl font-bold">
								MYR 750
							</h1>
						</div>
						<div className="pt-2">
							<h1 className="text-gray-700 text-s pt-2">
								Remaining
							</h1>
							<h1 className="text-gray-900 text-xl font-bold">
								MYR 250
							</h1>
						</div>
					</div>
				</div>
				<div className="flex flex-horizontal items-center justify-between w-full pt-5">
					<button className="bg-blue-500 font-bold text-xl py-3 w-full mr-10 cursor-pointer hover:bg-blue-600 transition-colors duration-150 rounded-4xl">
						Donate
					</button>
					<div className="text-gray-900 bg-gray-200 cursor-pointer hover:bg-gray-300 transition-colors duration-150 p-3 rounded-full">
						<PiShareFat size={24}></PiShareFat>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharityCard;
