import { StatisticsListItem } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export function SLItem({ label, percentage }) {
  return (
    <StatisticsListItem className="item" style={{ backgroundColor: getRandomHexColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticsListItem>
  );
}
