import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View, 
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [count, setCount] = useState(0);

  const name = "count";

  useEffect(() => {
    setCount(0);
  }, []);

  const CountButton = ({text, onPress}: {text: string, onPress: () => void}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={{ 
          fontSize: 48,
          padding: 30
        }}>{text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.containter}>
      <ScrollView>
        <View>
          <Text style={styles.react}> {name} </Text>
          <View style= {{ 
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
            <CountButton text="+" onPress={() => setCount(count + 1)} />
            <CountButton text="-" onPress={() => setCount(count - 1)} />
          </View>
          <Text style={{alignSelf: 'center', fontSize: 32}}>{count}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: { 
    flex: 1,
    backgroundColor: '#fff',
  },
   react: {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 48,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
   }
});

export default App;
