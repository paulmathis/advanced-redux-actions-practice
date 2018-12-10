import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import Modal from '../components/Modal';

//map a prop called text to the state specialText
function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: (bool) => {
      dispatch(setIsLoading(bool));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
