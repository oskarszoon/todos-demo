import { Meteor } from 'meteor/meteor';

const { apiUrl } = Meteor.settings.public;

export const todosUrl = `${apiUrl}/todos`;

let authToken = '';
export const setAuthToken = (token) => {
  authToken = token;
};
export const getAuthToken = () => {
  return authToken;
};
