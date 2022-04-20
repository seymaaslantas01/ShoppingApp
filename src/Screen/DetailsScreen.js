import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  shoe = this.props.route.params;
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={this.styles.header}>
          <Icon
            name="arrow-back"
            size={28}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Icon name="shopping-cart" size={28} />
        </View>
        <View style={this.styles.imageContainer}>
          <Image
            source={this.shoe.img}
            style={{ resizeMode: "contain", flex: 1, width: 300, height: 300 }}
          />
        </View>
        <View style={this.styles.detailContainer}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:20}}>Best choice</Text>
          <View style={{marginLeft:20, marginTop:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:22, fontWeight:'bold', fontStyle:'italic'}}>{this.shoe.name}</Text>
            <View style={this.styles.priceTag}>
              <Text style={{marginLeft:15, color:'white', fontWeight:'bold', fontSize:16}}>$ {this.shoe.price}</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>About</Text>
            <Text style={{color: 'black',fontSize: 16, lineHeight: 22, marginTop: 10,}}>{this.shoe.about}</Text>
            <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={this.styles.borderBtn}>
                  <Icon name="arrow-upward" size={28}/>
                </View>
                <Text style={{fontSize:20, marginHorizontal:10, fontWeight:'bold'}}>1</Text>
                <View style={this.styles.borderBtn}>
                  <Icon name="arrow-downward" size={28}/>
                </View>
              </View>
              <View style={this.styles.buyBtn}>
                <Text style={{color:'white' , fontSize:18, fontWeight:'bold'}}>Buy</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  styles = StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    imageContainer: {
      flex: 0.45,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    detailContainer: {
      flex: 0.55,
      backgroundColor: 'gray',
      marginHorizontal: 7,
      marginBottom: 7,
      borderRadius: 20,
      marginTop: 30,
      paddingTop: 20,
    },
    priceTag: {
      backgroundColor:'orange',
      width:80,
      height:40,
      borderTopLeftRadius:25,
      borderBottomLeftRadius:25,
      justifyContent:'center'
    },
    borderBtn: {
      borderColor:'black',
      borderWidth:1,
      borderRadius:5,
      width:40,
      height:30,
      justifyContent:'center',
      alignItems:'center'
    },
    buyBtn: {
      width: 130,
      height: 50,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    }
    
  });
}
