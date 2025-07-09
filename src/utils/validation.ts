import validator from "validator";

//  NOTIFICATION - Use only under actions for each specific feature do not pollute the core / domain

const isEmail = (email: string): boolean => validator.isEmail(email);

export { isEmail };
