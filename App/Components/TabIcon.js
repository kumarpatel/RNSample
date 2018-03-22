import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors, Metrics, Images } from "../Themes";

const TabIcon = props => {
  return (
    <Icon name={props.name} size={25} color={props.focused ? Colors.panther : Colors.frost} />
  );
};

export default TabIcon;
