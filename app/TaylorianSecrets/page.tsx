import React from "react"
import TSHeader from "../components/TSHeader"

const page = () => {
    return (
        <div className="w-screen h-screen bg-gray-100 dark:bg-gray-900">
            <TSHeader></TSHeader>
            <div className="flex justify-center w-full h-full p-4">
                <div className="max-w-[500px] w-full ">
                    <div id="post" className="flex flex-col bg-gray-200 p-4 my-4 rounded-xl shadow-lg border-gray-300 border-2 w-full">
                        <h1 className="text-3xl font-bold text-black">Post Title</h1>
                        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis deleniti alias voluptatibus, ab explicabo consequuntur eius non nisi reiciendis fuga nam quae ullam quaerat ea neque cupiditate sapiente vel?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
