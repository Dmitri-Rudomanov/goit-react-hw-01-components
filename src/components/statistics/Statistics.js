import PropTypes from 'prop-types';
import s from "./Statistics.module.css"

export default function Statistics({ title, stats }) { 
    return (
    <section className={s.statistics}>
    {title&&<h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
        {stats.map(stat => { 
            return (
                <li key={stat.id} className={s.item} style={{ backgroundColor: getRandomColor() }}>
                    <span className={s.label}>{stat.label}-</span>
                    <span className={s.percentage}>{stat.percentage}%</span>
                </li>
            )
        })}
  </ul>
</section>
    )
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        })
    )
}