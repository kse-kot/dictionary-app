import React from 'react'

export default function Meaning(props) {
	console.log(props)
	return (
		<div>
			<h5>Part of speech: {props.meaning.partOfSpeech}</h5>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div className="Definition" key={index}>
						<p>
							<strong>{index + 1}. </strong>
							{definition.definition}
							<br />
							<em>{definition.example}</em>
						</p>
					</div>
				)
			})}
		</div>
	)
}
