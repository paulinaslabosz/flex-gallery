const flexPanels = document.querySelectorAll('.panel')


function toggleImage() {
    flexPanels.forEach(panel => panel.classList.remove('active'))
    this.classList.toggle('active')
}


function toggleOpen(e) {
    console.log(e);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

flexPanels.forEach(panel => {panel.addEventListener('click', toggleImage)});
flexPanels.forEach(panel => {panel.addEventListener('transitionend', toggleOpen)});




