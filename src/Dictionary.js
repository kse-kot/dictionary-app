import React, { useState } from 'react'
import './Dictionary.css'

export default function Dictionary() {
	let [word, setWord] = useState('')
	function handleWord(event) {
		event.preventDefault()
		console.log(word)
	}

	function updateWord(event) {
		setWord(event.target.value)
	}

	return (
		<div className="Dictionary">
			<form className="row g-3" onSubmit={handleWord}>
				<input
					type="search"
					className="form-control"
					onChange={updateWord}
				/>
				<input type="submit" className="form-control btn btn-info" />
			</form>
		</div>
	)
}
