import React from 'react'
import { useGlobalContext } from '../context'


const searchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('');

    return (
        <section className="section search">
            <form classname="search-form">
            <div classname="form-control">
                <label htmlFor="name">search...</label>
                <input type="text" id="name" ref={searchValue}/>
            </div>
            </form>
            
        </section>
    )
}

export default searchForm