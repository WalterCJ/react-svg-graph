import React from 'react'
import Axis from './Axis'
import GraphBody from './GraphBody'

function Graph(props) {
    return (
        <svg width={props.width} height={props.height}>
            <Axis
                x={20}
                y={props.height - 100}
                length={props.width}
                horizontal={true}
            />
            <Axis
                x={20}
                y={0}
                length={props.height - 100}
                horizontal={false}
            />
            <GraphBody
                x={20}
                y={props.height - 100}
                data={props.data}
            />
        </svg>
    )
}
Graph.defaultProps = {
    width: 400,
    height: 600
};
export default Graph

