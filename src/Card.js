import React from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

console.log(ItemTypes.PITCH);

const cardSource = {
    beginDrag(props) {
	return {foo: 'bar'};
    }
}

function collect(connect, monitor) {
    return {
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
    };
}

const Card = React.createClass({
    cardClickHandler(event) {
	const { rank, suit } = this.props;
	this.props.clickHandler(event, { rank, suit } );
    },
    
    render() {
	const { connectDragSource, isDragging, suit } = this.props;
	return connectDragSource (
		<div style={{
		    opacity: isDragging ? 0.5 : 1,
		    border: isDragging ? '1px solid red' : '1px solid black'
		}} className="card">{suit}
	    </div>
	);
    },
    
    propTypes: {
	rank: React.PropTypes.number.isRequired,
	suit: React.PropTypes.string.isRequired,
	connectDragSource: React.PropTypes.func.isRequired,
	isDragging: React.PropTypes.bool.isRequired,
	target: React.PropTypes.bool
    }
});

export default DragSource( ItemTypes.PITCH, cardSource, collect )(Card);

