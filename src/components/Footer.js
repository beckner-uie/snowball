import React from 'react';
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
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: this.props.todoTitle};
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    addTodo(todo) {
    this.props.addTodo(todo);
    this.setState({value: ''});
    }
    handleChange(e) {
      this.setState({value: e.target.value});
    }
    render () {
    return (
       <footer style={styles.footer}>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button style={styles.newTaskButton} onClick={() => this.addTodo(this.state.value)}>Add Task</button>
        </footer> 
    );}
}
    