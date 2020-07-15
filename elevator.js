let inputFloors = findInputFloors();
let inputFloorsBlock = findInputFloorsBlock();
let houseField = findHouseField();
let houseBlock = findHouseBlock();
let controlBlock = findControlBlock();
let inputStartFloorNumber = findinputStartFloorNumber();
let inputFinishFloorNumber = findinputFinishFloorNumber();
let startButton = findStartButton();

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

function findStartButton() {
    return document.querySelectorAll('.startButton');
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



function getFloors(e) {
    if (e.code == 'Enter' || e.code == "NumpadEnter") {
        let inputValue = getValueOfInput(inputFloors);
        let check = checkInputValue(inputFloors, inputValue);
        
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

function startMovingElevator() {
    let startNumber = getFloor(inputStartFloorNumber, numberOfFloors);
    let finishNumber = getFloor(inputFinishFloorNumber, numberOfFloors);
    if (startNumber && finishNumber) {
        console.log('OK');
    }
}

function getFloor(input, numberOfFloors) {
    let floorNumber = getValueOfInput(input);
    let check = checkInputValue(input, floorNumber, numberOfFloors);
    if (check) {
        return floorNumber;
    } else {
        return false;
    }
}

function checkInputValue(input, inputValue, numberOfFloors) {
    let minFloor = (numberOfFloors) ? 1 : 3;
    let maxFloor = (numberOfFloors) ? +numberOfFloors : 9;

    if (isFinite(inputValue) && inputValue) {
        if (numberOfFloors) {
            if (inputValue < minFloor || inputValue > maxFloor) {
                paintField(input, 1);
                alertMessageNotValidValue (4, minFloor, maxFloor);
            } else {
                paintField(input);
                return true;
            }
        } else {
            if (inputValue < minFloor) {
                paintField(input, 1);
                alertMessageNotValidValue(1, minFloor, maxFloor);
            } else if (inputValue > maxFloor) {
                paintField(input, 1);
                alertMessageNotValidValue(2, minFloor, maxFloor);
            } else {
                paintField(input);
                return true;
            }
        }
    } else {
        paintField(input, 1);
        alertMessageNotValidValue(3, minFloor, maxFloor);
    }
}

function paintField(field, option) {
    field.style.background = (option == 1) ? "#FF5050": "#FFFFFF";
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