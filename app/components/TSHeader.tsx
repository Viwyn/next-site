import Link from "next/link"
import React from "react"
import { GiMicrophone } from "react-icons/gi"
import ThemeToggle from "./ThemeToggle"

const TSHeader = () => {
	return (
        <div className="flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-900 dark:text-100 dark:bg-gray-700">
            <div className="flex flex-horizontal items-center gap-2">
                <GiMicrophone className="text-2xl text-gray-900 dark:text-gray-100" />
                <Link href="/TaylorianSecrets" className="text-2xl text-gray-900 dark:text-gray-100 font-bold">Taylorian Secrets</Link>
            </div>
            <div className="flex items-center gap-5 text-2xl font-bold">
                <Link href="/TaylorianSecrets" className="text-xl font-light text-gray-900 dark:text-gray-100 hover:scale-105 duration-150 transition">Home</Link>
                <Link href="/TaylorianSecrets/About" className="text-xl font-light text-gray-900 dark:text-gray-100 hover:scale-105 duration-150 transition">About</Link>
                <Link href="/TaylorianSecrets" className="px-3 py-2 rounded-xl text-xl font-bold text-gray-900 dark:text-gray-100 bg-red-500 hover:bg-red-700 hover:scale-105 duration-150 transition">Send a confession!</Link>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default TSHeader
