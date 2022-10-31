import React from 'react'
import Definition from './Definition'
import Synonyms from './Synonyms'

export default function Meaning(props) {
	return (
		<section>
			<h5>Part of speech: {props.meaning.partOfSpeech}</h5>
			{(() => {
				if (
					props.meaning.synonyms &&
					Object.keys(props.meaning.synonyms).length !== 0
				) {
					return (
						<div>
							<Synonyms synonyms={props.meaning.synonyms} />
						</div>
					)
				}
			})()}
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<Definition
						index={index}
						definition={definition}
						key={index}
					/>
				)
			})}
		</section>
	)
}
