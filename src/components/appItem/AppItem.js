import './appItem.sass'

import packLiquid from "../../resources/img/pack-liquid.svg"
import cartLogo from "../../resources/img/cart-logo.svg"
import imgItem from "../../resources/img/item-img.png"

function AppItem() {
    return(
        <li className="item item-promo">
            <img src={imgItem} alt="" className="item-img" />
            <div className="item__pack-type">
                <img src={packLiquid} alt="жидкость" />
                <div className='item__volume'>450 мл</div>
            </div>
            <div className="item__name"><span>AOS</span> средство для мытья посуды Crystal</div>
            <div className="item__info">
                <div className="item__barecode"><span>Штрихкод:</span>4604049097548</div>
                <div className="item__producer"><span>Производитель:</span>Нэфис</div>
                <div className="item__brand"><span>Бренд:</span>AOS</div>
            </div>
            <div className="item__bottom">
                <div className="item__price">48,76 ₸</div>
                <button className="item__cart btn btn__item">В КОРЗИНУ<img src={cartLogo} alt="тележка" /></button>
            </div>
        </li>
    )
}

export default AppItem;