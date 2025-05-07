// const myPromise = new Promise((resolve, reject) => {
//
// });
// console.log(myPromise);
//
// myPromise.then(res => res.json())    // получаем конкретные данные
//           .then(data => console.log(data))
//           .catch(err => console.log('error'))
//
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error'))
//
// const getData = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await res.json();
//   } catch (e) {
//     console.error(e.message)
//   }
// }
//
// const fetchData = await getData();
// console.log(fetchData);

const getData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
  } catch (e) {
    console.error(e.message + " ошибка")
  }
}
const fetchData = await getData();

const bodyEl = document.querySelector('body');

const saveTask = JSON.parse(localStorage.getItem('tasks')) || [];
saveTask.forEach(task => {
  const liEl = document.createElement('li');
  liEl.textContent = task;
  bodyEl.appendChild(liEl);
})

const addTask = () => {
  if (localStorage.key('tasks')) {
    localStorage.removeItem('tasks');
  }
  fetchData.forEach(el => {
    saveTask.push(el.name);
  })
  localStorage.setItem('tasks', JSON.stringify(saveTask));
}

addTask();


