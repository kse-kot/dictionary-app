import Dictionary from './Dictionary'
import logo from './logo.png'
import './App.css'

function App() {
	return (
		<div className="App container-sm">
			<header className="App-header">
				<img src={logo} className="logo img-fluid" alt="logo" />
				<h1>Any word you are concerned with? 🤔</h1>
				<h2>Let's start with ...</h2>
			</header>
			<Dictionary />
		</div>
	)
}

export default App
