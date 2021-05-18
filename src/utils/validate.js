export const emailValidator = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email === "") {
    return {
      isValidate: false,
      message: 'Email không được bỏ trống!'
    }
  } else if (!regex.test(email.toLowerCase())) {
    return {
      isValidate: false,
      message: 'Email không đúng định dạng!'
    }
  } else {
    return {
      isValidate: true,
      message: ''
    }
  }
}

export const emptyCheck = (text, nameMessage) => {
  if (text === "") {
    return {
      isValidate: false,
      message: `${nameMessage} không được bỏ trống!`
    }
  } else {
    return {
      isValidate: true,
      message: ''
    }
  }
}