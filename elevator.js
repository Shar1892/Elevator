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
    inputStartFloorNumber.addEventListener('keydown', getNumberStartFloor);
}

function bindListenerToFinishFloorNumber(inputFinishFloorNumber) {
    inputFinishFloorNumber.addEventListener('keydown', getNumberFinishFloor);
}


function getNumberStartFloor(e) {
    if (e.code == 'Enter' || e.code == "NumpadEnter") {
        let inputValue = getValueOfInput(inputStartFloorNumber);
        let check = checkInputValue(inputValue, numberOfFloors);
        if (check) {
            console.log(inputValue);
        }
    }
}

function getNumberFinishFloor(e) {
    if (e.code == 'Enter' || e.code == "NumpadEnter") {
        let inputValue = getValueOfInput(inputFinishFloorNumber);
        let check = checkInputValue(inputValue, numberOfFloors);
        if (check) {
            console.log(inputValue);
        }
    }
}

function getFloors(e) {
    if (e.code == 'Enter' || e.code == "NumpadEnter") {
        let inputValue = getValueOfInput(inputFloors);
        let check = checkInputValue (inputValue);
        
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

function getValueOfInput(input) {
    return input.value;
}

function buildFloors(houseBlock) {
    let div = document.createElement('div');
    div.className = "floor";

    houseBlock.append(div);
}

function checkInputValue(inputValue, numberOfFloors) {
    let minFloor = (numberOfFloors) ? 1 : 3;
    let maxFloor = (numberOfFloors) ? +numberOfFloors : 9;

    if (isFinite(inputValue) && inputValue) {
        if (numberOfFloors) {
            if (inputValue < minFloor || inputValue > maxFloor) {
                alertMessageNotValidValue (4, minFloor, maxFloor);
            } else {
                return true;
            }
        } else {
            if (inputValue < minFloor) {
                alertMessageNotValidValue(1, minFloor, maxFloor);
            } else if (inputValue > maxFloor) {
                alertMessageNotValidValue(2, minFloor, maxFloor);
            } else {
                return true;
            }
        }
    } else {
        alertMessageNotValidValue(3, minFloor, maxFloor);
    }
}

function alertMessageNotValidValue(option, min, max) {
    let phrase = (option == 1) ? 'Мало этажей для лифта.':
        (option == 2) ? 'Слишком высокий дом.':
        (option == 3) ? 'Введено не число.':
        (option == 4) ? 'Нет такого этажа в доме.':
        'Ничего не пишем';

    alert(`${phrase} Укажите значение от ${min} до ${max}`);
    return false;
}


let click = () => console.log('click');