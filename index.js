const button = document.querySelector('button');
console.log("it works");
let hidden = true;

button.addEventListener('click', function () {
  console.log('clicked!');
  const MyFooter = document.querySelector('footer');
  if (hidden) {
    MyFooter.style.visibility = "visible";
    hidden = false;
  }
  else if (!hidden) {
    MyFooter.style.visibility = "hidden";
    hidden = true;
  }
})