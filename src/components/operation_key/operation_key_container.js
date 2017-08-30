import { connect } from 'react-redux';
import OperationKey from './operation_key';
// import { setScreen } from '../../actions/screen_actions';
import { setOperation, evaluate } from '../../actions/screen_actions';

const mapStateToProps = state => ({
  typing: state.screenDisplay.typing
});

const mapDispatchToProps = (dispatch) => ({
  setOperation: (operation) => dispatch(setOperation(operation)),
  evaluate: () => dispatch(evaluate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationKey);
