import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gremio não tem mundial</Text>
      <Text style={{ fontSize: 50 }}>Gremio não tem mundial</Text>
      <Text>Gremio não tem mundial</Text>
      <Button title="Clique aqui" color={"red"} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Clique aqui</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#78f274",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    width: 200,
    height: 70,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
