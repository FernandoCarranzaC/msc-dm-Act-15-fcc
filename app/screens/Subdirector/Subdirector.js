import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import Subdirector_Titulo from "../../Components/Subdirector/Subdirector/Subdirector_Titulo";
import Subdirector_Boton from "../../Components/Subdirector/Subdirector/Subdirector_Boton";
import Subdirector_Categorias from "../../Components/Subdirector/Subdirector/Subdirector_Categorias";
import Subdirector_CategoriasB from "../../Components/Subdirector/Subdirector/Subdirector_CategoriasB";


export default function Subdirector() {

  return (
    <ScrollView style={styles.viewBody}>

    <Subdirector_Titulo/>
    <Subdirector_Boton/>
    <Subdirector_CategoriasB/>
    
    </ScrollView>
  );
}

const alertItemName = (item) => {
  Alert.alert(item.title+"\n actualizar  borrar ")

}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  }
});
