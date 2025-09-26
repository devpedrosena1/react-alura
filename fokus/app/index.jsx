import { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./long.png'),
    display: 'Pausa longa'
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        <Image source={timerType.image}/>
        <View style={styles.actions}>
          <View style={styles.context}>
            {pomodoro.map(p => (  
              <ActionButton 
                key={p.id}
                active={timerType.id == p.id}
                onPress={() => setTimerType(p)}
                display={p.display}
              />
            ))}
          </View>
          <Text style={styles.timer}>
            { new Date(timerType.initialValue * 1000)
                    .toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit'}) }
          </Text>
          <FokusButton />
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
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    color: '#FFF',
    fontSize: 54,
    fontWeight: 'bold',
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