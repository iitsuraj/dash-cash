import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// Import Screen Here
import TabNavigator from "./BottomNav";
import AuthScreen from "../screen/auth/Login";

const MainNavigator = createStackNavigator({
  // Login: {
  //   screen: AuthScreen,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(MainNavigator);
