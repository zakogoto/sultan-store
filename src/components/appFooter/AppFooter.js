import logo from '../../resources/img/logo.svg'
import './appFooter.sass'

function AppFooter() {
    return(
        <footer>
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__column">
                        <img src={logo} alt="" className="footer__logo" fill='black'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;