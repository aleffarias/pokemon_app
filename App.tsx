import Providers from './src/context';
import AppNavigator from './src/navigation/navigationStack';

const App = () => {
  return (
    <Providers>
      <AppNavigator />
    </Providers>
  );
};

export default App;
