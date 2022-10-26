import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './Results'
import './Dictionary.css'

export default function Dictionary() {
	const [word, setWord] = useState('love')
	const [results, updateResults] = useState({})
	let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

	useEffect(() => {
		searchWord()
	}, [])

	function handleWord(event) {
		event.preventDefault()
		console.log(word)
		searchWord()
	}

	function searchWord() {
		axios.get(`${url}${word}`).then((response) => {
			console.log(response.data[0])
			updateResults(response.data[0])
		})
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
					placeholder={word}
					onChange={updateWord}
				/>
				<input type="submit" className="form-control btn btn-info" />
			</form>
			<div>
				<Results results={results} />
			</div>
		</div>
	)
}
