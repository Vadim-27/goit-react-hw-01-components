import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';
import css from './freriend-list.module.css';

const FriendsCard = ({ items }) => {
  const elemets = items.map(item => <ListItem key={item.id} {...item} />);

  return <ul className={css.friendlist}>{elemets}</ul>;
};

export default FriendsCard;

FriendsCard.defautProps = {
  friends: [],
};

FriendsCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
