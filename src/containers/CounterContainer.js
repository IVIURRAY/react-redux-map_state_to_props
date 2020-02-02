import { connect } from 'react-redux';
import Counter from '../components/counter/Counter';

const mapStateToProps = state => ({
    count: state.count
});

export default connect(
    mapStateToProps,
    null
)(Counter)