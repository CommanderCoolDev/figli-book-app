import { ON_AUTH, OFF_AUTH } from '../constants/loading-constants';

export const onAuth = () => ({
  type: ON_AUTH,
});
export const offAuth = () => ({
  type: OFF_AUTH,
});
