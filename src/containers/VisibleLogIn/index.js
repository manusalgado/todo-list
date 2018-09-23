import { reduxForm } from 'redux-form';
import LogIn from './../../components/LogIn';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from './../../actions';


const mapStateToProps = state => ({
  loading: state.authorizeUser.loading,
  authorize: state.authorizeUser.authorize
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (fields) => {
    dispatch(login(fields)).
      then(authorize => {
        if(authorize) {
          ownProps.history.push('/todos');
        }
      });
  }
});

const withForm = reduxForm({
  form: 'logInValidationForm'
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withForm
)(LogIn);