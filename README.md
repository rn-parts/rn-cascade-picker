# rn-cascade-picker

A cascade picker component written in pure JavaScript for React Native

[![Latest Version on NPM](https://img.shields.io/npm/v/rn-cascade-picker.svg?style=flat-square)](https://npmjs.com/package/rn-cascade-picker)
[![npm](https://img.shields.io/npm/dm/rn-cascade-picker.svg?style=flat-square)](https://www.npmjs.com/package/rn-cascade-picker)
[![github issues](https://img.shields.io/github/issues/yorickshan/rn-cascade-picker.svg?style=flat-square)](https://github.com/meliorence/react-native-snap-carousel/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/yorickshan/rn-cascade-picker.svg?style=flat-square&colorB=44cc11)](https://github.com/meliorence/react-native-snap-carousel/issues?q=is%3Aissue+is%3Aclosed)

### Install

```sh
yarn add rn-cascade-picker
```

### Peer Dependencies

```json
"react": ">= 16.13.1",
"react-native": ">= 0.63.4"
```

### Props

| Prop             | Type                                     | Default | Description                                                                                          |
| ---------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| visible          | Boolean                                  | false   | determine whether Picker is visible or not                                                           |
| data             | `Array<{value, label, children: Array}>` | -       | data source                                                                                          |
| value            | Array                                    | -       | the value, the format is [value1, value2, value3], corresponds to the level value of the data source |
| cols             | Number                                   | `3`     | col numbers                                                                                          |
| title            | String                                   | -       | title                                                                                                |
| cancelText       | String                                   | `取消`  | cancel text                                                                                          |
| confirmText      | String                                   | `确定`  | confirm text                                                                                         |
| titleTextStyle   | Object                                   | -       | style of title text                                                                                  |
| cancelTextStyle  | Object                                   | -       | style of cancel text                                                                                 |
| confirmTextStyle | Object                                   | -       | style of confirm text                                                                                |
| onCancel         | (): void                                 | -       | cancel handler                                                                                       |
| onConfirm        | (val): void                              | -       | confirm handler                                                                                      |

### Usage

```sh
# demo
cd example
yarn
yarn ios
```

<img alt="demo png" src="https://user-images.githubusercontent.com/11376339/151309157-c2283dd2-f518-4c28-8949-cd818b460714.png" width="23%">

<img alt="demo gif" src="https://user-images.githubusercontent.com/11376339/151099982-24d8fac8-2aed-4c56-8bb6-65c37e2f5a57.gif" width="23%">

### Contributing

If you want to add some features, feel free to submit PR.
