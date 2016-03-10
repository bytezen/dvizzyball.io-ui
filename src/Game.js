//want a function that will receive clicks on the card

//want a function that will call registered functions with the card that was selected


let _observer = undefined;

function emitChange(data) {
    if( _observer != undefined ) {
	_observer(data);
	console.log("..\t the observer is being called!");
    }
}

function cardSelected(data) {
    console.log('a card was selected: ');
    emitChange(data)
}

function observer(fn) {
    _observer = fn;
}

function validCardSelection( cardType ) {
    return true;
}

export { cardSelected, observer, validCardSelection };
