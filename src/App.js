import React from 'react';
import './App.css';
import List from './components/List.js';
import Topbar from './components/Topbar.js';

const styles = {
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
  list: {
    width: '100%',
    fontFamily: '"Ropa Sans", sans-serif',
  },
  listTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    border: 'black solid 1px',
  },
  listTitle: {
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
  text: {
    fontFamily: '"Ropa Sans", sans-serif',
  },
}

class App extends React.Component {
  state = {
    nowList: [
  {
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
  }
  ],
  laterList: [
  {
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
  }
  ],
  user: {
     name: "Casey Beckner",
     id: 1,
     avatar: "https://www.placecage.com/200/300"
   }
  }
  render () {
  return (
    <div className="main">
      {Topbar(this.state.user)}
      <nav style={styles.nav}>
        <div className="nav-button" style={styles.navButton}>
          <p style={Object.assign({}, styles.navText, styles.text)}>History</p>
          <div className="nav-logo" style={styles.navLogo}>Logo</div>
        </div>
        <div className="nav-button" style={styles.navButton}>
          <p style={Object.assign({}, styles.navText, styles.text)}>Delete</p>
          <div className="nav-logo" style={styles.navLogo}>Logo</div>
        </div>
        <div className="nav-button" style={styles.navButton}>
          <p style={Object.assign({}, styles.navText, styles.text)}>Settings</p>
          <div className="nav-logo" style={styles.navLogo}>Logo</div>
        </div>
      </nav>
      <div style={styles.list}>
        <div className="list-title" style={styles.listTitleWrapper}>
        <h2 style={Object.assign({}, styles.listTitle, styles.text)}>Now</h2>
        <div className="list-icon" style={styles.listIcon}>Icon</div>
        </div>
        {List(this.state.nowList)}
      </div>
      <div className="aid" style={styles.aid}>
        <div className="aid-arrow" style={styles.aidEdge}> --- swipe arrow ---</div>
        <div className="aid-swipe" style={styles.aidSwipe}>
          <div style={styles.aidWrapper}>
            <p>Swipe Left to add a Day to the Deadline</p>
          </div>
          <div className="hand-icon" style={Object.assign({}, styles.aidWrapper, styles.handIcon)}>Hand Icon</div>
          <div style={styles.aidWrapper}>
            <p style={styles.text}>Check or Swipe Right to Complete</p>
          </div>
        </div>
        <p className="aid-delete" style={styles.aidEdge}>Long press to start deleting</p>
      </div>
      <div style={styles.list}>
        <div className="list-title" style={styles.listTitleWrapper}>
        <h2 style={Object.assign({}, styles.listTitle, styles.text)}>Later</h2>
        <div className="list-icon" style={styles.listIcon}>Icon</div>
        </div>
        {List(this.state.laterList)}
      </div>
    <footer style={styles.footer}>
      <button style={styles.newTaskButton}>New Task</button>
    </footer>
    </div>
  );}
}
export default App;