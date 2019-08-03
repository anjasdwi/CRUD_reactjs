import React from 'react'

function Pagination(props) {
    const page =  props.page;
    return (
            <button key={props.page} onClick={() => props.change(page)}>{page}</button>
    )
}

export default Pagination