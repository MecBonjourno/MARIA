import React from 'react'
import { motion, Variants } from 'framer-motion'

// Definindo a tipagem para os variants
const waveVariants: Variants = {
	initial: {
		scale: 0.8,
		opacity: 0,
	},
	animate: {
		scale: 1.2,
		opacity: 1,
		transition: {
			duration: 3.5,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
}

const WaveAnimation2: React.FC = () => {
	return (
		<motion.img
			src="./orb2.gif" // Use o caminho como uma string literal
			alt="Ondas calmantes"
			variants={waveVariants}
			initial="initial"
			animate="animate"
			className="wave-container"
		/>
	)
}

export default WaveAnimation2
