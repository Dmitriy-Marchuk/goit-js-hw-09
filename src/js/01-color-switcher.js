const refs = {
    startBt: document.querySelector('button[data-start]'),
    stopBt: document.querySelector('button[data-stop]'),
};

let intervalId = null;

refs.startBt.addEventListener('click', onStartChangeColor);
refs.stopBt.addEventListener('click', onStopChangeColor);


function onStartChangeColor() {
    console.log('старт');
    
    intervalId = setInterval(() => {
        console.log(getRandomHexColor());
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBt.disabled = true;
};


function onStopChangeColor() {
    console.log('стоп');
    
    clearInterval(intervalId);
    refs.startBt.disabled = false;
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};