if (!localStorage.getItem('counter')) {
  localStorage.setItem('counter', 0);
}

function count() {
  let counter = localStorage.getItem('counter');
  counter++;  // counter = counter +1; // counter += 1; 같음
  document.querySelector('h1').innerHTML = counter;
  localStorage.setItem('counter', counter);

  // if (counter % 10 === 0) {
  //   alert(`Count is now ${counter}`);
  // }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('h1').innerHTML = localStorage.getItem('counter');
//document.querySelector('button').addEventListener('click', count); 같음
  document.querySelector('button').onclick = count;

  // setInterval(count, 1000);
});
