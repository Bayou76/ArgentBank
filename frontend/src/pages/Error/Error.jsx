import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './error.scss'

function Error() {
	return (
		<div>
			<Header />
			<div className="error">
				<div className="error_info">
					<h1 className="error_info_title">404</h1>
					<p className="error_info_content">
						Oup! La page que vous demandez n'existe pas.
					</p>
				</div>
				<Link className="error_info_return" to="/">
					Retourner sur la page d'accueil
				</Link>
			</div>

			<Footer />
		</div>
	)
}

export default Error
