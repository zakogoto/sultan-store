import './appCategories.sass'

import AppCategoryItem from '../appCategoryItem/AppCategoryItem';

function AppCategories() {
    return(
        <section className='category'>
            <div className="container">
                <h2 className="title"><span>категории</span> товаров</h2>
                <p className="title__descr">10 000+ ходовых позиций по специальным ценам</p>
                <ul className="category__items">
                    {AppCategoryItem()}
                </ul>
            </div>

        </section>
    )
}

export default AppCategories;