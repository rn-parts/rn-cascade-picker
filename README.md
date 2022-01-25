# rn-cascade-picker

A cascade picker component written in pure JavaScript for React Native

[![Latest Version on NPM](https://img.shields.io/npm/v/rn-cascade-picker.svg?style=flat-square)](https://npmjs.com/package/rn-cascade-picker)
[![npm](https://img.shields.io/npm/dt/rn-cascade-picker.svg?style=flat-square)](https://www.npmjs.com/package/rn-cascade-picker)

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

```js
// example
import CascadePicker from 'rn-cascade-picker';

export default function App() {
  render() {
      return (
        <CascadePicker
          data={[]}
          value={[]}
          onCancel={() => {}}
          onConfirm={(val) => {}}
        />
    )
  }
}
```

<img alt="demo gif" src="https://user-images.githubusercontent.com/11376339/150460426-5b1c2e76-d7f7-48e1-ad22-f3a0cd3e0a8e.gif" width="30%" height="30%">

### Contributing

If you want to add some features, feel free to submit PR.
