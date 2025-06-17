import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Switch,
  useColorScheme,
} from 'react-native';

function App() {
  const systemScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemScheme === 'dark');

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#222' : '#fff' },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        Hello World
      </Text>

      <View style={styles.switchRow}>
        <Text style={{ color: isDarkMode ? '#fff' : '#000', marginRight: 10 }}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
