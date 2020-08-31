import React from 'react';
import './App.css';

let nowList = [{
  id: 1,
  title: "Item One",
  description: "your description",
  completed: false
},
{
  id: 2,
  title: "Item Two",
  description: "your description",
  completed: false
},
{
  id: 3,
  title: "Item Three",
  description: "your description",
  completed: false
}];
let laterList = [{
  id: 1,
  title: "Item One",
  description: "your description",
  completed: false
},
{
  id: 2,
  title: "Item Two",
  description: "your description",
  completed: false
},
{
  id: 3,
  title: "Item Three",
  description: "your description",
  completed: false
}];

const user = {
  name: "Casey Beckner",
  id: 1,
  avatar: "https://www.placecage.com/200/300"
};

function App() {
  return (
    <div className="main">
    <header>
      <h1>Snowball</h1>
      <div className="user-info">
        <img src={user.avatar}></img>
        <p className="user-name">{user.name}</p>
      </div>
    </header>
    <nav>
      <div className="nav-button">
        <p>History</p>
        <div className="nav-logo">Logo</div>
      </div>
      <div className="nav-button">
        <p>Delete</p>
        <div className="nav-logo">Logo</div>
      </div>
      <div className="nav-button">
        <p>Settings</p>
        <div className="nav-logo">Logo</div>
      </div>
    </nav>
    <div className="now list">
      <div className="list-title">
        <h2>Now</h2>
        <div className="list-icon">Icon</div>
      </div>
      <ul>
      {nowList.map((nowTask) => {
          return (
          <li>
          <input className="checkbox" type="checkbox" name="finished" checked={nowTask.completed}></input>
          <p className="checkbox-text">{nowTask.title}</p>
          </li>
          );
        })}
      </ul>
    </div>
    <div className="aid">
    <div className="aid-arrow"> --- swipe arrow ---</div>
    <div className="aid-swipe">
    <div>
      <p>Swipe Left to add a Day to the Deadline</p>
    </div>
    <div className="hand-icon">Hand Icon</div>
    <div>
      <p>Check or Swipe Right to Complete</p>
    </div>
    </div>
    <p className="aid-delete">Long press to start deleting</p>
    </div>
    <div className="later list">
    <div className="list-title">
        <h2>Later</h2>
        <div className="list-icon">Icon</div>
      </div>
      <ul>
        {laterList.map((laterTask) => {
          return (
          <li>
          <input className="checkbox" type="checkbox" name="finished" checked={laterTask.completed}></input>
          <p className="checkbox-text">{laterTask.title}</p>
          </li>
          );
        })}
      </ul>
    </div>
    <footer>
      <button>New Task</button>
    </footer>
    </div>
  );
}
export default App;