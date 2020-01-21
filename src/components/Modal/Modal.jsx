import React from "react"
import PropTypes from "prop-types"

import "./modal.css"
import { Widget } from "../index.js"

export function Modal(props) {
    function handleBlackAreaClick(infosDoEvento) {
        const isModalTag = infosDoEvento.target.classList.contains('modal')
        if (isModalTag) props.onFechando && props.onFechando()
    }

    return (
        <div
            onClick={handleBlackAreaClick}
            className='modal modalActive'
        >
            <div>
                <Widget>{ props.children }</Widget>
            </div>
        </div>
    )
}

Modal.propTypes = {
    onFechando: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}