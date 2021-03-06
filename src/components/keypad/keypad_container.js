import { connect } from 'react-redux';
import Keypad from './keypad';
import { pushDigit, setOperation } from '../../actions/screen_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
  pushDigit: (digit) => dispatch(pushDigit(digit)),
  setOperation: (operation) => dispatch(setOperation(operation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);
