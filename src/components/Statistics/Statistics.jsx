import PropTypes from "prop-types";
export const Statistics = ({ title, stats }) => {
    return (<section>
        {title && (
            <h2>{title}</h2>
        )}
        <ul>
      {stats.map(data => (
    <li key={data.id}>
        <span>{data.label}</span>
        <span>{data.percentage}%</span>
    </li>
      ))}
    </ul>
</section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}