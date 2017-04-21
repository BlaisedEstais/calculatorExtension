var start = document.body.querySelector(".start");

start.addEventListener("click", calculator);

function calculator() {
  var eq =window.prompt("your equation");

  switch (true) {
    case eq.indexOf('+')>0:
      console.log('+');
      break;
    case (eq.indexOf('*')>0) || (eq.indexOf('x')>0):
      console.log('x');
      break;
    case (eq.indexOf('/')>0) || (eq.indexOf('d')>0):
        console.log('d');
        break;
    case eq.indexOf('-')>0:
      console.log('-');
      break;
    default:
      console.log('no');
  }
}
