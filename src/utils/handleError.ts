const handleError = (error: any) => {
  let message = '';

  if (error) {
    const err = error.response?.data?.error;

    if (err) {
      message = err;
    }

    return message;
  }
};

export default handleError;
