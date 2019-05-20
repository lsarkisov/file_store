import { connect } from 'react-redux';
import FileUpload from '../../components/file-upload';

const mapStateToProps = (state, ownProps) => {
  const { file } = state.fileUpload;
  return {
    file,
  ...ownProps,
}};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload);