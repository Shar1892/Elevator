let inputFloors = findInputFloors();
let inputFloorsBlock = findInputFloorsBlock();
let houseField = findHouseField();
let houseBlock = findHouseBlock();
let controlBlock = findControlBlock()
let numberOfFloors = 0;
bindListenerToInputFloors();


function findControlBlock() {
    return document.querySelector('.controlBlock');
}

function findHouseBlock() {
    return document.querySelector('.houseBlock');
}

function findInputFloorsBlock() {
    return document.querySelector('.inputFloorsBlock');
}

function findHouseField() {
    return document.querySelector('.houseField');
}

function findInputFloors() {
    return document.getElementById('inputFloors');
}

function bindListenerToInputFloors() {
    inputFloors.addEventListener('keydown', getFloors);
}

function getFloors(e) {
    if (e.code == 'Enter') {
        click();
        let inputValue = getNumberOfFloors(inputFloors);
        let check = checkNumberOfFloors(inputValue);

        if(check) {
            inputFloorsBlock.style.display = "none";
            houseField.style.display = "flex";
            controlBlock.style.display = "block";
            numberOfFloors = inputValue;

            for (let i = 1; i <= inputValue; i++) {
                buildFloors(houseBlock);
            }
        }
    }
}

function getNumberOfFloors(inputFloors) {
    return inputFloors.value;
}

function buildFloors(houseBlock) {
    let div = document.createElement('div');
    div.className = "floor";

    houseBlock.append(div);
}

function checkNumberOfFloors(inputValue) {
    if (isFinite(inputValue) && inputValue) {
        if (inputValue < 3) {
            alert("Мало этажей для лифта. Укажите число этажей цифрой от 3х до 9ти");
            return false;
        } else if (inputValue > 9) {
            alert("Слишком высокий дом. Укажите число этажей цифрой от 3х до 9ти");
            return false;
        } else {
            return true;
        }
    } else {
        alert("Укажите число этажей цифрой от 3х до 9ти");
        return false;
    }
}


let click = () => console.log('click');