import React from 'react';

import './new.css';

export function Users(props) {
    const userName = props.userName;

    const [events, setEvent] = React.useState([]);

    



    return (
        <div className='users'>
            User:
            <span className='user-name'>{userName}</span>
            <div id='user-messages'>{createMessageArray()}</div>'
        </div>
    )
}