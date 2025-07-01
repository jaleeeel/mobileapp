import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.txt}>Say hello to my new app</Text>
      <Pressable style={styles.button}>
      <Link style={styles.buttonText} href={"/login"}>Log In</Link>
      </Pressable>
      <Pressable style={styles.button}>
      <Link style={styles.buttonText} href={"/signup"}>Sign Up</Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        
      
  },
  txt:{
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2e86de',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    padding: 20,
  }

})

