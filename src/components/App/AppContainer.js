import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Component from './App';
import * as actions from './AppActions';

function mapStateToProps(state) {
    return state.app.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)