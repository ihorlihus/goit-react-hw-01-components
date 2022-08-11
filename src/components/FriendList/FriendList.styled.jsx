import styled from '@emotion/styled';

const setStatus = props => {
  if (props.isOnline) {
    return 'green';
  } else {
    return 'red';
  }
};

export const FriendListItemWrap = styled.li`
  display: flex;
  width: auto;
  align-items: center;
  gap: 8px;
  border: 1px solid #000000;
  padding: 0 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const FriendStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${setStatus};
`;
