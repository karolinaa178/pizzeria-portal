import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchChangeStatusInAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchChangeStatus: (row) => dispatch(fetchChangeStatusInAPI(row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
