import React from 'react'

const GraphBody = (props) => {

    return (
        <path d={prepareData(props)}
            stroke="orange"
            strokeWidth={1}
            fill="none"
        />
    )
}

function prepareData(props) {
    let d = [`M ${props.x} ${props.y}`];

    let collector = props.data.map(chunk => {
        let xNext = props.x + chunk[0] * props.multiplier;
        let yNext = props.y - chunk[1] * props.multiplier;
        return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
}

GraphBody.defaultProps = {
    multiplier: 20
};

export default GraphBody
