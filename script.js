hp = 100;
function regen() {
    if (hp < 100){
        hp += 10;
        document.getElementById('number').innerHTML = hp;
    } else {
        alert('HP IS FULL');
    }
    

    
    if (100 > hp > 0) {
        document.getElementById('man').src = 'images/man.png';
    }

    
}

function shoot() {
    if (hp > 0) {
        hp -= 10;
        document.getElementById('number').innerHTML = hp;
    } 


    else {
        alert('ALREADY DEAD');
    }

    if (hp === 0) {
        document.getElementById('man').src = 'images/skull.png';
    }
}
