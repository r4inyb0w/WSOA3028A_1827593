const button = document.querySelector('button');
console.log("it works");
let hidden = true;

button.addEventListener('click', function () {
  console.log('clicked!');
  const MyFooter = document.querySelector('footer');
  MyFooter.style.visibility = (hidden) ? "visible" : "hidden";
  hidden = !hidden;
})