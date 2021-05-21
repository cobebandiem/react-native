export const emailValidator = (email, messageEmpty='', messageFormat='') => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email === "") {
    return {
      isValidate: false,
      message: messageEmpty
    }
  } else if (!regex.test(email.toLowerCase())) {
    return {
      isValidate: false,
      message: messageFormat
    }
  } else {
    return {
      isValidate: true,
      message: ''
    }
  }
}

export const emptyCheck = (text, nameMessage='', messageEndpoint='') => {
  if (text === "") {
    return {
      isValidate: false,
      message: `${nameMessage} ${messageEndpoint}`
    }
  } else {
    return {
      isValidate: true,
      message: ''
    }
  }
}