import { connect } from 'react-redux';
import PdfGen from '../../components/pdf-gen';
import { getPdfStatrt } from '../../actions/get-pdf';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    pdf: state.genPdf
  };
}

const mapDispatchToProps = {getPdfStatrt};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PdfGen);