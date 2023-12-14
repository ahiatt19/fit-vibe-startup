import React from 'react';

import { EntryEvent, EntryNotifier } from './entryNotifier';
import './new.css';

export function Users(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    EntryNotifier.addHandler(handleEntryEvent);

    return () => {
      EntryNotifier.removeHandler(handleEntryEvent);
    };
  });

  function handleEntryEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === EntryEvent.FormSubmit) {
        message = ` burned ${event.value.calories} calories`;
      } else if (event.type === EntryEvent.UserLoggedIn) {
        message = ` logged on`;
      } else if (event.type === EntryEvent.System) {
        message = event.value;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'user-event'}>{event.from}</span>
          {message}
        </div>
      );
    }
    console.log(messageArray);
    return messageArray;
  }

  return (
    <div className='users'>
      User: 
      <span className='user-name'>{userName}</span>
      <div id='user-messages'>{createMessageArray()}</div>
    </div>
  );
}
