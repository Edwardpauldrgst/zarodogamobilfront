import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    dataSource:[]
  }
  }

  


  componentDidMount(){
    return fetch('http://localhost:3000/Ranglista4')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        
      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor:"#1a1c2c"}}>
        <Text style={{color:"#f4f4f4",fontSize:24,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >
            Ed & Levi Sudoku
        </Text>
        <Text style={{color:"#f4f4f4",fontSize:18,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >
            Üdvözöllek az Ed & Levi Sudoku weboldalán.
        </Text>
        
  <Text style={{color:"#f4f4f4",fontSize:12,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >Az Ed & Levi Sudoku egy magyarok által fejlesztett Kropki Sudoku játék és weboldal. </Text>
  <Text style={{color:"#f4f4f4",fontSize:12,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >A weboldalon megtekinthetik a játékosok a játékban elért eredményüket a ranglisták oldalainak megtekintésével.</Text>


<Text style={{color:"#f4f4f4",fontSize:18,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >A Kropki Sudoku szabályai</Text>
  <Text style={{color:"#f4f4f4",fontSize:12,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >A Kropki Sudokuban a megszokott Sudokuhoz hasonlóan minden sorban és oszlopban minden szám csak egyszer szerepelhet, így kell elérni, hogy minden mezőben szerepeljen egy szám. </Text>
  <Text style={{color:"#f4f4f4",fontSize:12,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >Ami miatt eltér a Kropki Sudoku a megszokottól, az az, hogy a Sudokuban nem szerepel előre megadott szám, teljesen üres a Sudoku. </Text>
  <Text style={{color:"#f4f4f4",fontSize:12,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >A számokat a Sudoku négyzeteinek rácsain szereplő fehér és fekete vonalak alapján kell kitalálni. </Text>
  <Text style={{color:"#f4f4f4",fontSize:12,textAlign:"center",marginleft:20,marginTop:5,marginBottom:5}} >A fekete vonal melletti számok közül az egyik kétszer annyi, mint a másik, míg a fehér vonal két oldalán olyan két szám kell legyen, amelyek a különbsége 1.</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});
