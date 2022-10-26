import React from 'react'
import Meaning from './Meaning'

export default function Results(props) {
	if (Object.keys(props.results).length !== 0) {
		return (
			<div className="Results">
				<h2>{props.results.word}</h2>
				<h3>{props.results.phonetic}</h3>
				<h4>Meanings:</h4>
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
