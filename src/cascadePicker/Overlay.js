import React, {PureComponent} from 'react';
import {View, PanResponder, Dimensions} from 'react-native';
import {overlayStyles, siblingStyles} from './styles';

const SCRREN_WIDTH = Dimensions.get('window').width;

/**
 * 遮罩
 */
export default class Overlay extends PureComponent {
  constructor(props) {
    super(props);

    // 创建响应者处理器
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this.onPanResponderBegin,
      onPanResponderRelease: this.onPanResponderEnd,
      onPanResponderTerminate: this.onPanResponderEnd,
    });

    // 触摸的选择器的索引
    this.pickerIndex = 0;
  }

  /**
   * 响应开始时
   */
  onPanResponderBegin = (evt, {x0, dy}) => {
    let {pickerCount, onSlide} = this.props,
      offsetIndex = Math.floor(x0 / (SCRREN_WIDTH / pickerCount));
    offsetIndex == pickerCount && offsetIndex--;
    this.pickerIndex = offsetIndex;
    onSlide && onSlide(this.pickerIndex, dy);
  };

  /**
   * 响应结束时
   */
  onPanResponderEnd = (evt, {dy}) => {
    let {itemHeight, onSlideEnd} = this.props,
      offsetIndex = Math.round(dy / itemHeight);
    onSlideEnd && onSlideEnd(this.pickerIndex, offsetIndex);
  };

  render() {
    let {itemHeight} = this.props,
      itemStyle = [overlayStyles.item, {height: itemHeight}];
    return (
      <View style={overlayStyles.container} {...this._panResponder.panHandlers}>
        <View style={[siblingStyles.vertical, overlayStyles.beyond]} />
        <View style={[overlayStyles.offset2, ...itemStyle]} />
        <View style={[overlayStyles.offset1, ...itemStyle]} />
        <View style={[overlayStyles.offset0, ...itemStyle]} />
        <View style={[overlayStyles.offset1, ...itemStyle]} />
        <View style={[overlayStyles.offset2, ...itemStyle]} />
        <View style={[siblingStyles.vertical, overlayStyles.beyond]} />
      </View>
    );
  }
}
