import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ColorScreen from './src/screens/ColorScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentsScreen: ComponentsScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
