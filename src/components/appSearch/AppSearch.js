import './appSearch.sass'

import searchLogo from "../../resources/img/search-logo.svg"

function AppSearch() {
    return(
        <form className="search">
            <input type="search" name="search" id="search" placeholder='Поиск...' className='search__field'/>
            <button className='search__btn'><img src={searchLogo} alt="лупа"/></button>
        </form>

    )
}

export default AppSearch;