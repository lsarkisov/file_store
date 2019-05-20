import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import FontAwesome from "react-fontawesome";
import { getFileExtention } from "../../utils/file";

const Controlls = ({ onEdit, onDelete }) => (
  <span className="files-list--controlls">
    <FontAwesome name="pencil" onClick={onEdit} />
    <FontAwesome name="trash" onClick={onDelete} />
  </span>
);

const EditField = ({ item, onChange }) => (
  <>
    <input type="text" placeholder={item.name} onChange={onChange} />
    <span className="warning">please, don't change file extention</span>
  </>
);

class FilesList extends Component {
  state = {
    files: [],
    isEditable: null,
    isDirty: false,
    isLoading: false,
  };

  componentDidMount() {
    this.props.getAllFilesStatrt();
  }

  componentDidUpdate() {
    const { files, isLoading } = this.props;
    
    if (files && files.length !== this.state.files.length) {
      this.setState({
        files,
      })
    }

    if (this.state.isLoading !== isLoading) {
      this.setState({ isLoading });
    }
  }

  onEdit = id => {
    const { files, isEditable, isDirty } = this.state;
    if (isDirty) {
      let file = files.filter(file => file.id === id)[0];
      this.props.updateFileStart({
        fileId: file.id,
        newName: file.imageName,
      })
    }
    this.setState({
      isEditable: isEditable === id ? null : id,
      isLoading: isEditable === id,
      isDirty: false,
    });
  };

  onDelete = id => {
    this.setState(state => {
      let foundItem = null;

      state.files.forEach((item, index) => {
        if (item.id === id) {
          foundItem = index;
          this.props.deleteFileStart(id);
        }
      });

      if (foundItem !== null) {
        state.files.splice(foundItem, 1);
      }
      return state;
    });
  };

  onChange = (e, file) => {
    const { value } = e.target;

    this.setState(state => {
      state.files.map(item => {
        if (item.id === file.id) {
          item.imageName = value + '.' + getFileExtention(file.imageType).ext;
        }
        return item;
      });
      state.isDirty = true;
      return state;
    });
  };

  render() {
    const { files, isEditable, isLoading } = this.state;
    return (
      <div className="files-list">
        {isLoading && <FontAwesome name="spinner" className="spinner" />}
        {files.length > 0 && (
          <ListGroup>
            {files.map(file => (
              <ListGroupItem key={file.id}>
                <p><strong>Name: </strong> {isEditable === file.id ? (
                  <EditField
                    item={getFileExtention(file.imageName)}
                    onChange={e => this.onChange(e, file)}
                  />
                ) : (
                  file.imageName
                )}</p>
                <p className="img"><img src={file.base} alt={file.imageName} /></p>
                <p><strong>Type: </strong> {file.imageType}</p>
                <p><strong>Size: </strong> {file.size}</p>
                <Controlls
                  onEdit={() => this.onEdit(file.id)}
                  onDelete={() => this.onDelete(file.id)}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default FilesList;
