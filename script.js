let back = document.getElementById('back_click'),
    next = document.getElementById('next_click'),
    slider = document.querySelectorAll('.slider'),
    position = document.querySelectorAll('.position'),
    i = 0;

function VSlider(x) {
    for (slid of slider) {
        slid.classList.remove('v');
    }
    slider[x].classList.add('v');
}

function VPosition(x) {
    for (pos of position) {
        pos.classList.remove('v');
    }
    position[x].classList.add('v');
}

function BSlide() {
    if (i == 0){
        i = slider.length -1;
        VSlider(i);
        VPosition(i);
    } else {
        i--;
        VSlider(i);
        VPosition(i);
    }
}

function NSlide() {
    if (i == slider.length -1){
        i = 0;
        VSlider(i);
        VPosition(i);
        
    } else {
        i++;
        VSlider(i);
        VPosition(i);
        
    }
}

back.addEventListener('click', BSlide);
next.addEventListener('click', NSlide);

let time = setInterval(NSlide, 5000);

back.addEventListener('mouseup', function() { 
    clearInterval(time); 
} , false);
next.addEventListener('mouseup', function() { 
    clearInterval(time); 
} , false);

// Переход по точкам не сделал