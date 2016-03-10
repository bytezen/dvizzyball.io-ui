import React from 'react';
import Cardhand from './Cardhand';
import Cardbox from './CardBox';

import { cardSelected } from './Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';

/*
const Field = React.createClass({
    render() {
	return (
	    <div>
	   <Cardhand hand={[{suit:'hearts', rank:10},
			    {suit:'spades',rank:1},
			    {suit:'clubs',rank:5}]}
	   onCardClick={cardSelected} />
	   <div id="target">
	   <span>{this.props.selection.rank}</span> <span>{this.props.selection.suit}</span>
	   </div>
	   </div>
	);
    },
    propTypes: {
	selection: React.PropTypes.object.isRequired
    }
});
*/

const Field = React.createClass({
    render() {
	return (
	    <div>
	   <Cardhand hand={[{suit:'hearts', rank:10},
			    {suit:'spades',rank:1},
			    {suit:'clubs',rank:5}]}
	   onCardClick={cardSelected} />
	   <div id="target">
		<Cardbox rank={0} cardType="blah" suit="undefined" onCardClick={console.log} target/>
	    </div>
	   </div>
	);
    },
    propTypes: {
	selection: React.PropTypes.object.isRequired
    }
});



export default DragDropContext(HTML5Backend)(Field);
