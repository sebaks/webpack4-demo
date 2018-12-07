import join from 'lodash/join';
import printMe from './print.js';
import './styles/app.css';

function component() {
    let element = document.createElement('div');
    let button = document.createElement('button');

    element.innerHTML = join(['Hello', 'webpack'], ' ');

    button.innerHTML = 'Click me and check the console!';
    button.onclick = printMe;

    element.appendChild(button);

    return element;
}

document.getElementsByClassName('app')[0].appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}