import React from 'react';
import Cardbox from './CardBox';
import Card from './Card';

const Cardhand = React.createClass({
    renderCardbox(cardData,ind) {
	return	    <Cardbox key={ind} suit={cardData.suit} cardType="pitch"
	rank={cardData.rank} onCardClick={this.props.onCardClick.bind(null,cardData)} />

    },
    render() {
	const cards = this.props.hand.map((o,i)=> {
	    return this.renderCardbox(o,i);
	});
	return (
	<div id="pitcherHand" className="cardhand">
		{cards}
	</div>
	);
    },

    propTypes: {
	hand: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	onCardClick: React.PropTypes.func.isRequired
    }
});
export default Cardhand;
