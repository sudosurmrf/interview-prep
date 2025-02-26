function createPromiseButton(button) {
  return new Promise((resolve) => {
    
    function handleClick() {
      resolve('We clicked the button!');
      button.removeEventListener('click', handleClick);
    }
    button.addEventListener('click', handleClick);
  })
}

const button = document.getElementById('myButton');
const buttonClickPromise = createPromiseButton(button);

buttonClickPromise.then((message) => {
  console.log(message);
})