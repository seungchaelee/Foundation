let counter = 0;

function count() {
//counter += 1;
//counter = counter + 1; 같음
  counter++;
  document.querySelector('h1').innerHTML = counter;

  if (counter % 10 === 0) {
    alert(`Count is now ${counter}`);
  }
}

document.addEventListener('DOMContentLoaded', function () {
//document.querySelector('button').addEventListener('click', count); 같음
  document.querySelector('button').onclick = count;

  setInterval(count, 1000);
});
