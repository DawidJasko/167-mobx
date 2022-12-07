import { useContext } from 'react';

import { StoreContext } from './StoreProvider';

export function useCommentsStore() {
  const rootStore = useContex(StoreContext);

  if (!rootStore) {
    throw new Error(
      ' Nie znaleziono RootStore, sprawdz czy masz Provider który go dostarcza'
    );
  }

  return rootStore.CommentsStore;
}
