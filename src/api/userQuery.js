const apiUrl = 'https://jsonplaceholder.typicode.com';

export const getUserData = () => (
  fetch(`${apiUrl}/users/4`)
    .then((response) => response.json())
    .then(({ id, name }) => ({ id, name }))
);

export default {
  getUserData,
};
