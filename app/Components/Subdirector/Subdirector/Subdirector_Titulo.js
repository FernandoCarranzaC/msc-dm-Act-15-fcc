import React from "react";
import { Text,StyleSheet,View } from "react-native";



export default function IAListAsist_Titulo() {
  return (
    
    <View>
      <Text style={styles.textTitle}>GESTIONAR CATEGORIAS</Text>
    </View>

  );
}

const alertItemactividad = (item) => {
  Alert.alert(item.title+"\n Horario")
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
});