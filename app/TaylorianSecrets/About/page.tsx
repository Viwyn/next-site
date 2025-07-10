import React from "react"
import TSHeader from "../../components/TSHeader"

const AboutPage = () => {
    return (
        <div className="">
            <TSHeader></TSHeader>
            <div className="h-full w-full flex justify-center items-center bg-gray-100 dark:bg-black">
                <div className="text-xl px-10 flex flex-col items-start text-left justify-center bg-gray-100 dark:bg-black text-black dark:text-white leading-relaxed">
                    <h1 className="text-5xl font-bold mb-3">About Taylorian Secrets</h1>
                    <p>
                        Taylorian Secrets is a anonymous blog that focuses on providing students of Taylor&apos;s University, a safe and open place for sharing secrets, stories, and spicy tea 🍵. This started as an instagram account @taylorians_secrets that went unmanaged so as a bored CS student, I figured why not make something for us, the students.
                    </p>
                    <br />
                    <h2 className="text-3xl font-bold my-3">Community Guidelines</h2>
                    <p>To ensure a respectful environment and anonymity of everyone, all posts are moderated by an admin like myself (admin <span className="text-pink-400">R</span>) and will only be posted after a review. Please follow these guidelines when making a post or comment:</p>
                    <ul className="list-disc ml-6 my-3">
                        <li>Be respectful to others, no hate speech or bullying.</li>
                        <li>Do not share personal information of yourself or others.</li>
                        <li>Keep it anonymous, do not reveal identities of others.</li>
                        <li>Posts should be related to Taylor&apos;s University and its community.</li>
                        <li>No spamming or self-promotion.</li>
                    </ul>
                    <br />
                    <h2 className="text-3xl font-bold my-3">Contact</h2>
                    <p>If you have any questions, concerns, or suggestions, feel free to reach out to me at <a href="mailto:contact@tayloriansecrets.com" className="text-pink-400 underline hover:text-pink-500 transition-colors duration-150">contact@tayloriansecrets.com</a>. I&apos;ll try my best to respond as soon as possible. </p>
                    <br />
                    <h3 className="text-s font-extralight text-gray-600 dark:text-gray-400 mt-20">ps. this page has no association to the instagram account @taylorians_secrets.</h3>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
