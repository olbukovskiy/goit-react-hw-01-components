import './App.css';
import Box from 'Box';

import { Profile } from '../Profile/Profile';
import user from '../user.json';

import { Statistics } from '../Statistics/Statistics';
import data from '../data.json';

import { FriendList } from '../FriendList/FriendList';
import friends from '../friends.json';

import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

function App() {
  return <Profile user={user}></Profile>;
}

export default App;
