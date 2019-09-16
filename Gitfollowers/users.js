const btnGetUser = document.querySelector('#getUserBtn');
const searchInput = document.querySelector('#searchInput');
const avatar = document.querySelector('#avatar');
const userName = document.querySelector('#userName');
const followers = document.querySelector('#followers');
const bio = document.querySelector('#bio');

// API GITHUB
const gitHubApiUrl = 'https://api.github.com/users';

// Listeners
btnGetUser.addEventListener('click', () => {
   if(searchInput.value) {
       getUser(searchInput.value)
   }
});


// Get user by login name
const getUser = (userName) => {
 const xhr = new XMLHttpRequest();
 xhr.open('GET', `${gitHubApiUrl}/${userName}`);
 xhr.onreadystatechange = function() {
   if(xhr.readyState === 4 && xhr.status === 200) {
      parseData(JSON.parse(xhr.responseText));
      getUsers(userName);
   }
 };
 xhr.send();
};


// Parse user data => html
const parseData = (object) => {
   avatar.src = object["avatar_url"];
   bio.textContent = object["bio"];
   userName.textContent = object["login"];
   followers.href = object["followers_url"];
   followers.textContent = 'Followers';
};

// Get user by login name
const getUsers = (userName) => {
 const xhr = new XMLHttpRequest();
 xhr.open('GET', `${gitHubApiUrl}/${userName}/followers`);
 xhr.onreadystatechange = function() {
   if(xhr.readyState === 4 && xhr.status === 200) {
    //parseS(JSON.parse(xhr.responseText));
    //console.log(JSON.parse(xhr.responseText));
    let a = JSON.parse(xhr.responseText);
     a.forEach(logArrayElements);
     parseS(a[0]);
     parseSI(a[1]);
     parseSI2(a[2]);
     parseSI3(a[3]);
     parseSI4(a[4]);
     parseSI5(a[5]);
   }
 };
 xhr.send();
};

function logArrayElements(element, index, array) {
  console.log('array[' + index + '] = ' + element);
}

const parseS = (object) => {
   avatars.src = object["avatar_url"];
   userNames.textContent = object["login"];
};

const parseSI = (object) => {
   avatarsi.src = object["avatar_url"];
   userNamesi.textContent = object["login"];
};

const parseSI2 = (object) => {
   avatarsi2.src = object["avatar_url"];
   userNamesi2.textContent = object["login"];
};

const parseSI3 = (object) => {
   avatarsi3.src = object["avatar_url"];
   userNamesi3.textContent = object["login"];
};


const parseSI4 = (object) => {
   avatarsi4.src = object["avatar_url"];
   userNamesi4.textContent = object["login"];
};


const parseSI5 = (object) => {
   avatarsi5.src = object["avatar_url"];
   userNamesi5.textContent = object["login"];
};
