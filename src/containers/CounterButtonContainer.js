import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';
import CounterButton from '../components/CounterButton';

function mapDispatchToProps(dispatch) {
  return {
    increase: () => {
      dispatch(increaseCounter());
    },
    decrease: () => {
      dispatch(decreaseCounter());
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CounterButton);
