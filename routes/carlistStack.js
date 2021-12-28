import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import React, {useState, Component} from 'react';
import {SearchBar} from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RCTModalHostViewNativeComponent from 'react-native/Libraries/Modal/RCTModalHostViewNativeComponent';
import _ from 'lodash';

// function CarListScreen(){
export default class CarListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      fullData: [],
     search:'',
  
    };
  }
  

  componentDidMount() {
    fetch(
      'https://sheet.best/api/sheets/49d98de6-e3cd-4e98-8973-e793937e8942?_limit=20',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          fullData: responseJson,
          search: '',
        });
      });
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            'Car Owner',
            item.Name + ' FROM ' + item.Department + ' DEPARTMENT',
          )
        }>
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.Vehicle_No}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  searchVehicle = (search) => {
     this.setState({search: search});
    //  alert(search);
    const formattedQuery = search.toUpperCase();
    
    // alert(formattedQuery);
    const dataSource = _.filter(this.state.fullData, searchData => {
         
      if (searchData.Vehicle_No.includes(formattedQuery)) {
        return true;
      }
      return false;
    });

    // const dataSource= this.state.fullData.filter(function (item)
    // {
    //   return item.Vehicle_No.includes(formattedQuery);
    // }
    // )
    // query: this.state.search;
    this.setState({dataSource:dataSource, query:search});
  };

  render() {
    let { isLoading} = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <View>
            <ActivityIndicator
              size="large"
              animating={true}
              color="#999999"></ActivityIndicator>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View>
            <SearchBar
              placeholder="Type Here..."
              onChangeText={this.searchVehicle}
              value={this.state.search}
            />
          </View>
          <View>
            <FlatList
              data={this.state.dataSource}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      );
    }
  }
}
// export default CarListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,

    height: 44,

    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  itemText: {
    fontSize: 18,
    color: '#111111',
    fontWeight: 'bold',
  },
});
