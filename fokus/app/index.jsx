import { Text, View, StyleSheet, Image, Pressable, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        <Image source={require('./pomodoro.png')}/>
        <View style={styles.actions}>
          <Text style={styles.timer}>
            25:00
          </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Começar
            </Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Projeto fictício e sem fins comerciais</Text>
          <Text style={styles.footerText}>Desenvolvido por Alura</Text>
        </View>
      </View>
    </ScrollView>
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
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24, 
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  timer: {
    color: '#FFF',
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.8
  }
})
