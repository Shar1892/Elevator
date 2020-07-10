let inputFloors = findInputFloors();
let inputFloorsBlock = findInputFloorsBlock();
let houseField = findHouseField();
let houseBlock = findHouseBlock();
let controlBlock = findControlBlock()
let inputStartFloorNumber = findinputStartFloorNumber();
let inputFinishFloorNumber = findinputFinishFloorNumber();

let numberOfFloors = 0;

bindListenerToInputFloors(inputFloors);
bindListenerToStartFloorNumber(inputStartFloorNumber);
bindListenerToFinishFloorNumber(inputFinishFloorNumber);


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

function findinputStartFloorNumber() {
    return document.getElementById('inputStartFloorNumber');
}

function findinputFinishFloorNumber() {
    return document.getElementById('inputFinishFloorNumber');
}



function bindListenerToInputFloors(inputFloors) {
    inputFloors.addEventListener('keydown', getFloors);
}

function bindListenerToStartFloorNumber(inputStartFloorNumber) {
    inputStartFloorNumber.addEventListener('keydown', getNumberFloor);
}

function bindListenerToFinishFloorNumber(inputFinishFloorNumber) {
    inputFinishFloorNumber.addEventListener('keydown', getNumberFloor);
}


function getNumberFloor(e) {
    if (e.code == 'Enter' || e.code == "NumpadEnter") {
        click();
    }
}

function getFloors(e) {
    if (e.code == 'Enter' || e.code == "NumpadEnter") {
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