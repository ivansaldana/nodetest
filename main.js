import './style.css';

fetch('https://firstapi-seven.vercel.app/todos', {
  method: 'get',
  cors:"omit"
})
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    let ul = document.getElementById('ul_todo');
    data.forEach(todo => {
      ul.appendChild(createLi(todo.title));
    });
  });

const createLi = (content) => {
  let li = document.createElement('li');
  li.innerHTML = content;
  return li;
}

