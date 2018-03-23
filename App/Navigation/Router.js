import React from "react";
import { Animated, Easing, Image, View } from "react-native";
import {
  StackNavigator,
  SwitchNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from "react-navigation";
import NavStyles from "./Styles/NavigationContainerStyle";
import { Colors, Metrics, Images } from "../Themes";
import Home1Screen from "../../ignite/DevScreens/Home1Screen";
import Home2Screen from "../../ignite/DevScreens/Home2Screen";
import Schedules1Screen from "../../ignite/DevScreens/Schedules1Screen";
import Schedules2Screen from "../../ignite/DevScreens/Schedules2Screen";
import AlertsScreen from "../../ignite/DevScreens/AlertsScreen";
import MessagesListScreen from "../../ignite/DevScreens/MessagesListScreen";
import MessageDetailScreen from "../../ignite/DevScreens/MessageDetailScreen";
import AlertDetailScreen from "../../ignite/DevScreens/AlertDetailScreen";
import SettingsScreen from "../../ignite/DevScreens/SettingsScreen";
import LandingScreen from "../../ignite/DevScreens/LandingScreen";
import TimeSheetsScreen from "../../ignite/DevScreens/TimeSheetsScreen";

import TabIcon from "../Components/TabIcon";

const NAVIGATOR_OPTIONS = {
  headerStyle: {
    ...NavStyles.navBar
  },
  headerTitleStyle: {
    alignSelf: "center"
  },
  headerTintColor: Colors.snow,
  headerBackTitle: null,
  headerRight: <View />
};

const TOP_TAB_BAR_OPTIONS = {
  inactiveTintColor: Colors.panther,
  activeTintColor: Colors.facebook,
  indicatorStyle: {
    backgroundColor: Colors.facebook,
    height: 4,
  },
  tabStyle: {
    margin: 0,
    padding: 0,
    paddingBottom: Metrics.smallMargin,
    paddingTop: 0
  },
  style: {
    backgroundColor: "transparent",
    margin: 0,
    paddingTop: Metrics.smallMargin,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    paddingBottom: 0
  },
  labelStyle: {
    fontWeight: "700",
    fontSize: 12,
    padding: 0,
    margin: 0,
    marginTop: 11,
    marginBottom: 4
  },
  pressOpacity: 0.5,
  showIcon: true
};

export const HomeTabScreens = StackNavigator(
  {
    Home1Screen: {
      screen: Home1Screen,
      navigationOptions: {
        headerTitle: "Dashboard"
      }
    },
    Home2Screen: {
      screen: Home2Screen,
      navigationOptions: {
        headerTitle: "Dashboard Level 2"
      }
    }
  },
  {
    headerMode: "float",
    headerTransitionPreset: "uikit",
    navigationOptions: NAVIGATOR_OPTIONS
  }
);

export const SchedulesScreens = StackNavigator(
  {
    Schedules1Screen: {
      screen: Schedules1Screen,
      navigationOptions: { headerTitle: "Schedules" }
    },
    Schedules2Screen: {
      screen: Schedules2Screen,
      navigationOptions: { headerTitle: "Schedule Detail" }
    }
  },
  {
    headerMode: "float",
    headerTransitionPreset: "uikit",
    navigationOptions: NAVIGATOR_OPTIONS
  }
);

export const SettingTabsScreens = StackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: { headerTitle: "Settings" }
    }
  },
  {
    headerMode: "float",
    headerTransitionPreset: "uikit",
    navigationOptions: NAVIGATOR_OPTIONS
  }
);

export const TimeSheetsTabsScreens = StackNavigator(
  {
    Settings: {
      screen: TimeSheetsScreen,
      navigationOptions: { headerTitle: "Time Sheets" }
    }
  },
  {
    headerMode: "float",
    headerTransitionPreset: "uikit",
    navigationOptions: NAVIGATOR_OPTIONS
  }
);

export const MessagesTabsScreens = TabNavigator(
  {
    AlertsScreen: {
      screen: AlertsScreen,
      navigationOptions: {
        tabBarLabel: "Alerts",
        tabBarIcon: props => <TabIcon name="notifications-active" {...props} />,
        tabBarStyle: NavStyles.tabBarStyle
      }
    },
    MessagesListScreen: {
      screen: MessagesListScreen,
      navigationOptions: {
        tabBarLabel: "Messages",
        tabBarIcon: props => <TabIcon name="message" {...props} />,
        tabBarStyle: NavStyles.tabBarStyle
      }
    }
  },
  {
    ...TabNavigator.Presets.AndroidTopTabs,
    lazy: false,
    tabBarOptions: TOP_TAB_BAR_OPTIONS
  }
);

export const MessagesScreen = StackNavigator(
  {
    Activity: {
      screen: MessagesTabsScreens,
      navigationOptions: {
        headerTitle: "Your Notifications"
      }
    },
    MessageDetail: {
      screen: MessageDetailScreen,
      navigationOptions: {
      }
    },
    AlertDetail: {
      screen: AlertDetailScreen,
      navigationOptions: {
      }
    }
  },
  {
    headerMode: "float",
    headerTransitionPreset: "uikit",
    navigationOptions: NAVIGATOR_OPTIONS
  }
);

export const TabsNavigatorExample = TabNavigator(
  {
    HomeTabScreens: {
      screen: HomeTabScreens,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: props => <TabIcon name="home" {...props} />,
        tabBarStyle: NavStyles.tabBarStyle
      }
    },
    MessagesScreen: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarLabel: "Notifications",
        tabBarIcon: props => <TabIcon name="message" {...props} />,
        tabBarStyle: NavStyles.tabBarStyle
      }
    },
    SchedulesTab: {
      screen: SchedulesScreens,
      navigationOptions: {
        tabBarLabel: "Schedules",
        tabBarIcon: props => <TabIcon name="schedule" {...props} />,
        tabBarStyle: NavStyles.tabBarStyle
      }
    },
    SettingsTab: {
      screen: TimeSheetsTabsScreens,
      navigationOptions: {
        tabBarLabel: "Time Sheets",
        tabBarIcon: props => <TabIcon name="settings" {...props} />,
        tabBarStyle: NavStyles.tabBarStyle
      }
    },
    MoreOptions: {
      screen: SettingTabsScreens,
      navigationOptions: {
        tabBarLabel: "More",
        tabBarIcon: props => <TabIcon name="more" {...props} />,
        tabBarStyle: NavStyles.tabBarStyle
      }
    }
  },
  {
    tabBarOptions: {
      style: NavStyles.bottomTabBarStyle,
      activeTintColor: Colors.panther,
      inactiveTintColor: Colors.frost
    },
    lazy: false,
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const createRootNavigator = () => {
  return SwitchNavigator(
    {
      TabsNavigatorExample: {
        screen: TabsNavigatorExample,
        navigationOptions: {}
      },
      // DrawerNavigatorExample: {
      //   screen: SignedOutNavigator,
      //   navigationOptions: {}
      // },
      LandingScreen: {
        screen: LandingScreen,
        navigationOptions: {}
      }
    },
    {
      headerMode: "none",
      initialRouteName: "LandingScreen",
      cardStyle: {
        backgroundColor: Colors.panther
      }
    }
  );
};
