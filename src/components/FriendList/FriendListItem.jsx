export const FriendListItem = ({friends}) => {
    return (friends.map(friend => (<li key={friend.id}>
        <span>{ friend.isOnline && "online"}</span>
  <img src={ friend.avatar } alt="User avatar" width="48" />
        <p>{ friend.name }</p>
</li>)))
}