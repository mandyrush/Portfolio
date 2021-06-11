let overlay = document.querySelector('.overlay');

function setOverlay (element) {
    element.classList.add('onTop')
    
    overlay.classList.add('showOverlay')
}

function removeOverlay(element) {
    element.classList.remove('onTop')
    
    overlay.classList.remove('showOverlay')
}