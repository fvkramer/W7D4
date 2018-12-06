export const RECEIVE_ALL_ERRORS = 'RECEIVE_ALL_ERRORS';

export const receiveAllErrors = errors => ({
  type: RECEIVE_ALL_ERRORS,
  errors,
});
