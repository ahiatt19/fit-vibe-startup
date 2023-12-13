import React from 'react';

import './leaderboard.css'

export function Leaderboard() {
  const [entries, setentries] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/entries')
      .then((response) => response.json())
      .then((entries) => {
        setEntries(entries);
        localStorage.setItem('entries', JSON.stringify(entries));
      })
      .catch(() => {
        const entriesText = localStorage.getItem('entries');
        if (entriesText) {
          setEntries(JSON.parse(entriesText));
        }
      });
  }, []);
  
  const entryRows = [];
  if (entries.length) {
    for (const [i, entry] of entries.entries()) {
      entryRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{entry.name}</td>
          <td>{entry.calories}</td>
          <td>{entry.workout}</td>
          <td>{entry.note}</td>
        </tr>
      );
    }
  } else {
    entryRows.push(
      <tr key='0'>
        <td colSpan='5'>Be the first to compete!</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid'>
      <h1>Leaderboard</h1>
        <table className='table table-warning table-striped-columns text-center'>
          <thead className='table-light'>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Calories</th>
              <th>Workout</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody class="table-light" id='entries'>{entryRows}</tbody>
        </table>
    </main>
  );
}