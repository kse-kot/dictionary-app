import React from 'react'
import Meaning from './Meaning'
import Phonetics from './Phonetics'

export default function Results(props) {
	console.log('results', props)
	if (Object.keys(props.results).length !== 0) {
		return (
			<div className="Results">
				<section className="row">
					<div className="col">
						<div className="word">{props.results.word}</div>
						<span className="transcription">
							{props.results.phonetic}
						</span>
					</div>
					<Phonetics phonetics={props.results.phonetics} />
				</section>

				<div className="text-start">
					{props.results.meanings.map(function (meaning, index) {
						return (
							<div key={index}>
								<Meaning meaning={meaning} />
							</div>
						)
					})}
				</div>
			</div>
		)
	} else {
		return null
	}
}
