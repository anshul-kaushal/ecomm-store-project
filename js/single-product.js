// image viewer
const imageViewer = document.getElementById('image-viewer');

imageViewer.addEventListener(`click`, switchImage);

function switchImage(event) {
    let imageSelected = event.target;
    if(imageSelected.matches(`.additional-images`)){
        let imageSelectedSource = imageSelected.getAttribute(`src`);
        document.getElementById('main-image').setAttribute(`src`, imageSelectedSource);
}
}

// toggle menu
const menu = document.getElementById('menu')
menu.addEventListener('click', function(event){
    document.getElementById('menu-dropdown').classList.toggle('show')
})
