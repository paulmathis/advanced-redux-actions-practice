import { connect } from 'react-redux';
import { addUser, removeUser } from '../actions';
import UserButtons from '../components/UserButtons';

function mapDispatchToProps(dispatch) {
  return {
    add: (user) => {
      dispatch(addUser(user));
    },
    remove: () => {
      dispatch(removeUser());
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserButtons);
