import './appEvent.sass'

import AppItem from '../appItem/AppItem'



function AppEvent() {
    return (
        <section className='promo-items'>
            <div className="container">
                <h2 className="promo-items__title"><span>Акционные</span> товары</h2>
                <ul className="promo-items__wrap">
                    {AppItem()}
                </ul>
            </div>
        </section>
    )
}

export default AppEvent;