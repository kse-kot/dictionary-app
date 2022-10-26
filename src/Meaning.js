import React from 'react'
import Synonyms from './Synonyms'

export default function Meaning(props) {
	return (
		<div>
			<h5>Part of speech: {props.meaning.partOfSpeech}</h5>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div className="Definition" key={index}>
						<div>
							<strong>{index + 1}. </strong>
							{definition.definition}
							<br />
							<em>{definition.example}</em>
							<Synonyms synonyms={definition.synonyms} />
						</div>
					</div>
				)
			})}
		</div>
	)
}
