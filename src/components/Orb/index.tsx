import React, { useEffect, useRef, useState } from 'react'

const AudioReactiveCircle: React.FC = () => {
	const [circleSize, setCircleSize] = useState(50) // Tamanho mínimo inicial do círculo
	const animFrame = useRef<number>()
	const analyser = useRef<AnalyserNode | null>(null)
	const audioContext = useRef<AudioContext | null>(null)

	const setupAudio = async () => {
		const audioCtx = new AudioContext()
		const analyserNode = audioCtx.createAnalyser()
		analyserNode.fftSize = 256
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
		const source = audioCtx.createMediaStreamSource(stream)

		source.connect(analyserNode)
		analyser.current = analyserNode
		audioContext.current = audioCtx

		captureAudio()
	}

	const captureAudio = () => {
		if (analyser.current) {
			animFrame.current = requestAnimationFrame(captureAudio)

			const dataArray = new Uint8Array(analyser.current.frequencyBinCount)
			analyser.current.getByteFrequencyData(dataArray)

			// Calcule o tamanho do círculo com base no volume do som
			const maxVolume = 128 // Valor máximo de volume para normalização
			const volume = dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length
			const normalizedVolume = (volume / maxVolume) * 100 // Normaliza o volume para um valor entre 0 e 100
			const minSize = 50 // Tamanho mínimo do círculo
			const size = minSize + normalizedVolume

			setCircleSize(size) // Atualiza o estado do tamanho do círculo
		}
	}

	useEffect(() => {
		setupAudio()

		return () => {
			if (animFrame.current) cancelAnimationFrame(animFrame.current)
			if (audioContext.current) audioContext.current.close()
		}
	}, [])

	return (
		<div
			style={{
				width: `${circleSize}px`,
				height: `${circleSize}px`,
				borderRadius: '50%',
				backgroundColor: 'pink',
				transition: 'width 0.1s, height 0.1s',
			}}
		/>
	)
}

export default AudioReactiveCircle
