import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { pickerItemStyles } from "./styles";

/**
 * 选择器的某一子项
 */
export default class PickerItem extends PureComponent {
  render() {
    return (
      <View style={[pickerItemStyles.container, { height: this.props.height }]}>
        <Text style={pickerItemStyles.label}>{this.props.label || ""}</Text>
      </View>
    );
  }
}
