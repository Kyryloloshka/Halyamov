"use client"
import { AnimatePresence, easeInOut } from "framer-motion"
import {motion} from "framer-motion"
import { usePathname } from "next/navigation"

const TranitionProvider = ({children}: {children: React.ReactNode}) => {
	const pathname = usePathname()
	return (
		<AnimatePresence mode="wait">
			<div key={pathname} className="w-screen h-screen relative">
				
				<motion.div 
					className="h-[200vh] rotate-12 w-screen fixed bg-secondary-500 top-[-40vh] -left-[40vw] z-[48]"
					animate={{width: "0vw"}}
					exit={{width: "200vw"}}
					transition={{duration: 0.8, ease: "easeInOut"}}
				>
				</motion.div>
				<motion.div 
					className="h-[200vh] rotate-12 w-screen fixed bg-primary-600 top-[-40vh] -left-[40vw] z-[49]"
					animate={{width: "0vw"}}
					exit={{width: "200vw"}}
					transition={{duration: 0.8, ease: "easeInOut", delay: 0.1}}
				>
				</motion.div>
				<motion.div 
					className="h-[200vh] rotate-12 w-screen fixed bg-dark-1 top-[-40vh] -left-[40vw] z-[50]"
					animate={{width: "0vw"}}
					exit={{width: "200vw"}}
					transition={{duration: 0.8, ease: "easeInOut", delay: 0.2}}
				>
				</motion.div>
				<motion.div 
					className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl pointer-events-none z-[100] w-fit h-fit"
					initial={{opacity: 1}}
					animate={{opacity: 0}}
					exit={{opacity: 0}}
					transition={{duration: 0.8, ease: easeInOut}}
				>
					{pathname.substring(1)}
				</motion.div>
				<motion.div 
					className="h-[200vh] top-[-40vh] rotate-12 right-[-40vw] w-screen fixed bg-black  z-[50]"
					initial={{width: "200vw"}}
					animate={{width: "0vw", transition: {delay: 0.8, ease: "easeInOut", duration: 0.8}}}
				></motion.div>
				<motion.div 
					className="h-[200vh] top-[-40vh] rotate-12 right-[-40vw] w-screen fixed bg-primary-600  z-[49]"
					initial={{width: "200vw"}}
					animate={{width: "0vw", transition: {delay: 0.9, ease: "easeInOut", duration: 0.8}}}
				></motion.div>
				<motion.div 
					className="h-[200vh] top-[-40vh] rotate-12 right-[-40vw] w-screen fixed bg-secondary-500 z-[48]"
					initial={{width: "200vw"}}
					animate={{width: "0vw", transition: {delay: 1, ease: "easeInOut", duration: 0.8}}}
				></motion.div>
				<div className="w-screen h-screen flex flex-col cont__container">
				{children}
				</div>
			</div>
		</AnimatePresence>
	)
}

export default TranitionProvider
