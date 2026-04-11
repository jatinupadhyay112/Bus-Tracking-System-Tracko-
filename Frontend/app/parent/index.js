import { StyleSheet, Text, View } from "react-native";

export default function ParentMap() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>🗺️ Parent Map Screen</Text>
      <Text style={styles.sub}>Map will show here on mobile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
  text: {
    color: "#38bdf8",
    fontSize: 22,
    fontWeight: "bold",
  },
  sub: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 10,
  },
});