
function component() {
    let element = document.createElement('div');

    element.innerHTML = 'This is another app';

    return element;
}

document.body.appendChild(component());