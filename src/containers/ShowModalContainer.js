import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import ShowModal from '../components/ShowModal';

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: (temp) => {
      dispatch(setIsLoading(temp));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ShowModal);
