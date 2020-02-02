import { connect } from 'react-redux';
import Buttons from '../components/button/Buttons';
import { addCount, minusCount, resetCount } from '../actions';

const mapDispatchToProps = dispatch => ({
    addToCount: payload => dispatch(addCount(payload)),
    minusToCount: payload => dispatch(minusCount(payload)),
    resetCount: () => dispatch(resetCount()),
})

export default connect(
    null,
    mapDispatchToProps
)(Buttons)