/**
 * example
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import CascadePicker from 'rn-cascade-picker';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {data} from './data.json';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [pickerVisible, setPickerVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="rn-cascade-picker">
              A <Text style={styles.highlight}>cascade picker</Text> component
              written in pure JavaScript for React Native
            </Section>
            <Button title="Press me" onPress={() => setPickerVisible(true)} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <CascadePicker
        visible={pickerVisible}
        data={data}
        cols={3}
        title="Example"
        cancelText="cancel"
        confirmText="confirm"
        value={['1', '2', '3']}
        onCancel={() => {
          setPickerVisible(false);
        }}
        onConfirm={val => {
          console.log(val);
          setPickerVisible(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
