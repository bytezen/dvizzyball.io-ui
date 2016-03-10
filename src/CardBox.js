import React, { PropTypes } from 'react';
import Card from './Card';
import { cardSelected, validCardSelection } from './Game';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const cardboxTarget = {
    drop( props, monitor) {
	//monitor has the item that was placed in dragSource during beginDrag
	console.log("Received dragged item: ...");
	console.log(props);
	cardSelected({suit:props.suit, rank: props.rank});
    }

}

function collect( connect, monitor ) {
    return {
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
    }
}

const Cardbox = React.createClass({
	render() {
	    const { connectDropTarget, isOver, onCardClick, suit, rank } = this.props;

	return connectDropTarget(
		<div className="cardbox" onClick={this.handleClick}
	    style={{
		border: isOver ? '3px solid yellow' : '0px'
	    }}
		>
		<Card suit={suit} rank={rank}  />
	        </div>
	);
    },

    propTypes: {
	onCardClick: PropTypes.func.isRequired,
	suit: PropTypes.string.isRequired,
	rank: PropTypes.number.isRequired,
	cardType: PropTypes.string.isRequired,
	connectDropTarget: PropTypes.func.isRequired,
	isOver: PropTypes.bool.isRequired
    },
    
    handleClick() {
	if( validCardSelection( this.props.cardType ) ) {
	    cardSelected({suit: this.props.suit, rank: this.props.rank});
	}
    }
});


export default DropTarget(ItemTypes.PITCH,  cardboxTarget, collect )(Cardbox);
