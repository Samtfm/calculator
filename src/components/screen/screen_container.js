import { connect } from 'react-redux';
import Screen from './screen';
// import { pushDigit } from '../../actions/screen_actions';

const mapStateToProps = state => ({
  number: state.screenDisplay.number,
  operationName: state.screenDisplay.operationName

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);
