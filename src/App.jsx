import './App.css'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transaction from './transaction.json'
import friends from './friends.json'
import userData from './userData.json'

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transaction}></TransactionHistory>
    </>
  )
}
