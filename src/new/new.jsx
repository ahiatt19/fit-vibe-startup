import React from 'react';
import './new';


import { Users } from './user';
import { EntryForm } from './EntryForm';

export function New(props) {
  return (
    <main className='container-fluid'>
      <Users userName={props.userName} />
      <EntryForm userName={props.userName} />
    </main>
  );
}