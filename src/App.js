import React from 'react';
import './App.css';
import Task from './components/Task.js';
import Topbar from './components/Topbar.js';
import Footer from './components/Footer.js';

const styles = {
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
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
  text: {
    fontFamily: '"Ropa Sans", sans-serif',
  },
  footer: {
    width: '100%',
    backgroundColor: '#e5e5e5',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    padding: '20px',
  },
  newTaskButton: {
    height: '100px',
    width: '225px',
    margin: 'auto',
    marginTop: '30px',
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
  },
  text: {
    fontFamily: '"Ropa Sans", sans-serif',
  },
}

class App extends React.Component {
  state = {
    list: [],
  nextId: 1,
  user: {
     name: "Casey Beckner",
     id: 1,
     avatar: "https://www.placecage.com/200/300"
   }
  }
  constructor(props)
  {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteToDo= this.deleteToDo.bind(this);
  }
  addTodo(todoTitle) {
    let list = this.state.list.slice();
    list.push({id: this.state.nextId, title: todoTitle})
    this.setState({
      list: list,
      nextId: ++this.state.nextId
    });
  }
  deleteToDo(id) {
    this.setState({
        list: this.state.list.filter((task) => task.id !== id)
      });
  }
  
  render () {
  return (
    <div className="main">
      <Topbar user={this.state.user} />
      <div style={styles.list}>
        <div className="list-title" style={styles.listTitleWrapper}>
        <h2 style={Object.assign({}, styles.listTitle, styles.text)}>To Do</h2>
        </div>
        <ul style={styles}>
        {this.state.list.map((task) => {
          return <Task task={task} key={task.id} id={task.id} deleteToDo={this.deleteToDo} />
          })}
        </ul>
      </div>
      <Footer todoTitle='' addTodo={this.addTodo} />
    </div>
  );}
}
export default App;