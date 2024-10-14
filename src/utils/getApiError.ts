export const getApiError = (err: any) => {
  if (err.message == 'Network Error') {
    return 'Something went wrong, please try again later';
  }
  return err.response.data.error.message;
};
