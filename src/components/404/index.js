import {compose, lifecycle} from 'recompose';
import Page404 from './404';
import {history} from '../../store/store';

const enhance = compose(
	lifecycle({
		componentDidMount(){
			setTimeout(() => history.push('/'), 10000)
		}
	})
);

export default enhance(Page404);