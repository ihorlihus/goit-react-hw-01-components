import PropTypes from "prop-types";
export const FriendList  = ({ friends, children }) => {
  return (<ul>
    {children}
</ul>)
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  children: PropTypes.array.isRequired
}