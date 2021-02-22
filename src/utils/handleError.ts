const handleError = (error: any) => {
  let message = '';

  if (error) {
    const err = error.response?.data?.msg;

    if (err) {
      message = err;

      if (message.includes('jwt expired')) {
        window.location.replace('/login');
      }
    }

    return message;
  }
};

export default handleError;
