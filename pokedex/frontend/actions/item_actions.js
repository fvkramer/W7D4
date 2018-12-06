export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';

export const receiveAllItems = item => ({
  type: RECEIVE_ALL_ITEMS,
  item,
});
