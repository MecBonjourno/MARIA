import React from 'react'
import { useRouter } from 'next/navigation'
import './FeedbackModal.css'

export enum ModalState {
	None,
	BlankState,
	Confirmation,
	CommunicationError,
	HelpError,
}

interface FeedbackModalProps {
	modalState: ModalState
	onClose: () => void
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ modalState, onClose }) => {
	const router = useRouter()

	const handleClose = () => {
		onClose()
		if (modalState === ModalState.Confirmation) {
			router.push('/')
		}
	}

	if (modalState === ModalState.None) return null

	let title, message

	switch (modalState) {
		case ModalState.BlankState:
			title = 'Campos em branco!'
			message = 'Você precisa preencher ao menos o campo de relato para enviar seu feedback.'
			break
		case ModalState.Confirmation:
			title = 'Muito obrigado pelo Feedback!'
			message = 'Seu feedback foi enviado com sucesso!'
			break
		case ModalState.CommunicationError:
			title = 'Informação de Contato Necessária'
			message =
				'Que bom que voce quer saber mais sobre o projeto! Para a comunicação, é necessário fornecer um e-mail ou número de telefone.'
			break
		case ModalState.HelpError:
			title = 'Informação de Contato Necessária'
			message =
				'Que bom que voce quer ajudar o projeto! Para a comunicação, é necessário fornecer um e-mail ou número de telefone.'
			break
		default:
			return null // Or handle unexpected states
	}

	return (
		<div className="feedback-modal-overlay">
			<div className="feedback-modal">
				<h2 className="text-xl font-bold my-4 text-black">{title}</h2>
				<p className="text-lg mb-3">{message}</p>
				<button
					className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition duration-300 ease-in-out"
					onClick={handleClose}
				>
					Fechar
				</button>
			</div>
		</div>
	)
}

export default FeedbackModal
