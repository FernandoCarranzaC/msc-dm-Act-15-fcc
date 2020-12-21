import React from "react";
import { View, ScrollView,StyleSheet,Alert,TouchableOpacity,Text } from "react-native";

import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../../hooks/useFetch';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../Subdirector/ListItem';


export default function Subdirector_CategoriasB() {

  const { loading, data: categorias } = useFetch('http://192.168.1.64:3000/categorias')
  return (

     <ScrollView style={styles.ScrollviewBody}>
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
       
                />
                
  
                
                }

   </ScrollView> 
   
  );
}

const alertItemName = (item) => {
  alert(item.claveCat+item.nombreCat+"\n actualizar  borrar ")
 
}



const styles = StyleSheet.create({
   
  ScrollviewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 200,

  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
},
list: {
    alignSelf: 'stretch',
}
});
