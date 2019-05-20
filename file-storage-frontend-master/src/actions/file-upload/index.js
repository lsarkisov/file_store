import * as types from "../../const/actions";

/**
 * Get all files
 */

export const getAllFilesStatrt = () => {
  return {
    type: types.GET_ALL_FILES_START,
    payload: null,
  }
}

export const getAllFilesSuccess = payload => {
  return {
    type: types.GET_ALL_FILES_SUCCESS,
    payload,
  }
}

export const getAllFilesError = error => {
  return {
    type: types.GET_ALL_FILES_ERROR,
    error,
  }
}

/** 
 * File upload
*/
export const uploadFileStart = payload => {
  return {
    type: types.UPLOAD_FILE_START,
    payload,
  };
};

export const uploadFileFetched = payload => {
  return {
    type: types.UPLOAD_FILE_SUCCESS,
    payload,
  };
};

export const uploadFileError = error => {
  return {
    type: types.UPLOAD_FILE_ERROR,
    error,
  };
};

/** 
 * Update file
*/
export const updateFileStart = value => {
  return {
    type: types.UPDATE_FILE_START,
    value,
  };
};

export const updateFileSuccess = payload => {
  return {
    type: types.UPDATE_FILE_SUCCESS,
    payload,
  };
};

export const updateFileError = error => {
  return {
    type: types.UPDATE_FILE_ERROR,
    error,
  };
};

/** 
 * Delete file
*/
export const deleteFileStart = fileId => {
  return {
    type: types.DELETE_FILE_START,
    fileId,
  };
};

export const deleteFileSuccess = payload => {
  return {
    type: types.DELETE_FILE_SUCCESS,
    payload,
  };
};

export const deleteFileError = error => {
  return {
    type: types.DELETE_FILE_ERROR,
    error,
  };
};
