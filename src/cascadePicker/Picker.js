import React, {PureComponent} from 'react';
import {Animated} from 'react-native';
import PickerItem from './PickerItem';
import {pickerStyles} from './styles';

/**
 * 选择器
 */
export default class Picker extends PureComponent {
  render() {
    let {items, top, pickedIndex, itemHeight} = this.props;

    /**
     * 整理子项集合
     * 1) 使其上下对称
     * 2）使选中项居中显示
     */
    while (pickedIndex < Math.ceil((items.length - 1) / 2)) {
      items.unshift({text: ''});
      pickedIndex++;
    }
    while (pickedIndex > Math.floor((items.length - 1) / 2)) {
      items.push({text: ''});
    }
    while (items.length < 5) {
      items.unshift({text: ''});
      items.push({text: ''});
      pickedIndex++;
    }

    return (
      <Animated.View style={[pickerStyles.container, {top}]} useNativeDriver={true}>
        {items.map((item, index) => (
          <PickerItem key={index} text={item.text} height={itemHeight} />
        ))}
      </Animated.View>
    );
  }
}
