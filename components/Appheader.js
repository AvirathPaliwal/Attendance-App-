import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>SCHOOL ATTENDANCE APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#00539CFF',
    marginTop:-1,
  },
  text:{
    color: '#FFD662FF',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

