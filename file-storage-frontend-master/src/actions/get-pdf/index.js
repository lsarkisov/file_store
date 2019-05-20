import * as types from "../../const/actions";

/**
 * Generate pdf
 */

export const getPdfStatrt = payload => {
  return {
    type: types.GEN_PDF_START,
    payload,
  }
}

export const genPdfSuccess = payload => {
  return {
    type: types.GEN_PDF_SUCCESS,
    payload,
  }
}

export const genPdfError = error => {
  return {
    type: types.GEN_PDF_ERROR,
    error,
  }
}
