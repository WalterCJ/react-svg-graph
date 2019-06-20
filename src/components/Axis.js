import React from 'react'

const Axis = (props) => {
    let coords = prepareCords(props);
    return (
        <line {...coords} stroke="green" strokeWidth={2} />
    )
}

function prepareCords(props) {
    let coords = {
        x1: props.x,
        y1: props.y
    }

    if (props.horizontal) {
        coords.x2 = coords.x1 + props.length;
        coords.y2 = coords.y1;
    } else {
        coords.x2 = coords.x1;
        coords.y2 = coords.y1 + props.length;
    }

    return coords;
}

export default Axis
