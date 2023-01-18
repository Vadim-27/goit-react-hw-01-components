import PropTypes from 'prop-types';
import css from "./stats.module.css"

const Stats = ({followers, views, likes}) => {
    return (
        <ul className={css.stats}>
    <li className={css.list}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.list}> 
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.list}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
    )
}
export default Stats;

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}