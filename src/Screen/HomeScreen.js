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
import shoes from "./shoes";
const width = Dimensions.get("screen").width / 2 - 30;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  categories = ["POPULAR", "OUTDOOR", "INDOOR", "WALKING"];
  CategorieList = () => {
    return (
      <View style={this.styles.categoryContainer}>
        {this.categories.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => this.setState({ categoryIndex: index })}
          >
            <Text
              style={[
                this.styles.categoryText,
                this.state.categoryIndex == index &&
                  this.styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  Card = ({ shoe }) => {
    return (
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Details', shoe)}}>
        <View style={this.styles.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: shoe.like
                  ? "rgba(245, 42, 42,0.2)"
                  : "rgba(0,0,0,0.2) ",
              }}
            >
              <Icon
                name="favorite"
                size={18}
                color={shoe.like ? "red" : "black"}
              />
            </View>
          </View>
          <View style={{ height: 200, alignItems: "center" }}>
            <Image
              source={shoe.img}
              style={{ flex: 1, width: 400, height: 200 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {shoe.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              ${shoe.price}
            </Text>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: "orange",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
      >
        <View style={this.styles.header}>
          <View>
            <Text style={this.styles.headerTextTop}>Welcome to</Text>
            <Text style={this.styles.headerTextBottom}>Foot Shop</Text>
          </View>
          <Icon name="shopping-cart" size={28} />
        </View>
        <View style={this.styles.inputContainer}>
          <View style={this.styles.searchContainer}>
            <Icon name="search" size={25} style={{ marginLeft: 20 }} />
            <TextInput placeholder="Search" style={this.styles.input} />
          </View>
          <View style={this.styles.sortBtn}>
            <Icon name="sort" size={30} color="white" />
          </View>
        </View>
        <this.CategorieList />
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={shoes}
          renderItem={({ item }) => {
            return <this.Card shoe={item} />;
          }}
        />
      </SafeAreaView>
    );
  }

  styles = StyleSheet.create({
    header: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerTextTop: {
      fontSize: 25,
      fontWeight: "bold",
    },
    headerTextBottom: {
      fontSize: 38,
      fontWeight: "bold",
      color: "#fe9b17",
    },
    inputContainer: {
      marginTop: 30,
      flexDirection: "row",
    },
    searchContainer: {
      flexDirection: "row",
      flex: 1,
      height: 50,
      backgroundColor: "silver",
      borderRadius: 10,
      alignItems: "center",
    },
    input: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
      flex:1
    },
    sortBtn: {
      marginLeft: 10,
      height: 50,
      width: 50,
      backgroundColor: "#fe9b17",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    categoryContainer: {
      flexDirection: "row",
      marginTop: 30,
      marginBottom: 20,
      justifyContent: "space-between",
    },
    categoryText: {
      color: "gray",
      fontSize: 16,
      fontWeight: "bold",
    },
    categoryTextSelected: {
      color: "#fe9b17",
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: "#fe9b17",
    },
    card: {
      height: 320,
      backgroundColor: "gray",
      width,
      marginBottom: 20,
      padding: 15,
      marginHorizontal: 2,
      borderRadius: 10,
    },
  });
}
