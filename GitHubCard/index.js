const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

const showFunc = function(item) {
const card = document.createElement('div');
const img = document.createElement('img');
const cardInfo = document.createElement('div');
const header = document.createElement('h3');
const username = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

  cardInfo.classList.add('card-info');
  header.classList.add('name');
  username.classList.add('username');
  card.classList.add('card');

  img.src = item.data.avatar_url;
  header.textContent = item.data.name;
  username.textContent = item.data.login;
  location.textContent = `Location: ${item.data.location}`;
  profile.setAttribute('href', item.data.html_url);
  profile.textContent = item.data.html_url;
  followers.textContent = `Followers: ${item.data.followers}`;
  following.textContent = `Following: ${item.data.following}`;
  bio.textContent = `Bio: ${item.data.bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

   return card;
}

axios.get('https://api.github.com/users/fluxlog')
.then(response => {
  document.querySelector('.cards').appendChild(
    showFunc(response)
  )
})
.catch(error => console.log(error))


followersArray.forEach(follower => {
  axios.get('https://api.github.com/users/' + follower)
  .then(response => {
  document.querySelector('.cards').appendChild(
    showFunc(response)
  )
  })
  .catch(error => console.log(error))
})
