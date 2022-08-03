export const Statistics = ({title, stats}) => {
    return (<section>
        {title && (
            <h2>{title}</h2>
        )}
        <ul>
      {stats.map(data => (
    <li>
        <span>{data.label}</span>
        <span>{data.percentage}%</span>
    </li>
      ))}
    </ul>
</section>)
}

