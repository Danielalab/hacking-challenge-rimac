export const eventHandler = (setStateCallback) => (value) => { setStateCallback(value); };

export default {
  eventHandler,
};
