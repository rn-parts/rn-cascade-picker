import React, { Component } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import ToolBar from "./ToolBar";
import Overlay from "./Overlay";
import Picker from "./Picker";
import { mainStyles, siblingStyles, pickerItemHeight } from "./styles";

/**
 * 级联选择器
 */
export default class CascadePicker extends Component {
  constructor(props) {
    super(props);

    this.pickerParams = [];

    // 初始化state
    this.state = { pickedValues: props.value };
    for (let i = 0; i < props.value.length; i++) {
      this.state[`top${i}`] = new Animated.Value(0);
    }
  }

  /**
   * 滑动时回调
   */
  onSlide = (pickerIndex, offsetY) => {
    Animated.event([null, { offsetY: this.getTop(pickerIndex) }])(null, {
      offsetY,
    });
  };

  /**
   * 滑动结束时回调
   */
  onSlideEnd = (pickerIndex, offsetIndex) => {
    let { pickedValues } = this.state,
      { pickedIndex, values } = this.pickerParams[pickerIndex],
      oldPickedIndex = pickedIndex,
      maxPickerIndex = this.pickerParams.length - 1;

    pickedIndex -= offsetIndex;
    if (pickedIndex < 0) {
      pickedIndex = 0;
    } else if (pickedIndex > values.length - 1) {
      pickedIndex = values.length - 1;
    }

    // 设置选中项
    pickedValues[pickerIndex] = values[pickedIndex];

    // 若选中项的索引发生变化，则检查其子项选中项是否存在，若不存在，则重置为最后一项
    if (pickedIndex != oldPickedIndex && pickerIndex < maxPickerIndex) {
      let pIndex = 0,
        items = this.props.data;

      while (pIndex <= maxPickerIndex) {
        let pickedItem = items.filter(
          (t) => t.value == pickedValues[pIndex]
        )[0];

        if (pIndex > pickerIndex && !pickedItem) {
          pickedItem = items[items.length - 1];
        }

        pickedValues[pIndex] = pickedItem.value;
        items = pickedItem.children || [];

        pIndex++;
      }
    }

    this.setState({ pickedValues });
    Animated.timing(this.getTop(pickerIndex), {
      toValue: 0,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  /**
   * 获取选择器距顶部位移
   */
  getTop = (index) => this.state[`top${index}`];

  render() {
    let { data, itemHeight = pickerItemHeight } = this.props,
      { pickedValues } = this.state,
      pickers = [],
      overlay = null;

    // 组装Picker
    for (let index = 0; index < pickedValues.length; index++) {
      let pickedValue = pickedValues[index],
        pickedIndex = data.findIndex((d) => d.value == pickedValue);

      pickedIndex < 0 && (pickedIndex = 0);
      pickers.push(
        <Picker
          key={index}
          items={data.concat()}
          top={this.getTop(index)}
          {...{ pickedIndex, itemHeight }}
        />
      );

      this.pickerParams[index] = {
        pickedIndex,
        values: data.map((d) => d.value),
      };

      data = (data.filter((d) => d.value == pickedValue)[0] || {}).children;
      if (!data || data.length == 0) {
        break;
      }
    }

    if (pickers.length > 0) {
      // 渲染遮罩
      overlay = (
        <Overlay
          pickerCount={pickers.length}
          itemHeight={itemHeight}
          onSlide={this.onSlide}
          onSlideEnd={this.onSlideEnd}
        />
      );
    }

    return (
      <View style={mainStyles.container}>
        <TouchableOpacity
          style={siblingStyles.vertical}
          onPress={this.props.onCancel}
        />
        <View style={mainStyles.popbox}>
          <ToolBar
            cancelText={this.props.cancelText}
            onCancel={this.props.onCancel}
            confirmText={this.props.confirmText}
            onConfirm={() =>
              this.props.onConfirm &&
              this.props.onConfirm(this.state.pickedValues)
            }
          />
          <View style={mainStyles.box}>
            {pickers}
            {overlay}
          </View>
        </View>
      </View>
    );
  }
}
