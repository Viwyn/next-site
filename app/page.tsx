'use client';

import { useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DraggableFloatingDiv from "./components/DraggableDiv";
import { FaGithub, FaLink, FaLinkedin, FaUser, FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaEnvelope} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiSteam } from "react-icons/si";
import Particles from "./components/Particles";

export default function MainPage() {
    const [copiedDiscord, setCopiedDiscord] = useState(false);
    const [showTimezone, setShowTimezone] = useState(false);

    const copyDiscordUsername = async () => {
        try {
            await navigator.clipboard.writeText("viwyn");
            setCopiedDiscord(true);
            setTimeout(() => setCopiedDiscord(false), 2000);
        } catch (err) {
            console.error('Failed to copy username:', err);
        }
    };

    const getUserTimezone = () => {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const userTime = new Date().toLocaleTimeString('en-US', {
            timeZone: userTimezone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        const myTime = new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Singapore', // GMT+8
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        return { userTime, myTime, userTimezone };
    };

    // Memoize the Particles component to prevent re-rendering on state changes
    const particlesComponent = useMemo(() => (
        <Particles
            particleColors={["#F5A9B8", "#FFFFFF", "#5BCEFA", "#F5A9B8"]}
            particleCount={1000}
            particleSpread={20}
            speed={0.5}
            particleBaseSize={300}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
        />
    ), []);

    return (
        <div className="min-h-screen min-w-full flex flex-col items-center justify-center bg-pink-50 dark:bg-slate-900 relative">
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
                {particlesComponent}
            </div>
            <div className="relative z-1 flex flex-col items-center justify-center flex-grow w-full">
                <Header />
                <main className="flex flex-col justify-center items-center flex-grow w-full">
                    <div className="border-2 rounded-xl border-pink-200 dark:border-sky-300 h-[450px] w-[750px] flex flex-col justify-center items-center bg-pink-100 dark:bg-slate-800 shadow-xl/40 dark:shadow-sky-400/20">
                        <p className="text-5xl font-comfortaa font-semibold text-slate-700 dark:text-sky-200">
                            Welcome, {" "}
                            <span className="font-bold italic text-pink-500 dark:text-pink-400 text-shadow-lg">
                                Adventurer
                            </span>
                        </p>
                        <p className="mt-3 text-2xl font-comfortaa font-light dark:text-sky-200 text-slate-600">
                            to my humble abode of code and creativity!
                        </p>

                        {/* buttons for floating divs */}
                        <div className="pt-5 flex gap-4">
                            <DraggableFloatingDiv
                                initialX={50}
                                initialY={50}
                                isVisible={false}
                                icon={<FaUser size={24} />}
                                title="About Me"
                            >
                                <div className="w-full h-full bg-pink-200 dark:bg-pink-900 p-6 overflow-y-auto">
                                    <div className="flex flex-col space-y-6">
                                        {/* Header */}
                                        <div className="text-center">
                                            <h1 className="text-3xl font-comfortaa font-bold text-slate-700 dark:text-pink-100 mb-2">
                                                ✨ Hey there! ✨
                                            </h1>
                                            <p className="text-lg font-comfortaa font-light text-pink-600 dark:text-pink-300 italic">
                                                Welcome to my little corner of the internet! 🌸
                                            </p>
                                        </div>

                                        {/* first section with image on left */}
                                        <div className="flex items-center space-x-4">
                                            <div className="w-24 h-24 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">🤖</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-comfortaa font-semibold text-slate-700 dark:text-pink-100 mb-1">
                                                    I&apos;m Riaru!
                                                </h3>
                                                <p className="text-base font-comfortaa font-normal text-slate-600 dark:text-pink-200">
                                                    A <span className="font-bold text-pink-500 dark:text-pink-300">student software developer</span> currently pursuing my Bachelor&apos;s in Computer Science with a specialization in <span className="font-medium text-blue-500 dark:text-blue-300">Artificial Intelligence</span>!
                                                </p>
                                            </div>
                                        </div>

                                        {/* second section with image on right */}
                                        <div className="flex items-center space-x-4 flex-row-reverse">
                                            <div className="w-20 h-20 ml-5 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl">💻</span>
                                            </div>
                                            <div className="text-right">
                                                <h3 className="text-lg font-comfortaa font-semibold text-slate-700 dark:text-pink-100 mb-1">
                                                    My coding journey started...
                                                </h3>
                                                <p className="text-base font-comfortaa font-light text-slate-600 dark:text-pink-200">
                                                    ...from pure <span className="font-bold text-purple-500 dark:text-purple-300">curiosity</span> about what computers could do! Now I&apos;m totally hooked on the endless possibilities ✨
                                                </p>
                                            </div>
                                        </div>

                                        {/* third section with image on left */}
                                        <div className="flex items-center space-x-4">
                                            <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">🎵</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-comfortaa font-semibold text-slate-700 dark:text-pink-100 mb-1">
                                                    Fun fact!
                                                </h3>
                                                <p className="text-base font-comfortaa font-normal text-slate-600 dark:text-pink-200">
                                                    This entire page was built with <span className="font-bold text-pink-500 dark:text-pink-300">pure ADHD focus</span> and <span className="italic text-blue-500 dark:text-blue-300">lots of lofi music</span> in the background! 🎧
                                                </p>
                                            </div>
                                        </div>

                                        {/* fourth section with image on right */}
                                        <div className="flex items-center space-x-4 flex-row-reverse">
                                            <div className="w-20 h-20 ml-5 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl">🌟</span>
                                            </div>
                                            <div className="text-right">
                                                <h3 className="text-lg font-comfortaa font-semibold text-slate-700 dark:text-pink-100 mb-1">
                                                    My dream?
                                                </h3>
                                                <p className="text-base font-comfortaa font-light text-slate-600 dark:text-pink-200">
                                                    To contribute to the amazing world of <span className="font-bold text-green-600 dark:text-green-300">AI</span> and make a positive impact through technology! 🚀
                                                </p>
                                            </div>
                                        </div>

                                        {/* Call to action */}
                                        <div className="text-center mt-4 p-4 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-600 dark:to-sky-700  rounded-lg">
                                            <p className="text-sm font-comfortaa font-medium text-slate-600 dark:text-pink-200">
                                                Feel free to explore around! This site is still a <span className="italic">work in progress</span>, but I hope you enjoy the journey! 💖
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </DraggableFloatingDiv>
                            <DraggableFloatingDiv
                                initialX={70}
                                initialY={70}
                                isVisible={false}
                                icon={<FaLink size={24} />}
                                title="Links"
                            >
                                <div className="w-full h-full bg-white dark:bg-slate-700 p-6 overflow-y-auto">
                                    <div className="flex flex-col space-y-5">
                                        {/* header */}
                                        <div className="text-center">
                                            <h1 className="text-3xl font-comfortaa font-bold text-slate-800 dark:text-sky-100 mb-2">
                                                🔗 Let&apos;s Connect! 🔗
                                            </h1>
                                            <p className="text-base font-comfortaa font-light text-pink-600 dark:text-pink-300 italic">
                                                Find me across the digital universe! ✨
                                            </p>
                                        </div>

                                        {/* professional stuff */}
                                        <div className="bg-pink-50 dark:bg-slate-700 p-4 rounded-lg border border-pink-100 dark:border-slate-600">
                                            <h3 className="text-lg font-comfortaa font-semibold text-slate-800 dark:text-sky-100 mb-3 flex items-center">
                                                💼 Professional
                                            </h3>
                                            <div className="space-y-3">
                                                <a href="https://github.com/Viwyn" target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-gray-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <FaGithub className="text-3xl text-gray-700 dark:text-gray-200 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">GitHub</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">Check out my code! 👨‍💻</p>
                                                    </div>
                                                </a>
                                                <a href="https://www.linkedin.com/in/wei-chuen-ooi/" target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-400 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">LinkedIn</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">Let us connect 🤝</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        {/* social stuff */}
                                        <div className="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg border border-blue-100 dark:border-slate-600">
                                            <h3 className="text-lg font-comfortaa font-semibold text-slate-800 dark:text-sky-100 mb-3 flex items-center">
                                                🌐 Social & Fun
                                            </h3>
                                            <div className="space-y-3">
                                                <a href="https://x.com/RiaruPlays" target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <FaTwitter className="text-3xl text-blue-400 dark:text-blue-300 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">Twitter</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">yes, i deadnamed twitter :3 🐦</p>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/weichuen_ooi/" target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-purple-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <FaInstagram className="text-3xl text-pink-500 dark:text-pink-400 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">Instagram</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">food pics and stuff 📸</p>
                                                    </div>
                                                </a>
                                                <div className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-purple-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <FaDiscord className="text-3xl text-indigo-500 dark:text-indigo-400 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">Discord</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">add meh: viwyn 🎮</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* gamin stuff */}
                                        <div className="bg-purple-50 dark:bg-slate-700 p-4 rounded-lg border border-purple-100 dark:border-slate-600">
                                            <h3 className="text-lg font-comfortaa font-semibold text-slate-800 dark:text-sky-100 mb-3 flex items-center">
                                                🎵 Entertainment
                                            </h3>
                                            <div className="space-y-3">
                                                {/* <a href="#" target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-green-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <SiSpotify className="text-3xl text-green-500 dark:text-green-400 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">Spotify</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">My coding playlists 🎧</p>
                                                    </div>
                                                </a> */}
                                                <a href="https://www.youtube.com/@riaru7710" target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-red-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <FaYoutube className="text-3xl text-red-500 dark:text-red-400 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">YouTube</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">random gaming vids 📺</p>
                                                    </div>
                                                </a>
                                                <a href="https://steamcommunity.com/id/RiaruPlays/" target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center p-3 bg-white dark:bg-slate-600 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-slate-500 border border-gray-100 dark:border-slate-500">
                                                    <SiSteam className="text-3xl text-slate-600 dark:text-slate-300 mr-4" />
                                                    <div>
                                                        <p className="font-comfortaa font-medium text-slate-800 dark:text-sky-100">Steam</p>
                                                        <p className="font-comfortaa font-light text-sm text-slate-600 dark:text-slate-300">my steam page 🎮</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Fun footer */}
                                        <div className="text-center mt-4 p-3 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-lg border border-pink-200 dark:border-slate-500">
                                            <p className="text-sm font-comfortaa font-medium text-slate-700 dark:text-sky-100">
                                                Thanks for checking out my links! 💖
                                            </p>
                                            <p className="text-xs font-comfortaa font-light text-slate-600 dark:text-slate-300 mt-1">
                                                More links coming soon... 🚀
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </DraggableFloatingDiv>
                            <DraggableFloatingDiv
                                initialX={90}
                                initialY={90}
                                isVisible={false}
                                icon={<MdEmail size={24} />}
                                title="Contact"
                            >
                                <div className="w-full h-full bg-blue-100 dark:bg-sky-900 p-6 overflow-y-auto">
                                    <div className="flex flex-col space-y-5">
                                        {/* Header */}
                                        <div className="text-center">
                                            <h1 className="text-3xl font-comfortaa font-bold text-slate-800 dark:text-sky-100 mb-2">
                                                📬 Get In Touch! 📬
                                            </h1>
                                            <p className="text-base font-comfortaa font-light text-blue-600 dark:text-blue-300 italic">
                                                I&apos;d love to hear from you! ✨
                                            </p>
                                        </div>

                                        {/* Quick Contact Cards */}
                                        <div className="grid grid-cols-1 gap-4">
                                            {/* Email */}
                                            <div className="bg-white dark:bg-blue-800 p-4 rounded-lg border border-blue-200 dark:border-blue-600 hover:shadow-md transition-all duration-200">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-300" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-comfortaa font-semibold text-slate-800 dark:text-sky-100">
                                                            Email Me
                                                        </h3>
                                                        <p className="text-sm font-comfortaa font-light text-slate-600 dark:text-slate-300 mb-2">
                                                            For professional inquiries or just to say hi! 💌
                                                        </p>
                                                        <button className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white font-comfortaa font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200">
                                                            Coming Soon! 🚧
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* discord */}
                                            <div className="bg-white dark:bg-purple-800 p-4 rounded-lg border border-purple-200 dark:border-purple-600 hover:shadow-md transition-all duration-200">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <FaDiscord className="text-2xl text-purple-600 dark:text-purple-300" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-comfortaa font-semibold text-slate-800 dark:text-sky-100">
                                                            Discord
                                                        </h3>
                                                        <p className="text-sm font-comfortaa font-light text-slate-600 dark:text-slate-300 mb-2">
                                                            Chat with me about coding, gaming, or anything! 🎮
                                                        </p>
                                                        <button
                                                            onClick={copyDiscordUsername}
                                                            className={`px-4 py-2 text-white font-comfortaa font-medium rounded-lg transition-all duration-200 ${copiedDiscord
                                                                    ? 'bg-green-500 dark:bg-green-600'
                                                                    : 'bg-purple-500 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-500'
                                                                }`}
                                                        >
                                                            {copiedDiscord ? 'Copied! ✅' : 'Copy Username �'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Response Time Info */}
                                        <div className="bg-gradient-to-r from-blue-50 to-pink-50 dark:from-blue-900 dark:to-pink-900 p-4 rounded-lg border border-blue-100 dark:border-blue-700">
                                            <div className="text-center">
                                                <h3 className="text-lg font-comfortaa font-semibold text-slate-800 dark:text-sky-100 mb-2">
                                                    ⏰ Response Times
                                                </h3>
                                                <div className="grid grid-cols-1 gap-2 text-sm font-comfortaa">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-600 dark:text-slate-300">Email:</span>
                                                        <span className="font-medium text-blue-600 dark:text-blue-400">1-2 days (when it works!) 📧</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-600 dark:text-slate-300">Discord:</span>
                                                        <span className="font-medium text-purple-600 dark:text-purple-400">Almost instant! ⚡</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Fun Status */}
                                        <div className="text-center p-4 bg-white dark:bg-slate-600 rounded-lg border border-green-200 dark:border-green-700">
                                            <div className="flex items-center justify-center space-x-2 mb-2">
                                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-lg font-comfortaa font-semibold text-slate-800 dark:text-sky-100">
                                                    Probably Available!
                                                </span>
                                            </div>
                                            <p className="text-sm font-comfortaa font-light text-slate-600 dark:text-slate-300">
                                                Probably coding, gaming, or listening to lofi 🎧
                                            </p>

                                            {/* Timezone Section */}
                                            <div className="mt-3 p-3 bg-blue-50 dark:bg-slate-700 rounded-lg">
                                                <button
                                                    onClick={() => setShowTimezone(!showTimezone)}
                                                    className="text-sm font-comfortaa font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                                                >
                                                    🌍 Click to see our current times
                                                </button>

                                                {showTimezone && (
                                                    <div className="mt-3 text-xs font-comfortaa space-y-1">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-slate-600 dark:text-slate-300">Your current time:</span>
                                                            <span className="font-medium text-slate-700 dark:text-slate-200">
                                                                {getUserTimezone().userTime}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-slate-600 dark:text-slate-300">My time (GMT+8):</span>
                                                            <span className="font-medium text-blue-600 dark:text-blue-400">
                                                                {getUserTimezone().myTime}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
                                                            Live timezone comparison! 🕐
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            <p className="text-xs font-comfortaa font-light text-slate-500 dark:text-slate-400 mt-2">
                                                Status updates coming soon! ✨
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div className="text-center mt-4 p-3 bg-gradient-to-r from-blue-100 to-pink-100 dark:from-blue-900 dark:to-pink-900 rounded-lg border border-blue-200 dark:border-blue-700">
                                            <p className="text-sm font-comfortaa font-medium text-slate-700 dark:text-sky-100">
                                                Don&apos;t be shy, reach out! 💖
                                            </p>
                                            <p className="text-xs font-comfortaa font-light text-slate-600 dark:text-slate-300 mt-1">
                                                I love meeting new people and hearing about cool projects! 🌟
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </DraggableFloatingDiv>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};
