import { connect } from 'react-redux';
import Keypad from './keypad';
import { pushDigit } from '../../actions/screen_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
  pushDigit: (digit) => dispatch(pushDigit(digit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);
