import PropTypes from 'prop-types';
import {
  StatisticsStats,
  StatTitle,
  StatItem,
  StatisticsWrap,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <StatTitle>{title}</StatTitle>}
      <StatisticsStats>
        {stats.map(data => (
          <StatItem key={data.id}>
            <span>{data.label}</span>
            <span>{data.percentage}%</span>
          </StatItem>
        ))}
      </StatisticsStats>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
