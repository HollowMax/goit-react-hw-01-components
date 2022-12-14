import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 500px;

  margin: 0 auto;

  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;

  padding: 0;

  list-style: none;
`;

export const StatisticsListItem = styled.li`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
