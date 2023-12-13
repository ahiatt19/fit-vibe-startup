import React from 'react';

import './leaderboard.css'

export function Leaderboard() {
  const [entries, setEntries] = React.useState([]);

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
          <td>{i+1}</td>
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
      <h1 id='head'>Leaderboard</h1>
        <table className='table table-warning table-striped-columns text-center'>
          <thead className='table-light'>
            <tr>
              <th id='pink_head'>Rank</th>
              <th id='purp_head'>Username</th>
              <th id='pink_head'>Calories</th>
              <th id='purp_head'>Workout</th>
              <th id='pink_head'>Notes</th>
            </tr>
          </thead>
          <tbody class="table-light" id='entries'>{entryRows}</tbody>
        </table>
    </main>
  );
}