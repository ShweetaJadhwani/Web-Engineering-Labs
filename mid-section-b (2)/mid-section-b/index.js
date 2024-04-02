const prevButtn= document.getElementsByClassName("prev").addEventListener("click", showprev);
 const nextButtn= document.getElementsByClassName("next").addEventListener("click", shownext);

 function nextImage() {
    currntImg++;
    if (currntImg >= images.length) {
        currntImg = 0;
    }
    sideImage.src = images[currntImg];
}


function prevImage() {
    currntImg--;
    if (currntImg < 0) {
        currntImg = images.length - 1;
    }
    sideImage.src = images[currntImg];
}


nextButtn.addEventListener("click", nextImage);
prevButtn.addEventListener("click", prevImage);
