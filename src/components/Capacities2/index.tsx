import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaBrain, FaCommentDots, FaEye, FaWalking, FaClinicMedical } from 'react-icons/fa'

const CapacidadesSection2 = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			content: (
				<div>
					<FaBrain className="mr-3" size="2em" />
					Entendimento avançado de erros ortográficos, permitindo uma comunicação completamente natural;
				</div>
			),
			image: './erro-texto.jpg',
		},
		{
			content: (
				<div className="flex items-center">
					<FaCommentDots className="mr-3" size="2em" />
					Capacidade de ouvir e responder a mensagens de voz, como uma conversa real;
				</div>
			),
			image: 'path/to/your/image2.jpg',
		},
	]

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}

	return (
		// <section
		// 	id="capacidades"
		// 	className="bg-gradient-to-b from-teal-500 to-teal-600 text-center py-12 transition duration-500 ease-in-out"
		// >
		// 	<div className="container mx-auto px-6">
		// 		<h2 className="text-4xl font-semibold text-white mb-8">Como a MARIA consegue ajudar: </h2>
		// 		<div className="flex justify-center items-center mb-6">
		// 			<div className="relative w-full overflow-hidden">
		// 				<div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
		// 					<button
		// 						onClick={prevSlide}
		// 						className="bg-white bg-opacity-50 hover:bg-opacity-70 text-teal-600 rounded-full p-2"
		// 					>
		// 						<FaArrowLeft size="2em" />
		// 					</button>
		// 				</div>
		// 				<div
		// 					className="whitespace-nowrap transition-all duration-300"
		// 					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
		// 				>
		// 					{slides.map((slide, index) => (
		// 						<div key={index} className="inline-block w-full">
		// 							<img
		// 								src={slide.image}
		// 								alt={`Slide ${index + 1}`}
		// 								className="mx-auto max-w-md w-full object-cover rounded-lg"
		// 							/>
		// 							<div className="bg-white bg-opacity-50 rounded-b-lg p-4 overflow-clip">{slide.content}</div>
		// 						</div>
		// 					))}
		// 				</div>
		// 				<div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
		// 					<button
		// 						onClick={nextSlide}
		// 						className="bg-white bg-opacity-50 hover:bg-opacity-70 text-teal-600 rounded-full p-2"
		// 					>
		// 						<FaArrowRight size="2em" />
		// 					</button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
		<section
			id="capacidades"
			className="bg-gradient-to-b from-teal-500 to-teal-600 text-center py-12 transition duration-500 ease-in-out"
		>
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-semibold text-white mb-8">Como a MARIA consegue ajudar:</h2>
				<div className="flex justify-center items-center mb-6">
					<div className="relative w-full overflow-hidden">
						{/* Left Arrow */}
						<div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
							<button
								onClick={prevSlide}
								className="bg-white bg-opacity-50 hover:bg-opacity-70 text-teal-600 rounded-full p-2"
							>
								<FaArrowLeft size="2em" />
							</button>
						</div>
						{/* Slides */}
						<div
							className="whitespace-nowrap transition-all duration-300"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							{slides.map((slide, index) => (
								<div key={index} className="w-full flex flex-col md:flex-row">
									<div className="md:w-1/2">
										<img
											src={slide.image}
											alt={`Slide ${index + 1}`}
											className="mx-auto max-w-md w-full object-cover rounded-lg"
										/>
									</div>
									<div className="md:w-1/2 p-4 flex items-center">
										<div className="text-left overflow-hidden whitespace-normal md:text-xl">{slide.content}</div>
									</div>
								</div>
							))}
						</div>
						{/* Right Arrow */}
						<div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
							<button
								onClick={nextSlide}
								className="bg-white bg-opacity-50 hover:bg-opacity-70 text-teal-600 rounded-full p-2"
							>
								<FaArrowRight size="2em" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CapacidadesSection2
