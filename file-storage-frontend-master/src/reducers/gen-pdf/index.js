import * as types from "../../const/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GEN_PDF_START:
      return {
        ...state,
        isGenerating: true
      };
    case types.GEN_PDF_SUCCESS:
      console.log('REDUCER', action.payload)
      return {
        ...state,
        isGenerating: false,
        pdf: action.payload,
        pdfError: false
      };
    case types.GET_ALL_FILES_ERROR:
      return {
        ...state,
        isGenerating: false,
        pdf: null,
        pdfError: true
      };
    default:
      return state;
  }
};
