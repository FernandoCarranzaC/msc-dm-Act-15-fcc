import React,{useState} from "react";
import { StyleSheet, View, ScrollView,Text, TextInput, Alert } from "react-native";
import AddCategoria_Titulo from "../../Components/Subdirector/addCategoria/addCategoria_Titulo";
import AddCategoria_Datos from "../../Components/Subdirector/addCategoria/addCategoria_Datos";
import AddCategoria_Boton from "../../Components/Subdirector/addCategoria/addCategoria_Boton";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function addCategoria() {
  const navigation = useNavigation();
  const[txtclaveCat, setclaveCat] = useState('Escribe Categoria')
  const[txtnombreCat,setnombreCat]= useState('Escribe nombre categoria')


  return (

    <View style={styles.viewBody}>
   
   <Text style={styles.textTitle}>AÑADIR CATEGORIA{"\n"}</Text>
    <ScrollView>
    <Text style={styles.textoutput}>CLAVE CATEGORIA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {txtclaveCat}
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {c=>setclaveCat(c)}
      /> 
      <Text style={styles.textoutput}>NOMBRE DE LA CATEGORÍA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {txtnombreCat}
          placeholderTextColor = "#CA6F1E"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {n=>setnombreCat(n)}
          /> 

  <Button
      title="Añadir Categoria"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => {
        fetch('http://192.168.1.64:3000/categorias/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                claveCat: txtclaveCat,
                nombreCat: txtnombreCat
            })
        }).then(() => {
            alert('Categoria agreegada')
            navigation.navigate('subdirector')
        })
    }}
    />
    </ScrollView>
  </View>


  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 20,
    color:"maroon",
    fontWeight: "bold"
  },
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
  marginBottom: 100,
  },
  textoutput:{
    fontWeight: "bold",
  },
  input: {
    
    margin: 15,
    height: 40,
    borderColor: '#F1C40F',
    borderWidth: 1,
    color: 'maroon' ,
    
 },  
 btnAddMaestro: {
  marginBottom: 5
 },
 btnStyle: {
   backgroundColor: "#CA6F1E"
 },
 btnContainer: {
   width: "80%"
 },
 viewBtn: {
   
   alignItems: "center"
 }
  
});
