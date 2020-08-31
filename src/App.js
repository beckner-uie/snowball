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

const styles = {
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#e5e5e5',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
  navText: {
    fontSize: '18px',
    margin: '5px',
  },
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  li: {
    border: 'black solid 1px',
    display: 'flex',
    alignContent: 'space-around',
    width: '100%',
    height: '75px',
    padding: '10px',
    fontSize: '24px',
  },
  text: {
    fontFamily: '"Ropa Sans", sans-serif',
  },
  footer: {
    width: '100%',
    backgroundColor: '#e5e5e5',
    display: 'flex',
    justifyContent: 'space-around',
  },
  newTaskButton: {
    height: '100px',
    width: '225px',
    margin: 'auto',
    marginTop: '75px',
    marginBottom: '30px',
    fontFamily: '"Barlow", sans-serif',
    letterSpacing: '.05em',
    textTransform: 'uppercase',
    fontSize: '36px',
    color: 'white',
    borderRadius: '20px',
    borderColor: 'black',
    backgroundColor: 'black',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userInfo: {
    margin: 'auto',
    flexFlow: 'column wrap',
    alignContent: 'space-around',
  },
  userPicture: {
    width: '50px',
    height: '50px',
    backgroundColor: 'gray',
    margin: 'auto',
    marginTop: '10px',
    textAlign: 'center',
  },
  userName: {
    flexFlow: 'row wrap',
    margin: '5px',
    fontSize: '14px',
    textAlign: 'center',
  },
  navButton: {
    display: 'flex',
    flexFlow: 'column wrap',
    margin: '5px 0px',
    width: '90px',
  },
  navLogo: {
    backgroundColor: 'gray',
    height: '50px',
    width: '50px',
    margin: 'auto',
  },
  list: {
    width: '100%',
    fontFamily: '"Ropa Sans", sans-serif',
  },
  listTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    border: 'black solid 1px',
    height: '95px',
    fontSize: '36px',
    padding: '20px',
    margin: 'auto 0',
    textTransform: 'uppercase',
    lineHeight: '55px',
  },
  listIcon: {
    width: '40px',
    height: '40px',
    margin: 'auto 40px',
    backgroundColor: 'gray',
  },
  checkboxText: {
    margin: 'auto 0',
  },
  aid: {
    textAlign: 'center',
    width: '100%',
    height: '130px',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#5f5f5f',
    color: 'white',
  },
  aidWrapper: {
    width: '105px',
  },
  aidSwipe: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: '75px',
    textAlign: 'center',
    fontSize: '18px',
  },
  aidEdge: {
    margin: '0',
    height: '20px',
    textTransform: 'uppercase',
    fontFamily: '"Barlow", sans-serif',
  },
  handIcon: {
    backgroundColor: 'gray',
  },
}

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