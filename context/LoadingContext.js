import React, { createContext, useContext, useState, useCallback } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = useCallback(() => {
    setLoadingCount((prevCount) => {
      console.log(`startLoading: current count is ${prevCount}, will increment to ${prevCount + 1}`);
      return prevCount + 1;
    });
  }, []);

  const stopLoading = useCallback(() => {
    setLoadingCount((prevCount) => {
      console.log(`stopLoading: current count is ${prevCount}, will decrement to ${Math.max(0, prevCount - 1)}`);
      return Math.max(0, prevCount - 1);
    });
  }, []);

  const isLoading = loadingCount > 0;

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

