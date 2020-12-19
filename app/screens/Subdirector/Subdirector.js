import React from "react";
import { View, ScrollView,StyleSheet,Alert,TouchableOpacity,Text } from "react-native";
import Subdirector_Titulo from "../../Components/Subdirector/Subdirector/Subdirector_Titulo";
import Subdirector_Boton from "../../Components/Subdirector/Subdirector/Subdirector_Boton";
import Subdirector_Categorias from "../../Components/Subdirector/Subdirector/Subdirector_Categorias";
import { Button,ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../hooks/useFetch';
import { FlatList } from 'react-native-gesture-handler';

export default function Subdirector() {
  const navigation = useNavigation();
  const { loading, data: categorias } = useFetch('http://192.168.1.64:3000/categorias')
  return (
    <View style={styles.viewBody}>
     <Text style={styles.textTitle}>GESTIONAR CATEGORIAS</Text>
     <View style={styles.viewBtn}>
    <Button
      title="Agregar Categoria"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("add-categoria")}
    />
  </View>
<View style={styles.container}>
    {loading ? <Text>Cargando ...</Text> :
    <FlatList
                    style={styles.list}
                    data={categorias}
                    keyExtractor={x => x.id}
                    renderItem={({ item }) =>
                        <ListItem                           
                        onPress = {() => alertItemName(item)}
                        claveCat={item.claveCat}
                         
                        />
                    }
                />}
    </View>

  </View>    
  );
}

const alertItemName = (item) => {
  Alert.alert(item.claveCat+item.nombreCat+"\n actualizar  borrar ")
}



const styles = StyleSheet.create({
 
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    color:"maroon",
    fontWeight: "bold"
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
   },
   viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 200,

  },
  list: {
    alignSelf: 'stretch',
}
});
const list = [
  {
    title: "Ciclismo Ruta 1",
    icon: "bike"
  },
  {
    title: "Brigada de Ecología 2",
    icon: "biathlon"
  },
  {
    title: "Taller de lectura 3",
    icon: "book-open-variant"
  },
  {
    title: "Brigada de Rescate 4",
    icon: "hospital-box"
  },
  {
    title: "Basquet ball 5",
    icon: "tennis-ball"
  }
];
