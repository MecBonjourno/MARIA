'use client'

import Header from '@/components/Header'
import WaveAnimation from '@/components/Wave'
import TypingAnimation from '@/components/TypingAnimation'
import WaveAnimation2 from '@/components/Wave2'
import { FaWhatsapp, FaTelegram, FaGlobe, FaLock, FaUserShield, FaShieldAlt, FaHeartbeat } from 'react-icons/fa'
import CapacidadesSection from '@/components/Capacities'
import Script from 'next/script'
import Footer from '@/components/Footer'
import Disclaimer from '@/components/Disclaimer'

const LandingPage: React.FC = () => {
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
			<Header />
			<Disclaimer />
			<main className="flex-grow">
				<section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-200 to-teal-600 overflow-hidden ">
					<WaveAnimation2 />
					<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white">
						<TypingAnimation />
					</div>
				</section>
				<section
					className="flex items-center justify-center bg-gradient-to-b from-10% from-teal-600 via-80% to-green-400 to-95% text-gray-600 body-font"
					id="maria"
				>
					<div className="w-full px-8 py-24 flex flex-col items-center">
						<WaveAnimation />
						<div className="container mx-3">
							<h2 className="text-5xl font-semibold text-white text-center">Conheça a MARIA</h2>
							<p className="mt-4 mx-8 text-xl text-white text-center">
								<span className="font-bold">MARIA é a Inteligência Artificialde de saúde do povo brasileiro</span>,
								criada para garantir que todos os cidadãos tenham acesso imediato e de qualidade a informações de saúde
								confiáveis e apoio, a qualquer hora do dia ou da noite. Utilizando tecnologia de ponta em Inteligência
								Artificial, MARIA funciona como um complemento poderoso ao Sistema Único de Saúde (SUS), oferecendo
								orientação e assistência imediatas, sem custo algum.
							</p>
							<div className="flex flex-col justify-center items-center">
								<div className="mt-8 ml-4">
									<a
										href="https://wa.me/message/QZGH5WWOJL2LE1"
										className="inline-flex items-center bg-green-500 text-white hover:bg-green-700 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500"
										type="button"
									>
										<FaWhatsapp size="2em" className="mr-2" />
										Converse com a MARIA agora
									</a>
								</div>
								<div className="mt-3 ml-4">
									<a
										href="#"
										className="inline-flex items-center bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500 disabled-link"
										type="button"
									>
										<FaTelegram size="2em" className="mr-2" />
										Converse com a MARIA agora
									</a>
								</div>
								<div className="mt-3 ml-4">
									<a
										href="#"
										className="inline-flex items-center bg-slate-500 text-white hover:bg-slate-700 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500 disabled-link"
										type="button"
									>
										<FaGlobe size="2em" className="mr-2" />
										Converse com a MARIA agora
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<CapacidadesSection />

				<section id="privacidade" className="bg-gradient-to-b from-30% from-blue-400 via-80% to-green-50 to-95% py-32 ">
					<div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
						<div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
							<h2 className="text-5xl font-semibold text-white mb-6 mr-1">Segurança e Privacidade</h2>
							<p className="px-2 text-xl text-slate-100">
								Sua confiança sempre será prioridade. Investimos em tecnologia de ponta para manter cada uma de suas
								mensagens e conversas com a MARIA protegidas e privadas.
							</p>
						</div>
						<div className="md:w-1/2 lg:w-3/5">
							<div className="grid grid-cols-2 gap-4">
								{/* Substitua essas divs por ícones ou ilustrações relevantes */}
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<FaLock size="3em" className="text-green-500 mx-auto" />
									<h3 className="text-lg font-semibold text-center mt-4 text-gray-600">Criptografia Potente</h3>
									<p className="text-sm text-gray-600 text-center mt-2">
										Todas as mensagens e conversas são criptografadas de ponta-a-ponta.
									</p>
								</div>
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<FaUserShield size="3em" className="text-green-500 mx-auto" />
									<h3 className="text-lg font-semibold text-center mt-4 text-gray-600">Anonimato e LGPD Garantidos</h3>
									<p className="text-sm text-gray-600 text-center mt-2">
										Seus dados nunca serão utilizados para treinar a MARIA, assim como não armazenamos ou providenciamos
										dados pessoais identificáveis.
									</p>
								</div>
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<FaShieldAlt size="3em" className="text-green-500 mx-auto" />
									<h3 className="text-lg font-semibold text-center mt-4 text-gray-600 ">Monitoramento Constante</h3>
									<p className="text-sm text-gray-600 text-center mt-2">
										Nossos sistemas são monitorados 24/7 para qualquer tentativa maliciosa ou tentativas de ataques a
										MARIA.
									</p>
								</div>
								<div className="bg-white p-6 rounded-lg shadow-lg">
									<FaHeartbeat size="3em" className="text-green-500 mx-auto" />
									<h3 className="text-lg font-semibold text-center mt-4 text-gray-600">Compromisso com Você</h3>
									<p className="text-sm text-gray-600 text-center mt-2">
										A MARIA tem o compromisso de prover informação correta e de qualidade, garantindo segurança e
										satisfação.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="missao" className="text-center py-24 bg-green-50">
					<div className="container mx-auto px-6">
						<div className="flex flex-col md:flex-row justify-center items-center mb-6">
							{/* Inserir aqui imagens/ilustrações representativas */}
							<img
								className="w-1/3 h-1/2 mb-4 md:mb-0 md:mr-4 rounded-lg"
								src="/maria.png"
								alt="Imagem representativa"
							/>
							<div>
								<h2 className="text-3xl font-semibold text-green-600 mb-4">A Missão da MARIA</h2>
								<div className="mx-3">
									<p className="text-lg text-gray-600 font-medium">
										Criada com o coração e a mente voltados para toda a população, a MARIA tem o objetivo de elevar o
										nível e democratizar o acesso à informação de saúde de qualidade para todo e qualquer cidadão
										brasileiro, independentemente de sua localização, recursos, etnia e/ou qualquer fator individual.
										Com a MARIA, é possível entragar em tempo recorde informação personalizada, adaptada a cada
										mensagem, usuário e situação, ajudando a esclarecer dúvidas e fornecendo orientações que podem ser
										critícas em situações de emergência e vitais no dia a dia da nossa população.
									</p>
									<p className="text-lg text-gray-600 mt-4 font-medium">
										Embora MARIA utilize tecnologia avançada, ela complementa — mas não substitui — o cuidado médico
										profissional. A IA possui suas limitações e, por isso, enfatizamos que as orientações da MARIA não
										substituem a avaliação médica profissional. Recomendamos sempre a confirmação das informações com um
										profissional de saúde qualificado, especialmente em situações críticas ou emergenciais.
									</p>
								</div>
							</div>
						</div>
						{/* CTA para interagir com a MARIA ou ler mais histórias */}
						<div className="mt-4 flex flex-col justify-center items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
							<a
								href="https://wa.me/message/QZGH5WWOJL2LE1"
								className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition duration-300 ease-in-out"
							>
								Converse com a MARIA
							</a>
							{/* Alternativamente, um link para uma página com histórias de usuários */}
							<a
								href="#"
								className="text-green-600 font-bold py-2 px-6 rounded hover:underline transition duration-300 ease-in-out ml-4 disabled-link"
							>
								Histórias de Sucesso
							</a>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default LandingPage
