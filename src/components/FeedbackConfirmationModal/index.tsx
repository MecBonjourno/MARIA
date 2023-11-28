import React from 'react';
import './FeedbackConfirmationModal.css';
import { useRouter } from 'next/navigation';


interface FeedbackConfirmationModalProps {
  isOpen: boolean;
}

const FeedbackConfirmationModal: React.FC<FeedbackConfirmationModalProps> = ({ isOpen }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // Redireciona para a página inicial
  };

  if (!isOpen) return null;

  return (
    <div className="feedback-modal-overlay">
      <div className="feedback-modal">
        <h2 className="text-xl font-bold my-4 text-black">Muito obrigado pelo Feedback!</h2>
        <p className="text-lg mb-3">Seu feedback foi enviado com sucesso!</p>
        <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition duration-300 ease-in-out" onClick={handleClose}>Fechar</button>
      </div>
    </div>
  );
};

export default FeedbackConfirmationModal;
