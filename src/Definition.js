import React from 'react'
import Synonyms from './Synonyms'

export default function Definition(props) {
	return (
		<div className="Definition" key={props.index}>
			<div>
				<strong>{props.index + 1}. </strong>
				{props.definition.definition}
				<br />
				<em>{props.definition.example}</em>
				<Synonyms synonyms={props.definition.synonyms} />
			</div>
		</div>
	)
}
