import React from 'react'
import Synonyms from './Synonyms'

export default function Definition(props) {
	return (
		<div className="Definition" key={props.index}>
			<div className="py-2">
				<div className="description">
					<strong>{props.index + 1}. </strong>
					{props.definition.definition}
				</div>
				<div className="fst-italic text-end">
					{props.definition.example}
				</div>
				<Synonyms synonyms={props.definition.synonyms} />
			</div>
		</div>
	)
}
