import React from 'react';
import './App.css';

function App() {
  return (
    <div class="main">
    <header>
      <h1>Snowball</h1>
      <div class="user-info">
        <div class="user-picture">avatar</div>
        <p class="user-name">My Name Here</p>
      </div>
    </header>
    <nav>
      <div class="nav-button">
        <p>History</p>
        <div class="nav-logo">Logo</div>
      </div>
      <div class="nav-button">
        <p>Delete</p>
        <div class="nav-logo">Logo</div>
      </div>
      <div class="nav-button">
        <p>Settings</p>
        <div class="nav-logo">Logo</div>
      </div>
    </nav>
    <div class="now list">
      <h2 class="list-title">Now</h2>
      <ul>
        <li>
          <input class="checkbox" type="checkbox" name="finished"></input>
          <p class="checkbox-text">Item One</p>
        </li>
        <li>
          <input class="checkbox" type="checkbox" name="finished"></input>
          <p class="checkbox-text">Item Two</p>
        </li>
      </ul>
    </div>
    <div class="aid">
    <div class="aid-arrow"> --- swipe arrow ---</div>
    <div class="aid-swipe">
    <div>
      <p>Swipe Left to add a Day to the Deadline</p>
    </div>
    <div>Hand Icon</div>
    <div>
      <p>Check or Swipe Right to Complete</p>
    </div>
    </div>
    <p class="aid-delete">Long press to start deleting</p>
    </div>
    <div class="later list">
      <h2 class="list-title">Later</h2>
      <ul>
      <li>
          <input class="checkbox" type="checkbox" name="finished"></input>
          <p class="checkbox-text">Item One</p>
        </li>
        <li>
          <input class="checkbox" type="checkbox" name="finished"></input>
          <p class="checkbox-text">Item Two</p>
        </li>
      </ul>
    </div>
    <footer>
      <button>New Task</button>
    </footer>
    </div>
  );
}

export default App;
