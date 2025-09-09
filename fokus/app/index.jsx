import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./pomodoro.png')}/>
      <View style={styles.action}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  action: {
    paddingVertical: 24,
    paddingHorizontal: 24, 
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#144480"
  }
})
