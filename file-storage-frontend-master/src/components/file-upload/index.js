import React, { Component } from "react";
import DropZone from "../../containers/file-upload/dropzone";
import FilesList from "../../containers/file-upload/files-list";

class FileUpload extends Component {
  render() {
    return (
      <>
        <DropZone />
        <FilesList />
      </>
    );
  }
}

export default FileUpload;
