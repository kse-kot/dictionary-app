import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-js-loader'
import Results from './Results'
import Photos from './Photos'

export default function Dictionary() {
	const [word, setWord] = useState('love')
	const [results, updateResults] = useState({})
	const [photos, updatePhotos] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [error, setError] = useState(false)
	const dictionaryUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
	const pexelUrl = 'https://api.pexels.com/v1/search?page=1&per_page=7&query='
	const pexelApiKey =
		'563492ad6f9170000100000162ec3eee251849e4864269932b115417'

	useEffect(() => {
		searchWord() // eslint-disable-next-line
	}, [])

	function handleWord(event) {
		event.preventDefault()
		setLoaded(false)
		searchWord()
	}

	function searchWord() {
		axios
			.get(`${dictionaryUrl}${word}`)
			.then((response) => {
				setError(false)
				// setLoaded(true)
				updateResults(response.data[0])
			})
			.catch((err) => {
				// setLoaded(true)
				setError(true)
			})
		searchImages()
	}

	function searchImages() {
		axios
			.get(`${pexelUrl}${word}`, {
				credentials: 'same-origin',
				headers: { Authorization: `${pexelApiKey}` },
			})
			.then((response) => {
				updatePhotos(response.data.photos)
				setLoaded(true)
				console.log(response)
			})
			.catch((err) => {
				setLoaded(true)
			})
	}

	function updateWord(event) {
		setWord(event.target.value)
	}

	return (
		<div className="Dictionary">
			<section>
				<form className="row g-3" onSubmit={handleWord}>
					<input
						type="search"
						className="form-control"
						placeholder={word}
						onChange={updateWord}
						autoFocus
					/>
					<input
						type="submit"
						className="form-control btn btn-info"
					/>
				</form>
			</section>
			{loaded ? (
				error ? (
					<div className="mt-5">
						Sorry pal, we couldn't find definitions for the word you
						were looking for.
					</div>
				) : (
					<div className="grid-wrapper">
						<div className="results-bar">
							<Results results={results} />
						</div>
						<div className="photos-bar d-flex flex-column">
							<Photos photos={photos} />
						</div>
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
