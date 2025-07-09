import Link from "next/link"
import React from "react"
import { GiMicrophone } from "react-icons/gi"
import ThemeToggle from "./ThemeToggle"

const TSHeader = () => {
	return (
        <div className="flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-900 dark:text-100 dark:bg-gray-700">
            <div className="flex flex-horizontal items-center gap-2">
                <GiMicrophone className="text-2xl text-gray-900 dark:text-gray-100" />
                <h1 className="text-2xl text-gray-900 dark:text-gray-100 font-bold">Taylorian Secrets</h1>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default TSHeader
