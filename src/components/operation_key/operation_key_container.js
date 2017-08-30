import { connect } from 'react-redux';
import OperationKey from './operation_key';
// import { setScreen } from '../../actions/screen_actions';
import { setOperation } from '../../actions/screen_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
  setOperation: (operation) => dispatch(setOperation(operation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationKey);
