function RefreshWysiwyg(){
    let textTitre = document.getElementById('titreWysiwyg').value;
    document.querySelector('#titreWysiwygResultat').textContent = textTitre;

    let colorTitle = document.getElementById("colorTitleWysiwyg").value;
    document.getElementById('titreWysiwygResultat').style.color = colorTitle;

    let sizeTitle = document.getElementById("tailleTitleWysiwyg").value;
    document.getElementById('titreWysiwygResultat').style.fontSize = `${sizeTitle}px`; 

    let textContent = document.getElementById('contentWysiwyg').value;
    document.querySelector('#contentWysiwygResultat').textContent = textContent;

    let imgSrc= document.getElementById('imgWysiwyg').value;
    document.getElementById('imgWysiwygResultat').src = imgSrc;

    let imageMaxWith = document.getElementById("imgMaxWidthWysiwyg").value;
    document.getElementById('imgWysiwygResultat').style.width = ''+imageMaxWith+'px';
}

function OnMouseOver(){
    var tousLabels = document.querySelectorAll("input");
    tousLabels.forEach(monLabel => {
        monLabel.style.padding = '5px';
    });
}

function OnMouseLeave(){
    var tousLabels = document.querySelectorAll("input");
    tousLabels.forEach(monLabel => {
        monLabel.style.padding = 'inherit';
    });
}

/*var btn = document.getElementById("btnGenererWysiwyg");
btn.addEventListener('click', RefreshWysiwyg);*/


var mesInputsWithEvents = document.querySelectorAll(".onChangeRefreshWysiwyg");

mesInputsWithEvents.forEach(monInput => {
    //Mon itération
    monInput.addEventListener("keyup", RefreshWysiwyg);
    monInput.addEventListener("change", RefreshWysiwyg);

    monInput.addEventListener("mouseover", OnMouseOver)
    monInput.addEventListener("mouseleave", OnMouseLeave)
});

/* debut d 'annim de balle '*/
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let raf;
let running = false;
let  ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 1,
    radius: 25,
    color: 'blue',
    draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    }
};

function clear() {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
    clear();
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
    }

    raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e){
    if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
    }
});

canvas.addEventListener("click",function(e){
    if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
    }
});

canvas.addEventListener("mouseout",function(e){
    window.cancelAnimationFrame(raf);
    running = false;
});

ball.draw();

/* ANIMATION BACKEND*/