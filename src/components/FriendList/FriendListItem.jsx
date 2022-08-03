export const FriendListItem = (friends) => {
    return (friends.map(friend => (<li>
        <span>{ friend.isOnline }</span>
  <img src={ friend.avatar } alt="User avatar" width="48" />
        <p>{ friend.isOnline }</p>
</li>)))
}