import QS from './elements/selector.js';

// using jQuery's $ selector as a wrapper function
function $(x) {
    const s = new QS(x);
    console.log('s', s);
    return s.getSelector();
} 
