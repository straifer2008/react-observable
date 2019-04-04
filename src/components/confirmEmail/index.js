import {compose, lifecycle} from 'recompose';
import confirmEmail from './confirmEmail';
import {connect} from 'react-redux';
import {confirmEmailStart} from '../../store/auth/actions';
import {history} from '../../store/store';

const mapDispatchToProps = ({
	confirmEmailStart
});

const enhance = compose(
	connect(null, mapDispatchToProps),
	lifecycle({
		componentDidMount() {
			const { match: { params }, confirmEmailStart } = this.props;
			confirmEmailStart({registrationToken: params.token});
			setTimeout(() => history.push('./'), 3000);
		}
	})
);

export default enhance(confirmEmail);
