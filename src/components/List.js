import App from src/App.js;
import Task from src/components/Task.js;

const styles = {
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
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  text: {
    fontFamily: '"Ropa Sans", sans-serif',
  },
}

function List(props) {
  return (
  <div style={styles.list}>
    <div className="list-title" style={styles.listTitleWrapper}>
      <h2 style={Object.assign({}, styles.listTitle, styles.text)}>{props.name}</h2>
      <div className="list-icon" style={styles.listIcon}>Icon</div>
    </div>
    <ul style={styles.ul}>
      {props.list.map((task) => {
        Task(task);
      })}
    </ul>
  </div>
  );
}

export default List;