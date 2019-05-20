import { connect } from 'react-redux';
import FilesList from '../../components/file-upload/files-list';
import { getAllFilesStatrt, updateFileStart, deleteFileStart } from '../../actions/file-upload';

const mapStateToProps = (state, ownProps) => {
  const { files, isLoading } = state.fileUpload;

  return {
    files,
    isLoading,
  ...ownProps,
}};

const mapDispatchToProps = { getAllFilesStatrt, updateFileStart, deleteFileStart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilesList);