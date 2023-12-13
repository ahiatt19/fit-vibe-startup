import React from 'react';
import './new.css';

import Button from 'react-bootstrap/Button';

export function EntryForm(props) {
    const userName = props.userName;

    async function saveForm() {
      console.log('hitting saveForm')
        const date = document.querySelector("#datetime");
        //localStorage.setItem("datetime", date.value.substring(0, 10));
        const calories = document.querySelector("#cals");
        //localStorage.setItem("cals", calories.value);
        const wrkout = document.querySelector("#wrkout");
        //localStorage.setItem("wrkout", wrkout.value);
        const note = document.querySelector("#note");
        //localStorage.setItem("note", note.value)
        
        const newEntry = {name: userName, calories: parseFloat(calories.value), workout: wrkout.value, note: note.value};
        const newUserEntry = {username: userName, datetime: date.value.substring(0, 10), calories: parseFloat(calories.value), workout: wrkout.value, note: note.value};

        try {
            const response = await fetch('/api/entry', {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(newEntry),
            });

            const response1 = await fetch('/api/userentry', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(newUserEntry),
            });

            this.broadcastEvent(this.getUserName(), FormSubmit, newEntry);

        } catch {
            // If there was an error then just track scores locally
            updateEntriesLocal(newEntry);
            updateUserEntryLocal(newUserEntry);
          }


    }

    function updateEntriesLocal(newEntry) {
        //console.log('hitting this func')
        //const date = new Date().toLocaleDateString();
          let entries = [];
          const entriesText = localStorage.getItem('entries');
          if (entriesText) {
            entries = JSON.parse(entriesText);
          }
      
          let found = false;
          for (const [i, prevEntry] of entries.entries()) {
            if (+newEntry.calories > +prevEntry.calories) {
              //console.log(newEntry.calories)
              //console.log(prevEntry.calories)
              entries.splice(i, 0, newEntry);
              found = true;
              break;
            }
          }
      
          if (!found) {
            entries.push(newEntry);
          }
      
          if (entries.length > 10) {
            entries.length = 10;
          }
      
          localStorage.setItem('entries', JSON.stringify(entries));
        }

        function updateUserEntryLocal(newUserEntry) {
            let user_e = [];
            const user_eText = localStorage.getItem('user_e');
            if (user_eText) {
              user_e = JSON.parse(user_eText);
            }
        
        
            let found = false;
            for (const [i, prevEntry] of user_e.entries()) {
              if (prevEntry.datetime < newUserEntry.datetime) {
                user_e.splice(i, 0, newUserEntry);
                found = true;
                break;
              }
            }
            //console.log(user_e)
            if (!found) {
              user_e.push(newUserEntry);
            }
        
            localStorage.setItem('user_e', JSON.stringify(user_e));
          }

    return (
        <div className='entry'>
          <h1 id='head'>Track your Workout</h1>
            <form className="text-center" method="get">
                <ul>
                    <label id='form_item' htmlFor="datetime">Date & Time: </label>
                    <input type="datetime-local" name="varDatetime" id="datetime" required/>
                </ul>
                <ul>
                    <label id='form_item' htmlFor="calories">Calories: </label>
                    <input type="cals" id="cals" placeholder="100..." required/>
                </ul>  
                <ul>
                    <label id='form_item' htmlFor="workout_type">Workout: </label>
                    <select id="wrkout" name="varSelect">
                        <option value>n/a</option>
                        <option>Body Weight</option>
                        <option>Cycling</option>
                        <option>Cardio</option>
                        <option>Flexibility</option>
                        <option>HIIT</option>
                        <option>Hiking</option>
                        <option>Lower Body WL</option>
                        <option>Pilates</option>
                        <option>Running</option>
                        <option>Stair Master</option>
                        <option>Strength Training</option>
                        <option>Swimming</option>
                        <option>Walking</option>
                        <option>Weightlifting</option>
                        <option>Upper Body WL</option>
                        <option>Yoga</option>
                    
                    </select>
                </ul>
                <ul>
                    <label id='form_item' htmlFor="note">Note: </label>
                    <input type="note" id="note" placeholder="Optional" />
                </ul>
                <Button variant='primary' onClick={() => saveForm()}>
                    Submit
                </Button>
            </form>
        </div>
    );
}