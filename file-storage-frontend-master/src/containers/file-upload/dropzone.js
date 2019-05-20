import { connect } from 'react-redux';
import DropZone from '../../components/file-upload/dropzone';
import { uploadFileStart } from '../../actions/file-upload';

const mapStateToProps = (state, ownProps) => {
  const { files } = state.fileUpload;
  return {
    files,
  ...ownProps,
}};

const mapDispatchToProps = { uploadFileStart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropZone);