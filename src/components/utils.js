export const eventHandler = (setStateCallback) => (value) => { setStateCallback(value); };

export const getCurrentYear = () => new Date().getFullYear();

export default {
  eventHandler,
  getCurrentYear,
};
