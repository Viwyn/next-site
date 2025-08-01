import Header from "./components/Header"
import Footer from "./components/Footer"
import DraggableFloatingDiv from "./components/DraggableDiv"
import { FaLink, FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Particles from "./components/Particles"

export default function MainPage() {
	return (
		<div className="min-h-screen min-w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-black relative">
			<div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <Particles
                    particleColors={["#F8C8DC", "#FAA0A0"]}
                    particleCount={500}
                    particleSpread={20}
                    speed={0.5}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={true}
                />
            </div>
            <div className="relative z-1 flex flex-col items-center justify-center flex-grow w-full">
                <Header />
                <main className="flex flex-col justify-center items-center flex-grow w-full">
                    <div className="border-2 rounded-xl border-black dark:border-white h-[450px] w-[750px] flex flex-col justify-center items-center bg-gray-400 dark:bg-gray-800 shadow-xl/40 dark:shadow-gray-600">
                        <p className="text-4xl text-black dark:text-white">
                            Welcome to{" "}
                            <span className="font-bold italic text-pink-300 text-shadow-lg text-bold">
                                FaylieLabs
                            </span>
                            .
                        </p>
                        <p className="mt-10 text-xl font-extralight dark:text-white text-black">
                            Page is a work in progress~
                        </p>

                        {/* buttons for floating divs */}
                        <div className="mt-4 flex gap-4">
                            <DraggableFloatingDiv
                                initialX={50}
                                initialY={50}
                                isVisible={false}
                                icon={<FaUser size={24} />}
                                title="About Me"
                            >
                                <div className="w-full h-full flex flex-col justify-center items-center bg-purple-500 p-5 rounded-lg">
                                    <h1 className="text-2xl font-bold text-black dark:text-white">
                                        Little Something About Me
                                    </h1>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                                        Hi there, my name is Riaru and I am a
                                        software developer. Please feel free to
                                        explore, my site is still a work in progress
                                        so don&apos;t expect much!
                                    </p>
                                </div>
                            </DraggableFloatingDiv>
                            <DraggableFloatingDiv
                                initialX={50}
                                initialY={50}
                                isVisible={false}
                                icon={<FaLink size={24} />}
                                title="Links"
                            >
                                <div className="w-full h-full flex flex-col justify-center items-center bg-purple-500 p-5 rounded-lg">
                                    <h1 className="text-2xl font-bold text-black dark:text-white">
                                        My Links!
                                    </h1>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                                        Links will be here eventually :3
                                    </p>
                                </div>
                            </DraggableFloatingDiv>
                            <DraggableFloatingDiv
                                initialX={50}
                                initialY={50}
                                isVisible={false}
                                icon={<MdEmail size={24} />}
                                title="Contact"
                            >
                                <div className="w-full h-full flex flex-col justify-center items-center bg-purple-500 p-5 rounded-lg">
                                    <h1 className="text-2xl font-bold text-black dark:text-white">
                                        Contact Me
                                    </h1>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                                        Contact information will be here when i fix
                                        emailing systems hehe~
                                    </p>
                                </div>
                            </DraggableFloatingDiv>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
		</div>
	);
}
