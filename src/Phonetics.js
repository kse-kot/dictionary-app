import React from 'react'

export default function Phonetics(props) {
	let audioFound = false

	return (
		<div className="Phonetics col d-flex justify-content-center">
			{props.phonetics.map(function (phonetic, index) {
				if (phonetic.audio && !audioFound) {
					audioFound = true
					return (
						<div className="d-flex align-items-center" key={index}>
							<audio id="file" controls>
								<source
									src={phonetic.audio}
									type="audio/mpeg"
								></source>
							</audio>
						</div>
					)
				} else {
					return null
				}
			})}
		</div>
	)
}
