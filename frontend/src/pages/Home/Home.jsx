import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './home.scss'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'

function Home() {
	return (
		<div>
			<Header />
			<main>
				<Hero/>
				<Features/>
			</main>
			<Footer />
		</div>
	)
}

export default Home
