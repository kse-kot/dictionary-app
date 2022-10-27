import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-js-loader'
import Results from './Results'

export default function Dictionary() {
	const [word, setWord] = useState('love')
	const [results, updateResults] = useState({})
	const [loaded, setLoaded] = useState(false)
	const [error, setError] = useState(false)
	let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

	useEffect(() => {
		searchWord() // eslint-disable-next-line
	}, [])

	function handleWord(event) {
		event.preventDefault()
		console.log(word)
		setLoaded(false)
		searchWord()
	}

	function searchWord() {
		axios
			.get(`${url}${word}`)
			.then((response) => {
				setError(false)
				setLoaded(true)
				updateResults(response.data[0])
			})
			.catch((err) => {
				// Handle error
				console.log(err)
				setLoaded(true)
				setError(true)
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
					autoFocus
				/>
				<input type="submit" className="form-control btn btn-info" />
			</form>
			{loaded ? (
				error ? (
					<div className="mt-5">
						Sorry pal, we couldn't find definitions for the word you
						were looking for.
					</div>
				) : (
					<div>
						<Results results={results} />
					</div>
				)
			) : (
				<div className="mt-5">
					<Loader
						type="spinner-cub"
						bgColor={'#FFFFFF'}
						title={'spinner-cub'}
						color={'#FFFFFF'}
						size={100}
					/>
				</div>
			)}
		</div>
	)
}
