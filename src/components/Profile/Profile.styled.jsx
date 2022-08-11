import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flow-root;
  width: 200px;
  margin-top: 20px;
  justify-items: center;
  background-color: #ffffff;
  ul {
    display: inline-flex;
    width: 100%;
    padding: 2px 6px;
  }
  li {
    width: calc(100% / 3);
  }
  span {
    display: flex;
    justify-content: center;
  }
`;

export const ProfileInfo = styled.div`
  display: grid;
  justify-items: center;
`;

export const ProfileInfoFoto = styled.img`
  margin-top: 16px;
  border-radius: 50%;
  background-color: #f0f8ff;
`;
