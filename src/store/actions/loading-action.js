import { ON_LOADING, OFF_LOADING } from '../constants/loading-constants';

export const onLoading = () => ({
  type: ON_LOADING,
});
export const offLoading = () => ({
  type: OFF_LOADING,
});
