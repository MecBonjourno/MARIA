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
			<div className="disclaimer-modal text-black">
				<div className="disclaimer-content">
					<h1 className="text-2xl font-bold my-4">Disclaimer - Informações sobre o uso da MARIA</h1>
					<p>Por favor, leia atentamente antes de usar a MARIA:</p>
					<ul>
						<li>A MARIA é um assistente virtual em fase Alpha de testes e desenvolvimento.</li>
						<li>
							As informações fornecidas pela MARIA não são aprovadas por órgãos públicos ou homologadas oficialmente.
						</li>
						<li>
							As respostas da MARIA podem estar incorretas e não devem substituir aconselhamento médico profissional.
						</li>
						<li>Ao enviar qualquer mensagem, você aceita os termos de uso do software.</li>
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
