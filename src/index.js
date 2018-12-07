import _ from 'lodash';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    let button = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    button.innerHTML = 'Click me and check the console!';
    button.onclick = printMe;

    element.appendChild(button);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}