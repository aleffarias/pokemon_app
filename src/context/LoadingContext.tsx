import { createContext, useContext, useState } from 'react';

interface LoadingProviderProps {
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  children?: React.ReactNode;
}

const LoadingContext = createContext<LoadingProviderProps>({} as LoadingProviderProps);

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
export const useLoading = () => useContext(LoadingContext);
