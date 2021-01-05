const handleError = (error: any) => {
  let message = '';

  if (error) {
    const errors = error.response?.data?.errors;

    if (error.response?.status === 403) {
      window.location.replace('/signin');
    }

    if (Array.isArray(errors)) {
      message = errors[0].msg;
    } else if (errors?.msg) {
      message = errors.msg;
    } else if (error?.message) {
      message = error.message;
    }

    return message;
  }
};

export default handleError;
