//находим элементы и привязываем к ним переменные
let inputFloors = findInputFloors();
let inputFloorsBlock = findInputFloorsBlock();
let houseField = findHouseField();
let houseBlock = findHouseBlock();
let controlBlock = findControlBlock();
let inputStartFloorNumber = findinputStartFloorNumber();
let inputFinishFloorNumber = findinputFinishFloorNumber();
let startButton = findStartButton();

//переменная в которой храним число этажей
let numberOfFloors = 0;

//привязываем прослушивание событий на элементы
bindListenerToInputFloors(inputFloors);
bindListenerToStartFloorNumber(inputStartFloorNumber);
bindListenerToFinishFloorNumber(inputFinishFloorNumber);


//функции для определения элементов
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



//функция для привязывания событий к элементу ввода этажей
function bindListenerToInputFloors(inputFloors) {
    inputFloors.addEventListener('keydown', getFloors);
}



//получаю число этажей
function getFloors(e) {
    if (e.code == 'Enter' || e.code == "NumpadEnter") {
        //получаю введёное в поле значение
        let inputValue = getValueOfInput(inputFloors);
        //проверяю значение поля
        let check = checkInputValue(inputFloors, inputValue);
        
        //если проверка проходит
        if (check) {
            //скрываю блок ввода этажей
            //открываю поле дома и поле воода и старта
            inputFloorsBlock.style.display = "none";
            houseField.style.display = "flex";
            controlBlock.style.display = "block";
            //присваиваю полученное значение переменной с числом этажей
            numberOfFloors = inputValue;

            //отрисовываю этажи по введёному количеству
            for (let i = 1; i <= inputValue; i++) {
                buildFloors(houseBlock);
            }
        }
    }
}

//функция определения значения у поля 
function getValueOfInput(input) {
    return input.value;
}

//функция добавления дивов жтажей и присваивания им класса
function buildFloors(houseBlock) {
    let div = document.createElement('div');
    div.className = "floor";

    houseBlock.append(div);
}

//начало движения лифта
function startMovingElevator() {
    //получение этажа старта и финиша
    let startNumber = getFloor(inputStartFloorNumber, numberOfFloors);
    let finishNumber = getFloor(inputFinishFloorNumber, numberOfFloors);
    if (startNumber && finishNumber) {
        console.log('OK');
    }
}

//функция для получения этажа
function getFloor(input, numberOfFloors) {
    //получаю введёное значение
    let floorNumber = getValueOfInput(input);
    //проверяю валидность значения
    let check = checkInputValue(input, floorNumber, numberOfFloors);
    //возвращаю валидное значение
    if (check) {
        return floorNumber;
    } else {
        return false;
    }
}

//проверка валидности значения введёного этажа
function checkInputValue(input, inputValue, numberOfFloors) {
    //если этажность дома ещё не указана,
    //то валидные рамки от 3х до 9ти,
    //если указана от 1го до числа этажей
    let minFloor = (numberOfFloors) ? 1 : 3;
    let maxFloor = (numberOfFloors) ? +numberOfFloors : 9;

    //если значение число, проверяем указано ли значение этажей
    //если нет, то это начальный ввод, если да, то ввод старта финиша,
    //отдаём соответствующие параметры для вывода ошибки
    if (isFinite(inputValue) && inputValue) {
        if (numberOfFloors) {
            if (inputValue < minFloor || inputValue > maxFloor) {
                //если значение не валидно, красим в красный и пишем соответствующий алерт
                paintField(input, 1);
                alertMessageNotValidValue (4, minFloor, maxFloor);
            } else {
                //если значение валидно, красим поле в белый и отдаём тру
                paintField(input);
                return true;
            }
        } else {
            //если значение не валидно, красим в красный и пишем соответствующий алерт
            if (inputValue < minFloor) {
                paintField(input, 1);
                alertMessageNotValidValue(1, minFloor, maxFloor);
                //если значение не валидно, красим в красный и пишем соответствующий алерт
            } else if (inputValue > maxFloor) {
                paintField(input, 1);
                alertMessageNotValidValue(2, minFloor, maxFloor);
            } else {
                //если значение валидно, красим поле в белый и отдаём тру
                paintField(input);
                return true;
            }
        }
    } else {
        //если значение не валидно, красим в красный и пишем соответствующий алерт
        paintField(input, 1);
        alertMessageNotValidValue(3, minFloor, maxFloor);
    }
}

//красим поле ввода красным или белым
function paintField(field, option) {
    field.style.background = (option == 1) ? "#FF5050": "#FFFFFF";
}

//функция вывода сообщения о невалидном значении
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