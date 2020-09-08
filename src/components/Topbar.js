import React from 'react';
const styles = {
info: {
    display: 'flex',
    margin: 'auto',
    flexFlow: 'column wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
avatar: {
    width: '50px',
    height: '50px',
    backgroundColor: 'gray',
    margin: 'auto',
    marginTop: '10px',
    textAlign: 'center',
    alignSelf: 'center',
  },
name: {
    flexFlow: 'row wrap',
    margin: '5px',
    fontSize: '14px',
    textAlign: 'center',
  },
header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#e5e5e5',
  },
  text: {
    fontFamily: '"Ropa Sans", sans-serif',
  },
}

function Topbar(props) {
    return (
    <header style={styles.header}>
        <h1>Snowball</h1>
        <div style={styles.info} className="user-info">
          <img style={styles.avatar} src={props.avatar} alt="your avatar"></img>
          <p style={Object.assign({}, styles.name, styles.text)} className="user-name">{props.name}</p>
        </div>
    </header>
    )}

    export default Topbar;