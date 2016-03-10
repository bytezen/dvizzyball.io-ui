import React from 'react';
import {render} from 'react-dom';

// var ReactDOM = require('react-dom')

const hello = render(    
	 <div>
    <h1>Hello, world! </h1>     
    <p>Actually..maybe not, because this seems to be working! </p>
    <p> come on</p>
    </div>
    ,
	  document.getElementById('root')
	);

console.log(hello);
