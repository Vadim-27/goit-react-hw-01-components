import PropTypes from 'prop-types';
import css from "./statistics.module.css";
import { getRandomHexColor } from 'utilits/renderColor';

const Statistics = ({ title, items }) => {
    
       const elements = items.map(({id, label, percentage}) => <li key={id} style={{ backgroundColor: getRandomHexColor() }}  className={css.item}> 
      <span className="label">{label}</span>
        <span className={css.percentage}>{percentage}</span>
        
    </li>);
   
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.list}>
                {elements}
    
            </ul>
</section>
    )
}

export default Statistics;
Statistics.defaultProps = {
    items: []
}


Statistics.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
    }))
     
}