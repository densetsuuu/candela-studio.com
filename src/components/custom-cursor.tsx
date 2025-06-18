'use client'

import {motion, useMotionValue} from 'framer-motion'
import {useEffect, useState} from 'react'
import {ArrowUpRight} from 'lucide-react'

export default function CustomCursor() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            x.set(e.clientX)
            y.set(e.clientY)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('button, a, .cursor-hover-target')) {
                setIsHovering(true)
            }
        }

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('button, a, .cursor-hover-target')) {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
        }
    }, [x, y])

    return (
        <motion.div
            className="hidden md:block md:fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
            style={{x, y}}
        >
            <motion.div
                animate={{
                    width: isHovering ? 48 : 24,
                    height: isHovering ? 48 : 24,
                }}
                transition={{duration: 0.1}}
                className="rounded-full bg-white flex items-center justify-center"
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {isHovering && <ArrowUpRight className="size-8 text-black"/>}
            </motion.div>
        </motion.div>
    )
}
