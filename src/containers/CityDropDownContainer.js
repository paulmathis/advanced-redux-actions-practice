import { connect } from 'react-redux';
import { setCurrentCity } from '../actions';
import CityDropDown from '../components/CityDropDown';

function mapDispatchToProps(dispatch) {
  return {
    set: (city) => {
      dispatch(setCurrentCity(city));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CityDropDown);
