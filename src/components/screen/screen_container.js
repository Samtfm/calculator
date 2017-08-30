import { connect } from 'react-redux';
import Screen from './screen';
// import { pushDigit } from '../../actions/screen_actions';

const mapStateToProps = state => ({
  screenDisplay: state.screenDisplay.number
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);
