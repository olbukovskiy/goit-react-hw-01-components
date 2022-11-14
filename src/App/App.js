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
  return (
    <Box width="768px" ml="auto" mr="auto">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </Box>
  );
}

export default App;
