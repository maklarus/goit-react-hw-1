import css from './FriendList.module.css'

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendsListItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  )
}
