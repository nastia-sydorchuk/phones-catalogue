import React, { useMemo, useState } from 'react';
import { parseStorage } from '../../Helpers/functions/storage-helpers';
import { StorageItem } from '../../Helpers/types/StorageItem';

type CartContextType = {
  cart: number,
  setCart: React.Dispatch<React.SetStateAction<number>>
};

export const CartContext = React.createContext({} as CartContextType);

export const CartContextProvider:
React.FC<React.PropsWithChildren<React.ReactNode>>
= ({ children }) => {
  const parsedStorage = parseStorage('CartItems');
  const amount = parsedStorage.reduce(
    (a: number, b: StorageItem) => a + b.quantity, 0,
  );
  const [cart, setCart] = useState<number>(amount);
  const contextValue = useMemo(() => ({ cart, setCart }), [cart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
