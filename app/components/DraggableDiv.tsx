'use client'

import React, { useState, useRef, useEffect, ReactNode } from "react"

interface DraggableFloatingDivProps {
    children?: ReactNode;
    initialX?: number;
    initialY?: number;
    isVisible?: boolean;
    icon?: ReactNode;
    title?: string;
}

const DraggableFloatingDiv: React.FC<DraggableFloatingDivProps> = ({ children, initialX = 50, initialY = 50, isVisible, icon, title}) => {
    const [position, setPosition] = useState({ x: initialX, y: initialY })
    const [isDragging, setIsDragging] = useState(false)
    const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 })
    const [isHidden, setIsHidden] = useState(isVisible)

    const divRef = useRef<HTMLDivElement>(null)

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!isHidden) return //do nothing if not visible

        e.preventDefault()
        setIsDragging(true)

        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect()
            setInitialMousePosition({
                x: e.clientX - rect.left, //displacement of mouse x value from left of div
                y: e.clientY - rect.top, //same but with y value from top of div
            })
        }
    }

    const toggleInvisibility = () => {
        setIsHidden(isHidden => !isHidden)
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return

            setPosition({
                x: e.clientX - initialMousePosition.x,
                y: e.clientY - initialMousePosition.y,
            })
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove)
            window.addEventListener("mouseup", handleMouseUp)
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isDragging, initialMousePosition])

    return (
        <div>
            <button onClick={toggleInvisibility} className="bg-gray-700 text-black dark:text-white p-4 rounded-full shadow-xl transition-transform duration-150 hover:scale-110 cursor-pointer">
                {icon}
                </button>
            <div ref={divRef} className={`${isDragging ? 'cursor-grabbing' : 'cursor-default'} fixed z-99 bg-gray-700 text-black dark:text-white rounded-lg border-2 border-black dark:border:white shadow-xl select-none transition-all duration-150 flex flex-col ${!isHidden ? 'opacity-0 scale-0 pointer-events-none z-0' : 'opacity-100 scale-100 pointer-events-auto z-10'} max-w-1/2`} style={{ left: position.x, top: position.y }} onMouseDown={handleMouseDown}>
                <div className="flex justify-between items-center">
                    <p className="ml-3">{title}</p>
                    <button onClick={toggleInvisibility} className="py-1 px-3 cursor-pointer text-white text-xl hover:scale-110 transition-transform duration-150">
                        X
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DraggableFloatingDiv

