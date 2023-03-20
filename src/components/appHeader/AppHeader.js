import './appHeader.sass'

import AppSearch from '../appSearch/AppSearch'

import logo from '../../resources/img/logo.svg'
import catalogLogo from "../../resources/img/catalog-logo.svg"
import operator from "../../resources/img/operator-img.png"
import priceListLogo from '../../resources/img/price-list-logo.svg'
import basketLogo from '../../resources/img/basket-logo.svg'


function AppHeader() {
    return (
        <header className='header'>
            <div className="container">
               <div className="header__wrap">
                    <img src={logo} alt="султан" className="header__logo" />
                    <a className="btn" href='catalog'>
                        каталог
                        <img src={catalogLogo} alt="плитка" />
                    </a>
                    {AppSearch()}
                    <div className="header__contacts">
                        <div className="header__contacts-wrap">
                            <a href="tel:+77774900091" className='header__number'>+7 (777) 490-00-91</a>
                            <div className="header__work-time">время работы: 9:00-20:00</div>
                            <a href="#" className='header__order-call'>Заказать звонок</a>
                        </div>
                        <img src={operator} alt="оператор" />
                    </div>
                    <a href='#' id="price-list" className='btn'>
                        Прайс-лист
                        <img src={priceListLogo} alt='значок "скачать' />
                    </a>
                    <div className="basket">
                        <img src={basketLogo} alt="иконка тележки" className="basket-logo" />
                        <div className="basket__wrap">
                            <p className="basket__title">Корзина</p>
                            <p className="basket__price">12 478 ₸ </p>
                        </div>
                    </div>
               </div>
            </div>
        </header>
    )
}

export default AppHeader;