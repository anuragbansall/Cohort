import config from './config.js';
const token = config.token;

async function fetchUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    if (!response.ok) throw new Error('User not found');
    const data = await response.json();

    if (data.message === 'Not Found') throw new Error('User not found');
    return data;
  } catch (error) {
    console.error(error);
    alert('Failed to fetch user data. Please try again.');
    return null;
  }
}

async function fetchUserRepos(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    if (!response.ok) throw new Error('Repositories not found');
    const data = await response.json();

    if (data.message === 'Not Found') throw new Error('Repositories not found');
    return data;
  } catch (error) {
    console.error(error);
    alert('Failed to fetch repositories. Please try again.');
    return [];
  }
}


function renderHeader(userData) {
  const header = document.querySelector('#profile-header');
  const bio = userData.bio || 'This user has no bio';

  header.innerHTML = `
    <div id="profile-picture">
      <img src="${userData.avatar_url}" alt="Profile Picture" />
    </div>
    <div id="profile-info">
      <h2>${userData.name}</h2>
      <p>@${userData.login}</p>
      <p>${bio}</p>
      <a href="${userData.html_url}" target="_blank">View on GitHub</a>
      <div id="profile-stats">
        <div class="stat">
          <p>Followers</p>
          <h3>${userData.followers}</h3>
        </div>
        <div class="stat">
          <p>Following</p>
          <h3>${userData.following}</h3>
        </div>
        <div class="stat">
          <p>Repositories</p>
          <h3>${userData.public_repos}</h3>
        </div>
      </div>
    </div>
  `;
}


function renderRepos(repos) {
  const repoCards = document.querySelector('#repo-cards');
  if (repos.length === 0) {
    repoCards.innerHTML = '<p>No repositories found for this user.</p>';
    return;
  }

  const repoHtml = repos.map(repo => `
    <a class="repo-card" href="${repo.html_url}" target="_blank">
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description available."}</p>
      <p>Language: ${repo.language || "No language specified"}</p>
      <p>Stars: ${repo.stargazers_count}</p>
    </a>
  `).join('');

  repoCards.innerHTML = repoHtml;
}


async function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input').value;

  fetchButton.disabled = true;
  fetchButton.textContent = 'Loading...';

  const [userData, userRepos] = await Promise.all([
    fetchUserData(username),
    fetchUserRepos(username),
  ]);

  fetchButton.disabled = false;
  fetchButton.textContent = 'Search';

  if (userData) {
    renderHeader(userData);
    renderRepos(userRepos);
    profile.style.display = 'block';
  } else {
    profile.style.display = 'none';
  }

  searchForm.reset();
  document.querySelector('#username-input').focus();
}

const searchForm = document.querySelector('#search-form');
const fetchButton = document.querySelector('#fetch-button');
const profile = document.querySelector('#profile');

searchForm.addEventListener('submit', handleFormSubmit);
