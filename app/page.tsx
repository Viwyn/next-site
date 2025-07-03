import Header from "./components/Header";
import Footer from "./components/Footer";
import DraggableFloatingDiv from "./components/DraggableDiv";
import { useState } from "react";

export default function MainPage() {
    return (
        <div className="min-h-screen min-w-full flex flex-col bg-gray-100 dark:bg-black">
            <Header></Header>
            <main className="flex flex-col justify-center items-center flex-grow">
                <div className="border-4 rounded-xl border-black dark:border-white h-[550px] w-[850px] justify-center items-center flex flex-col bg-gray-400 dark:bg-gray-800 shadow-xl/40 dark:shadow-gray-600">
                    <p className="text-4xl text-black dark:text-white">
                        Welcome to <span className="font-bold italic text-pink-300 text-shadow-lg text-bold">FaylieLabs</span>.
                    </p>
                    <p className="mt-10 text-xl font-extralight dark:text-white text-black">More to come in the future~</p>
                </div>

                {/* buttons for floating divs */}
                <div className="mt-4 flex gap-4"> {/* Added a div to contain the buttons */}

                </div>

                {/* div 1 */}
                <DraggableFloatingDiv initialX={50} initialY={50} isVisible={true}>
                    <div className="w-full h-full flex flex-col justify-center items-center bg-purple-500 p-5 rounded-lg">
                        <h1 className="text-2xl font-bold text-black dark:text-white">Drag me around!</h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">I'm a draggable floating div.</p>
                    </div>
                </DraggableFloatingDiv>
                <DraggableFloatingDiv initialX={50} initialY={50} isVisible={true}>
                    <div className="w-full h-full flex flex-col justify-center items-center bg-purple-500 p-5 rounded-lg">
                        <h1 className="text-2xl font-bold text-black dark:text-white">Drag me around!</h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit architecto obcaecati impedit, saepe quia, optio suscipit harum animi, voluptate ullam alias esse laborum at facere doloribus laudantium quas magnam omnis?</p>
                    </div>
                </DraggableFloatingDiv>
            </main>
            <Footer></Footer>
        </div>
    );
}
