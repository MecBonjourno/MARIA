import { useEffect, useState } from 'react'
import './Disclaimer.css'

const DisclaimerModal = () => {
	const [isVisible, setIsVisible] = useState(true)
	const [isButtonDisabled, setIsButtonDisabled] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsButtonDisabled(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	const handleClose = () => {
		setIsVisible(false)
	}

	return (
		isVisible && (
			<div className="disclaimer-modal text-black max-h-screen">
				<div className="disclaimer-content">
					<h1 className="text-3xl font-bold my-4">Disclaimer - Informações sobre o uso da MARIA</h1>
					<p className="text-2xl text-red-600 font-medium my-4">Por favor, leia atentamente antes de usar a MARIA:</p>
					<ul>
						<li className="my-2">
							A MARIA é um assistente virtual de <span className="font-bold">saúde</span> em fase Alpha de testes e
							desenvolvimento.
						</li>
						<li className="my-2">
							As informações fornecidas pela MARIA{' '}
							<span className="font-bold">
								não são aprovadas por qualquer órgão público nacional ou homologadas oficialmente.{' '}
							</span>
						</li>
						<li className="my-2">
							Ao Iniciar uma conversa enviando qualquer mensagem, você aceita os nossos{' '}
							<a href="#" className="text-blue-500">
								termos de uso do software.
							</a>
						</li>
						<li className="my-2">
							As respostas da MARIA{' '}
							<span className="font-bold">
								podem não estar corretas e não devem substituir aconselhamento médico profissional.
							</span>
						</li>
					</ul>
					<button
						className={`bg-green-500 text-white font-bold py-2 px-6 mt-6 rounded hover:bg-green-600 transition duration-300 ease-in-out ${
							isButtonDisabled ? 'bg-green-900 disabled-link' : ''
						}`}
						onClick={handleClose}
						disabled={isButtonDisabled}
					>
						Concluído
					</button>
				</div>
			</div>
		)
	)
}

export default DisclaimerModal
