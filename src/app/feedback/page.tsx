'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import { FaPaperPlane } from 'react-icons/fa'
import Footer from '@/components/Footer'
import Script from 'next/script'

const FeedbackPage: React.FC = () => {
	const [feedback, setFeedback] = useState({
		username: '',
		phoneNumber: '',
		userEmail: '',
		content: '',
		reachRateLimit: false,
		wannaHelp: false,
		wannaCommunication: false,
	})

	const handleChange = (e: { target: { name: any; value: any; type: any; checked: any } }) => {
		const { name, value, type, checked } = e.target

		if (type === 'checkbox') {
			setFeedback({ ...feedback, [name]: checked })
		} else {
			setFeedback({ ...feedback, [name]: value })
		}
	}

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log(feedback)
		try {
			await fetch('/api/feedback', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(feedback),
			})

			window.alert('Thank you for your feedback!')
		} catch (error) {
			console.error('Erro ao enviar feedback: ', error)
		}
	}

	return (
		<div className="flex flex-col min-h-screen justify-center bg-slate-300">
			<div className="container">
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-CCNJTMP0NM" />
				<Script id="google-analytics">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CCNJTMP0NM');
          `}
				</Script>
			</div>
			{/* CRIAR SMALL HEADER */}
			<main className="flex-grow">
				<section className="text-gray-600 body-font">
					<div className="container mx-auto w-full px-5">
						<div className="bg-white rounded-lg p-8 my-8 shadow-md">
							<h1 className="text-gray-900 text-4xl font-bold title-font mb-5 flex flex-col items-center justify-center text-center">
								MARIA Public Alpha
							</h1>
							<h2 className="text-black text-2xl font-medium title-font mb-5 flex flex-col items-center justify-center text-center">
								Formulário de feedback
							</h2>
							<h3 className="text-center text-lg text-black">
								Obrigado por fazer parte do projeto MARIA, você esta ajudando a fornecer informações de qualidade e de
								acesso imediato para todo o Brasil! Espero que ela tenha ajudado!
							</h3>
							<br></br>
							<p className="text-black">
								Este formulário é essencial para aprimorar o funcionamento da MARIA. Sua contribuição é duplamente
								valiosa para nós.
							</p>
							<p className="text-black">
								Se desejar, mantenha-se anônimo. Aqui, você pode expressar opiniões, fazer críticas, agradecer, ou
								reportar falhas (bugs). O preenchimento é rápido, menos de 1 minuto!
							</p>
							<br></br>
							<form>
								<div className="relative mb-4">
									<label htmlFor="username" className="leading-7 text-sm text-gray-600">
										Seu nome (Opcional)
									</label>
									<input
										onChange={handleChange}
										type="text"
										id="username"
										name="username"
										className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>

								<div className="relative mb-4">
									<label htmlFor="phoneNumber" className="leading-7 text-sm text-gray-600">
										Telefone Utilizado (Opcional)
									</label>
									<input
										onChange={handleChange}
										type="text"
										id="phoneNumber"
										name="phoneNumber"
										className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>

								<div className="relative mb-4">
									<label htmlFor="userEmail" className="leading-7 text-sm text-gray-600">
										E-mail (Opcional, não manderemos nada sem sua autorização!)
									</label>
									<input
										onChange={handleChange}
										type="email"
										id="userEmail"
										name="userEmail"
										className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>

								<div className="relative mb-4">
									<label htmlFor="content" className="leading-7 text-sm text-gray-600">
										Relato
									</label>
									<textarea
										id="content"
										name="content"
										/* @ts-ignore */
										onChange={handleChange}
										className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
									></textarea>
								</div>

								<div className="relative mb-4 flex items-center">
									<input
										onChange={handleChange}
										type="checkbox"
										id="reachRateLimit"
										name="reachRateLimit"
										className="mr-2"
									/>
									<label htmlFor="reachRateLimit" className="leading-7 text-sm text-gray-600">
										Chegou ao limite de uso?
									</label>
								</div>
								<div className="relative mb-4 flex items-center">
									<input onChange={handleChange} type="checkbox" id="wannaHelp" name="wannaHelp" className="mr-2" />
									<label htmlFor="wannaHelp" className="leading-7 text-sm text-gray-600">
										Deseja ajudar o projeto?
									</label>
								</div>
								<div className="relative mb-4 flex items-center">
									<input
										onChange={handleChange}
										type="checkbox"
										id="wannaCommunication"
										name="wannaCommunication"
										className="mr-2"
									/>
									<label htmlFor="wannaCommunication" className="leading-7 text-sm text-gray-600">
										Quer receber futuras informações sobre o projeto?
									</label>
								</div>
								<div className="flex items-center justify-center">
									<button
										className="flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
										onClick={handleSubmit}
									>
										<FaPaperPlane size="1em" className="mr-2 my-auto" />
										Enviar
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default FeedbackPage
