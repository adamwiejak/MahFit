export const required = {
  required: { value: true, message: "This field is reqiured" },
};

export const nameRegEx = {
  minLength: {
    value: 3,
    message: "This fild should be three characters long at least",
  },
};

export const emailRegEx = {
  pattern: {
    value: /^[\w-\.]+@[\w-]+\.+[\w-]{2,4}$/,
    message: "Invalid email adress",
  },
};

export const passwordRegEx = {
  pattern: {
    value: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*./-]).{8,}$/,
    message:
      "Need to be at least 8 characters, contain at least one number, one letter and one special character",
  },
};
