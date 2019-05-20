import { API_URL } from '../const/api';

const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function callApi(endpoint, header) {
  return fetch(`${API_URL}${endpoint}`, header)
  .then(response => response.json())
  .catch(error => error);
}

export const getAllFiles = body => callApi('/file/all/files', {
  method: 'get',
});

export const uploadFiles = body => callApi('/file/upload', {
  method: 'post',
  headers: jsonHeaders,
  body: JSON.stringify(body),
});

export const updateFile = body  => callApi('/file/update', {
  method: 'put',
  body,
});

export const deleteFile = body => callApi('/file/delete', {
  method: 'delete',
  body,
});

export const genPdf = body => callApi('/pdf/gen', {
  method: 'post',
  headers: jsonHeaders,
  body: JSON.stringify(body),
});