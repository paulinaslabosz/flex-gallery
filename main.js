const flexPanels = document.querySelectorAll('.panel')


function toggleImage () {
    this.classList.toggle('active')
}



flexPanels.forEach(panel => { 
    panel.addEventListener('click', toggleImage)
    
});


flexPanel.addEventListener('click', toggleImage);

