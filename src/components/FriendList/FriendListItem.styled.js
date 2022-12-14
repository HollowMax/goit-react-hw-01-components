import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  border-radius: 4px;
  padding: 5px 10px;
  margin-bottom: 10px;

  width: 150px;

  background-color: grey;

  & .status {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background-color: red;
  }
`;
