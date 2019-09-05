console.clear();
const inp = document.querySelector('input');
inp.style.border = "4px solid green";
inp.style.padding = "3px 35px";
inp.style.backgroundColor = "lightyellow";
inp.style.position = 'fixed';
inp.style.left = '100px';
document.body.style.backgroundColor = "#a8f0a3";

const btn = document.querySelector('button');
btn.classList.add('btn-primary');
btn.addEventListener('click', (element) => { //що робити коли клікаєм?
  const a = document.querySelector('input').value;
  const section = document.querySelector('#section');
  const text = a;

  const p = document.createElement('p');

  p.textContent = text;
  p.style.backgroundColor = "lightyellow";
  p.style.fontSize = "large";

  section.appendChild(p);
})

const removeClass = document.querySelector('.removeClass');
removeClass.classList.add('btn-primary');
removeClass.addEventListener('click', (element) => {
  const a = document.querySelector('input').value;
  const section = document.querySelector('#section');
  const text = a;
  const p = document.createElement('p');

  p.textContent = text;

  section.removeChild(section.lastElementChild);
})

//section.removeChild(section, p);
/* section.childNodes.forEach(element => {
  if (element) {//якщо це comment
     console.log(element);
  } */
//})
