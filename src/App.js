import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
// import TestComponent from "./components/TestComponent";
function App() {
	const clearLocale = () => {
		localStorage.clear();
	};
	return (
		<Layout>
			<Hero />
		</Layout>
	);
}

export default App;
