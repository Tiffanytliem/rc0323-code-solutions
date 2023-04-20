const $userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  const xhrResponse = xhr.response;
  for (let i = 0; i < xhrResponse.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = xhrResponse[i].name;
    $userList.appendChild($li);
  }
});
xhr.send();
