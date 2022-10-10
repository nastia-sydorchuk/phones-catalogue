import React, { useMemo, useState } from 'react';

type QueryContextType = {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>
};

export const QueryContext = React.createContext({} as QueryContextType);

export const QueryContextProvider:
React.FC<React.PropsWithChildren<React.ReactNode>>
= ({ children }) => {
  const [query, setQuery] = useState<string>('');
  const contextValue = useMemo(() => ({ query, setQuery }), [query]);

  return (
    <QueryContext.Provider value={contextValue}>
      {children}
    </QueryContext.Provider>
  );
};
