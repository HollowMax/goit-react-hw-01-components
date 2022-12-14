import styled from 'styled-components';
import { color } from 'styled-system';

export const Box = styled.div`
  ${color};
  margin: 0 auto;

  width: 500px;
`;

export const Image = styled.div`
  height: 500px;
  width: 500px;

  border-radius: 100%;
  background-image: url(${({ src }) => src});
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const UserInfo = styled.p`
  font-size: 14px;
  text-align: center;

  color: #a2a2a2;
`;

export const Stats = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: space-around;

  padding: 0;

  background-color: #777;

  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-around;

  font-weight: bold;
  text-align: center;

  margin: 16px 0;
`;
