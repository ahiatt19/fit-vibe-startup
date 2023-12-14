import React from 'react';
import './past.css';


export function Past(props) {
  const userName = props.userName;

  const [user_e, setuser_e] = React.useState([]);
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    fetch(`/api/user_e/${userName}`)
      .then((response) => response.json())
      .then((user_e) => {
        setuser_e(user_e);
        localStorage.setItem('user_e', JSON.stringify(user_e));
      })
      .catch(() => {
        const user_eText = localStorage.getItem('user_e');
        if (user_eText) {
          setuser_e(JSON.parse(user_eText));
        }
      });

      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.content);
            setQuoteAuthor(data.author);
        })
      .catch();

  }, []);



  const u_eRows = [];
  if (user_e.length) {
    for (const [i, u_e] of user_e.entries()) {
      u_eRows.push(
        <tr key={i}>
          <td>{u_e.username}</td>
          <td>{u_e.datetime}</td>
          <td>{u_e.calories}</td>
          <td>{u_e.workout}</td>
          <td>{u_e.note}</td>
        </tr>
      );
    }
  } else {
    u_eRows.push(
      <tr key='0'>
        <td colSpan='5'>You have not made any entries yet!</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid text-center'>
        <h1 id='head'>Past Workouts</h1>
        <table className='table table-warning table-striped-columns'>
          <thead className='table-light'>
            <tr>
              <th id='purp_head'>Username</th>
              <th id='pink_head'>Date</th>
              <th id='purp_head'>Calories</th>
              <th id='pink_head'>Workout</th>
              <th id='purp_head'>Notes</th>
            </tr>
          </thead>
          <tbody className="table-light" id='user_e'>{u_eRows}</tbody>
        </table>
        <div className='quote-box'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </main>
  );
}