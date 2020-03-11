// Codigo de buttones ************************
function showExercice(button, name) {
    var element = document.getElementById(name);
    var description = document.getElementById(button);
    element.classList.toggle("block");
    if (description.innerHTML === "Mostrar") {
        description.innerHTML = "Cerrar";
    } else {
        description.innerHTML = "Mostrar";
    }
}

document.getElementById('show1').onclick = function() { showExercice('show1', 'exercicio1') };
//***************************************************** */


var items = ['item1', 'item2', 'item3', 'item4', 'item5', 'box']
var arrItems = []

items.forEach(element => {
    arrItems.push(document.getElementById(element));
});

arrItems.forEach(keyAssign);
function keyAssign(arrItems) {
    arrItems.onclick = function() {
        click(event);
    }
 
}

function print(event) {
    switch (event.target.id) {
        case 'item1':
            tratamiento2(5)
            tratamiento(1)
            break;
        case 'item2':
            tratamiento2(5)
            tratamiento(2)
            break;
        case 'item3':
            tratamiento2(5)
            tratamiento(3)
            break;
        case 'item4':
            tratamiento2(5)
            tratamiento(4)
            break;
        case 'item5':
            tratamiento2(5)
            tratamiento(5)
            break;
        default:
            tratamiento2(5)
            break;
    }
}

function tratamiento(valor) {
    for (var i = 0; i < arrItems.length; i++) {
        if (i < valor) {
            arrItems[i].style.color='red';
        }
    }
}
function tratamiento2(valor) {
    for (var i = 0; i < arrItems.length; i++) {
        if (i < valor) {
            arrItems[i].style.color = '';
        }
    }
}

function click(event) {
    if (event.target.id !== 'box') {
        print(event);
    } else {
        arrItems.forEach(element => {
            if (element !== 'box') {
                element.style.color = '';
            }
        })
    }
}