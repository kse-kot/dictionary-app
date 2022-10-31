import React from 'react'

export default function Synonyms(props) {
	if (Object.keys(props.synonyms).length !== 0) {
		return (
			<div className="Synonyms">
				<div className="fs-6 fw-bolder text-secondary mb-2">
					Synonyms
				</div>
				<ul className="d-flex flex-row flex-wrap">
					{props.synonyms.map(function (synonym, index) {
						return (
							<li className="px-3 py-2 mb-2 mx-1" key={index}>
								{synonym}
							</li>
						)
					})}
				</ul>
			</div>
		)
	} else {
		return null
	}
}
