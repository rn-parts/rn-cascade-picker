import React, { PureComponent } from "react";
import { Animated } from "react-native";
import PickerItem from "./PickerItem";
import { pickerStyles } from "./styles";

/**
 * 选择器
 */
export default class Picker extends PureComponent {
  render() {
    let { items, top, pickedIndex, itemHeight } = this.props;

    /**
     * 整理子项集合
     * 1) 使其上下对称
     * 2）使选中项居中显示
     */
    while (pickedIndex < Math.ceil((items.length - 1) / 2)) {
      items.unshift({ label: "" });
      pickedIndex++;
    }
    while (pickedIndex > Math.floor((items.length - 1) / 2)) {
      items.push({ label: "" });
    }
    while (items.length < 5) {
      items.unshift({ label: "" });
      items.push({ label: "" });
      pickedIndex++;
    }

    return (
      <Animated.View style={[pickerStyles.container, { top }]}>
        {items.map((item, index) => (
          <PickerItem key={index} label={item.label} height={itemHeight} />
        ))}
      </Animated.View>
    );
  }
}
