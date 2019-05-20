import React, { Component } from "react";

class PdfGen extends Component {
  state = {
    url: '',
  }

  componentDidUpldate() {
    console.log('PROPS', this.props);
  }

  onClick = () => {
    this.props.getPdfStatrt(this.state.url);
  }

  render() {
    return (
      <>
        <h2>Generate Pdf from Html</h2>
        <p>
          <input
            className="form-control"
            placeholder="http://example.com"
            onChange={e => this.setState({ url: e.target.value })}
          />
          <span className="btn btn-success" onClick={this.onClick}>Generage</span>
        </p>
      </>
    );
  }
}

export default PdfGen;
