var controls = document.getElementById('controls'),
    bgImg = document.getElementById('bgImg_input'),
    title = document.getElementById('title_input'),
    disptitle = document.getElementById('disp_title'),
    desc = document.getElementById('desc_input'),
    dispdesc = document.getElementById('disp_desc'),
    color = document.getElementById('color_input'),
    background = document.getElementById('background'),
    num_up_down = 0,
    num_lef_right = 0,
    num_small_big = 300;

function expandMenu() {
    if (menu_count == 0) {
        controls.style.bottom='0px';
        menucount = 1;
    }
    else {
        controls.style.bottom='-120px';
        menucount = 0;
    }
}

function changeColor() {
    disptitle.style.color = color.value;
    dispdesc.style.color = color.value;
}

function changeDescription() {
    dispdesc.innerHTML = desc.value;
}

function changeTitle() {
    disptitle.innerHTML = title.value;
}

function changeBG() {
    if (bgImg.value == 'horse') {
        document.getElementById('background').style.backgroundImage = "url('imgs/bg1.jpg')";
    }
    else if (bgImg.value == 'night') {
        document.getElementById('background').style.backgroundImage = "url('imgs/bg2.jpg')";
    }
    else if (bgImg.value == 'mountain') {
        document.getElementById('background').style.backgroundImage = "url('imgs/bg3.jpg')";
    }
    else if (bgImg.value.indexOf('epic') >= 0) {
        document.getElementById('background').style.backgroundImage = "url('imgs/bg4.jpg')";
    }
    else {
        document.getElementById('background').style.backgroundImage = 'url('+ bgImg.value+ ')';
    }
}

function moveBG(code) {
    if(code == 38){
        num_up_down = num_up_down - 10
        background.style.top = num_up_down + 'px';
    }
    if(code == 40){
        num_up_down = num_up_down + 10
        background.style.top = num_up_down + 'px';
    }
    if(code == 37){
        num_lef_right = num_lef_right - 10
        background.style.left = num_lef_right + 'px';
    }
    if(code == 39){
        num_lef_right = num_lef_right + 10
        background.style.left = num_lef_right + 'px';
    }
    
    if(code == 107){
        num_small_big = num_small_big + 10
        background.style.height = num_small_big + 'px';
    }
    
    if(code == 109){
        num_small_big = num_small_big - 10
        background.style.height = num_small_big + 'px';
    }
}

function createBG() {
    new_BG = document.createElement('div');
    new_BG.className = 'nBG';
    new_BG.style.backgroundImage = document.getElementById('background').style.backgroundImage;
    
    display.appendChild(new_BG);
    
    new_title = document.createElement('div');
    new_title.innerHTML = disptitle.innerHTML;
    new_title.style.color = disptitle.style.color;
    new_title.className = 'ntitle';
    new_BG.appendChild(new_title);
    
    new_desc = document.createElement('div');
    new_desc.innerHTML = dispdesc.innerHTML;
    new_desc.style.color = dispdesc.style.color;
    new_desc.className = 'ndesc';
    new_BG.appendChild(new_desc);
}

menu_count = 0
document.getElementById('menu').addEventListener("click", function(){
    expandMenu()
});

bgImg.addEventListener('keyup', function(ev){
    if(ev.keyCode == 13){
        changeBG()
    }
});

title.onkeyup= function() {
    changeTitle()
};

desc.onkeyup= function() {
    changeDescription()
}

color.addEventListener('change', function() {
    changeColor()
});

document.addEventListener('keydown', function(ev) {
    moveBG(ev.keyCode)
});

document.getElementById('new_div').addEventListener('click', function() {
    createBG()
});