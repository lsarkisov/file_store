import { combineReducers } from 'redux';
import fileUpload from './file-upload';
import genPdf from './gen-pdf';

const reducers = combineReducers({
  fileUpload,
  genPdf,
});

export default reducers;