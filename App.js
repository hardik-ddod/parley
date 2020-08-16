import 'react-native-gesture-handler';
import * as React from 'react';
import { FlatList, StyleSheet, Button, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("Email...");
  const [password, setPassWord] = React.useState("Password...");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Parley</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder={email} 
          placeholderTextColor="white"
          onChangeText={text => setEmail(text)}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder= {password}
          placeholderTextColor="white"
          onChangeText={text => setPassWord(text)}/>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Button style={styles.loginText} onPress={() => navigation.navigate("Details")} title="Login" color="white"></Button>
      </TouchableOpacity>
    </View>
  );
}

function CategoryScreen() {
  const InnerStack = createStackNavigator();
  const categories = [{key:'Black Lives Matter'}, {key:'Activism'}, {key:'Hate Speech'}, {key:'Freedom of Speech'},{key:'Black Lives Matter'}, {key:'Activism'}, {key:'Hate Speech'}, {key:'Freedom of Speech'},{key:'Black Lives Matter'}, {key:'Activism'}, {key:'Hate Speech'}, {key:'Freedom of Speech'}];
  return (
    <View style={{ flex: 1, justifyContent:"center"  }}>
      <Text style= {{textAlign:"center", fontSize:35, color:"white", backgroundColor:"#fb7756", fontWeight:"bold", fontStyle:"italic", padding:5, marginBottom:5}} >Categories</Text>
      <FlatList
        style={{ flex: 1, backgroundColor:"white" }}
        data={categories}
        renderItem={({item}) => <View style={styles.item}><Button color="black" title={item.key}/></View>}
      />
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chats!</Text>
    </View>
  );
}
function TabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     if (route.name === 'Home') {
        //       return (
        //         <Icon name="rocket" size={30} color="#900" />
        //       );
        //     } else if (route.name === 'Settings') {
        //       return (
        //         <Icon name="rocket" size={30} color="#900" />
        //       );
        //     }
        //   },
        // })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Categories" component={CategoryScreen} />
        <Tab.Screen name="Chats" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Details" component={TabScreen} options={{
            headerTitle:"", headerBackTitleVisible: false, headerLeft:null
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#e74645",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fb7756",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#1ac0c6",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  item:{
    padding:10,
    margin:5,
    marginLeft:10,
    marginRight:10,
    backgroundColor:"white",
    color:"black",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 1,
  }
});

export default App;
