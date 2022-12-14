import PropTypes from 'prop-types';
import { StatisticsList, StatisticsListItem, StatisticsSection } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <StatisticsList className="stat-list">
        {stats.map(el => (
          <StatisticsListItem
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
            key={el.id}
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
