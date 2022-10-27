import React from 'react'
import Meaning from './Meaning'
import Phonetics from './Phonetics'

export default function Results(props) {
	console.log('results', props)
	if (Object.keys(props.results).length !== 0) {
		return (
			<div className="Results">
				<h2>
					{props.results.word} - {props.results.phonetic}
				</h2>
				<Phonetics phonetics={props.results.phonetics} />
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
