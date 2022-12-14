import PropTypes from 'prop-types';
import { StatisticsList, StatisticsSection } from './Statistics.styled';
import { SLItem } from './StatisticsListIte';

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <StatisticsList className="stat-list">
        {stats.map(el => (
          <SLItem key={el.id} label={el.label} percentage={el.percentage}></SLItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
