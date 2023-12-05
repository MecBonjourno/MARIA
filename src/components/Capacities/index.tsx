import React from 'react'
import { FaBrain, FaCommentDots, FaEye, FaWalking, FaClinicMedical } from 'react-icons/fa'

const CapacidadesSection = () => {
	return (
		<section
			id="capacidades"
			className="bg-gradient-to-b from-teal-600 to-teal-500 text-center py-24 transition duration-500 ease-in-out"
		>
			<div className="container mx-auto px-6 animate-fade-in-up">
				<h2 className="text-4xl font-semibold text-white mb-6">Como a MARIA consegue ajudar</h2>
				<div className="mt-12">
					<p className="text-xl text-white mb-6">
						A MARIA é uma assistente virtual com uma inteligência excepcional...
					</p>
					<ul className="list-none text-left max-w-2xl mx-auto px-3 text-white text-xl mb-6">
						<li className="flex items-center mb-4">
							<FaBrain className="text-green-300 mr-3" size="2em" />
							Entendimento avançado de erros ortográficos, permitindo uma comunicação completamente natural;
						</li>
						<li className="flex items-center mb-4">
							<FaCommentDots className="text-green-300 mr-3" size="2em" />
							Capacidade de ouvir e responder a mensagens de voz, como uma conversa real;
						</li>
						<li className="flex items-center mb-4">
							<FaEye className="text-green-300 mr-3" size="2em" />
							Análise inteligente de imagens para oferecer conselhos de saúde mais precisos;
						</li>
						<li className="flex items-center mb-4">
							<FaWalking className="text-green-300 mr-3" size="2em" />
							Orientação crítica sobre os próximos passos, direcionando você para o atendimento mais adequado;
						</li>
						<li className="flex items-center">
							<FaClinicMedical className="text-green-300 mr-3" size="2em" />
							Informações atualizadas sobre os centros de saúde mais próximos, evitando filas desnecessárias.
						</li>
					</ul>
					<p className="text-xl text-white">
						Com a MARIA, acabaram-se as dúvidas sobre onde ir ou o que fazer em situações de saúde...
					</p>
					<p className="text-xl text-white">
						Com a MARIA, acabaram-se as dúvidas sobre onde ir ou o que fazer em situações de saúde. Ela é o apoio que
						você precisa, sempre disponível, de domingo a domingo, garantindo que todos estejam na linha certa e recebam
						a atenção que realmente precisam.
					</p>
				</div>
			</div>
		</section>
	)
}

export default CapacidadesSection
