// async function callApi() {
//   // const res = await fetch('http://localhost:8000/users/');
//   const res = await fetch('http://127.0.0.1:8000/api/profiles/');
//   const users = await res.json();
//   console.log(users);

//   const profileList = document.getElementById('profileList');

//   users.forEach(user => {
//       const listItem = document.createElement('li');
//       listItem.textContent = `${user.id} 名前:${user.username} 性別${user.sex} 国籍${user.nation}`;
//       profileList.appendChild(listItem);
//   });
// }

// callApi();

async function callApi() {
  const data = {
    username: 'JohnDoe',
    sex: 'Male',
    nation: 'Japan',
  };

  fetch('http://127.0.0.1:8000/api/profiles/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      displayData(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayData(data) {
  const ul = document.querySelector('ul');
  for (const key in data) {
    const li = document.createElement('li');
    li.textContent = `${key}: ${data[key]}`;
    ul.appendChild(li);
  }
}

callApi();