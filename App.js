import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Pressable,Text } from 'react-native';
import axios from 'axios';

import { ImageBackground } from 'react-native';
import { Image } from 'react-native';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      Idno: '',
      Name: '',
      Mobile:'',
      Address:'',
      Vehicle:'',
      Parking:'',
      Subscription:'',
    };
  }
  
  OnhandleSubmit = () => {
    const { Idno, Name,Mobile,Address,Vehicle,Parking,Subscription } = this.state;
    Alert.alert ('Credentials', `${Idno} + ${Name} +${Mobile}+${Address}+${Vehicle}+${Parking}+${Subscription}`);
    
    if(Idno.length == 0){
      alert("Idno has left Blank!");
    }
    else if(Name.length ==0){
      alert("Name has left Blank!");
    }
    else if(Mobile.length == 0){
      alert("Mobile has left Blank!");
    }
    else if(Address.length == 0){
      alert("Address Has left Blank")
    }
    else if(Vehicle.length == 0){
      alert("Vehicle has left Blank")
    }
    else if(Parking.length == 0){
      alert("Parking has left Blank")
    }
    else if(Subscription.length == 0){
      alert("Subscription has left Blank")
    }
    
    else{
      const url = 'http://192.168.0.111:80/enquiry.php';
      let fData = new FormData();
      fData.append('Idno', Idno);
      fData.append('Name', Name);
      fData.append('Mobile', Mobile);
      fData.append('Address',Address);
      fData.append('Vehicle',Vehicle);
      fData.append('Parking',Parking);
      fData.append('Subscription',Subscription);
     axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));//
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.Idno}
          onChangeText={(Idno) => this.setState({ Idno })}
          placeholder={'Idno'}
          style={styles.input}
        />
        <TextInput
          value={this.state.Name}
          onChangeText={(Name) => this.setState({ Name })}
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.Mobile}
          style={styles.input}
          onChangeText={(Mobile) => this.setState({Mobile})}
          placeholder='Mobile'
        />
        <TextInput
          style={styles.input}
          placeholder='Address'
          value={this.state.Address}
          onChangeText={((Address)=> this.setState({Address}))}
        />
        <TextInput
          style={styles.input}
          placeholder='Vehicle'
          value={this.state.Vehicle}
          onChangeText={((Vehicle) => this.setState({Vehicle}))}
        />
        <TextInput
          style={styles.input}
          placeholder='Parking'
          value={this.state.Parking}
          onChangeText={((Parking) => this.setState({Parking}))}
        />
        <TextInput
          style={styles.input}
          placeholder='Subscription'
          value={this.state.Subscription}
          onChangeText={((Subscription) => this.setState({Subscription}))}
        />
        
        <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.OnhandleSubmit()
                    }}
                    >
                      <Text 
                        style={styles.text}
                      >Submit</Text>
                    </Pressable>
      
            
                  </View>
                  </View>
                  );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    }
  });



  