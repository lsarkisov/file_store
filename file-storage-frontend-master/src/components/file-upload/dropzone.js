import React from "react";
import FileBase64 from 'react-file-base64';

class DropZone extends React.Component {
  getFiles = images => {
    const imgs = [];
    images.forEach(image => {
      imgs.push({
        base: image.base64,
        imageName: image.name,
        imageType: image.type,
        size: parseInt(image.size, 10)
      });
    });
    this.setState({ images: imgs });
  }

  onDrop = e => {
    const { images } = this.state;
    this.props.uploadFileStart(images);
    this.setState({ images: null });
    e.preventDefault();
    e.target.reset();
  };

  render() {
    return (
      <>
        <h2>Upload Image</h2>
        <form onSubmit={this.onDrop}>
        <FileBase64
          multiple={true}
          onDone={this.getFiles}
        />
        <button>Save</button>
        </form>
      </>
    );
  }
}

export default DropZone;
