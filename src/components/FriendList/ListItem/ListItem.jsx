import PropTypes from 'prop-types'; 
import css from "./list-item.module.css"
const ListItem = ({avatar, name, isOnline}) => {
    const statusOnline = isOnline ? `${css.label} ${css.green}` : css.label;
        console.log(statusOnline);
       return (<li className={css.list} >
        <span className={statusOnline}></span>
        <img
      src={avatar}
      alt="User avatar"
    className={css.avatar}
    />
        <span className={css.name}>{name}</span>
        
    </li>)
}
export default ListItem;

ListItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
   }))
    
}