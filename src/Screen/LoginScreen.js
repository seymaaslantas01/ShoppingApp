import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { auth } from "../../firebase-Config";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount(){
    auth.onAuthStateChanged((user)=>{
        if (user){
          this.props.navigation.navigate("Home", {
              user: user
          })
        }
    })
}
  loginHandler = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((uc) => {
        if (uc.user) {
          this.props.navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((uc) => {
        if (uc.user) {
          console.log(uc.user);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <View style={this.styles.container}>
        <View>
          <Image
            style={this.styles.image}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={this.styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#003f5c"
            style={this.styles.txtInput}
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
          />
        </View>
        <View style={this.styles.inputContainer}>
            <TextInput
            placeholder="Password"
            placeholderTextColor="#003f5c"
            style={this.styles.txtInput}
            onChangeText={(text) => {
                this.setState({
                password: text,
                });
            }}
        />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            
            <TouchableOpacity style={this.styles.btn} onPress={this.loginHandler}>
                <Text style={this.styles.btnText}>Giriş</Text>
            </TouchableOpacity>
           
            
            <TouchableOpacity style={this.styles.btn} onPress={this.registerHandler}>
                <Text style={this.styles.btnText}>Kayıt</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ededed",
        alignItems: "center",
        justifyContent: "center",
        height:'100%'
    },
    image: {
        width: 180,
        height: 110,
        marginBottom: 40,
    },
    inputContainer: {
        backgroundColor: "#fed125",
        borderRadius: 30,
        width: "90%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    txtInput: {
        width: "100%",
        height: 45,
        borderRadius: 30,
        flex: 1,
        paddingStart:10,
        
        
    },
    btn: {
        width: 150,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#fe9b17",
        marginHorizontal:10
    },
    btnText: {
        fontWeight: "bold",
        color: '#003f5c'
    },
  });
}
