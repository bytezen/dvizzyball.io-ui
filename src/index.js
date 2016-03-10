import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { observer } from './Game';
import Field from './Field';

require('../public/css/main.css');
require('../public/css/card.css');


function cardClicked(data) {
    console.log('card was clicked');
    console.log(data);
}

observer( function(data) {
    const card = null;
    let suit = undefined, rank = undefined;

    if( data != undefined ) {
	suit = data.suit;
	rank = data.rank;
    }
    
    render( <Field selection={{suit,rank}}/>,
	   document.getElementById('root'));
    
});

render( <Field selection={{suit: undefined, rank: undefined}}/>,
   document.getElementById('root'));

//import * as _t from './helloworld';
// document.write("this would be something new that should trigger a resave")
