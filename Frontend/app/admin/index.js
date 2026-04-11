import { Text, View } from "react-native";

export default function AdminDashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0f172a" }}>
      <Text style={{ color: "#fff", fontSize: 24 }}>
        Admin Dashboard ⚙️
      </Text>
    </View>
  );
}