import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class GreenButton extends Component{
 render(){
   return(
<Button color = 'green' title = 'Click Here!'></Button>
   )
 } 
}

export default class App extends Component {
  render() {
    return (
      <View style = {{marginTop:500}}>
        <GreenButton/>
        <Text >Hello World!</Text>
        </View>
    );
  }
}