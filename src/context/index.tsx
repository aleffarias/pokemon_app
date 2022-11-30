import LoadingProvider from './LoadingContext';

const Providers = ({ children }: any) => {
  return <LoadingProvider>{children}</LoadingProvider>;
};

export default Providers;
