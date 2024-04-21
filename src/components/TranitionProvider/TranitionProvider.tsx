"use client"
import { AnimatePresence } from "framer-motion"
import {motion} from "framer-motion"
import { usePathname } from "next/navigation"

const TranitionProvider = ({children}: {children: React.ReactNode}) => {
	const pathname = usePathname()
	return (
		<AnimatePresence mode="wait">
			<div key={pathname} className="w-screen h-screen">
				<motion.div 
					className="h-screen w-screen fixed bg-black rounded-b-[100px] z-50"
					animate={{height: "0vh"}}
					exit={{height: "140vh"}}
					transition={{duration: 0.5, ease: "easeInOut"}}
				></motion.div>
				<motion.div 
					className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-50"
					initial={{height: "140vh"}}
					animate={{height: "0vh", transition: {delay: 0.5, ease: "easeInOut", duration: 0.5}}}
				></motion.div>
				<div className="w-screen h-screen flex flex-col cont__container">
				{children}
				</div>
			</div>
		</AnimatePresence>
	)
}

export default TranitionProvider
