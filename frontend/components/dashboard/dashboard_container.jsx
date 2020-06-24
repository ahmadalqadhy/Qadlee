import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ session, entities }) => {
    return {
        currentUser: entities.users[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal('textform')),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);