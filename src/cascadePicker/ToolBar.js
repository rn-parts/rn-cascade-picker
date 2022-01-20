import React, { PureComponent } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { toolbarStyles } from "./styles";

/**
 * 工具条
 */
export default class ToolBar extends PureComponent {
  render() {
    return (
      <View style={toolbarStyles.container}>
        <TouchableOpacity
          style={toolbarStyles.button}
          activeOpacity={0.9}
          onPress={this.props.onCancel}
        >
          <Text style={[toolbarStyles.cancelText, this.props.cancelTextStyle]}>
            {this.props.cancelText || "取消"}
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={[toolbarStyles.title, this.props.titleTextStyle]}>
            {this.props.title || ""}
          </Text>
        </View>
        <TouchableOpacity
          style={toolbarStyles.button}
          activeOpacity={0.9}
          onPress={this.props.onConfirm}
        >
          <Text
            style={[toolbarStyles.confirmText, this.props.confirmTextStyle]}
          >
            {this.props.confirmText || "确认"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
