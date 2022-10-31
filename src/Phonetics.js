import React from 'react'

export default function Phonetics(props) {
	console.log(props)
	function playAudio() {
		document.getElementById('file').play()
	}

	let audioFound = false

	return (
		<div className="Phonetics col d-flex justify-content-center">
			{props.phonetics.map(function (phonetic, index) {
				if (phonetic.audio && !audioFound) {
					audioFound = true
					return (
						<div className="d-flex align-items-center" key={index}>
							<audio id="file">
								<source
									src={phonetic.audio}
									type="audio/mpeg"
								></source>
							</audio>

							<button
								onClick={playAudio}
								type="button"
								className="btn3"
							>
								<i className="fa-regular fa-circle-play"></i>
							</button>
						</div>
					)
				} else {
					return null
				}
			})}
		</div>
	)
}
