import { DMSans_400Regular, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

const roles = [
  {
    key: "admin",
    label: "Admin",
    icon: "security",
    route: "/admin",
    description:
      "Fleet Manager: Oversee all routes, vehicles, and operational safety metrics.",
  },
  {
    key: "user",
    label: "User",
    icon: "person",
    route: "/parent",
    description:
      "Parent/Student: Track your specific bus and receive live arrival alerts.",
  },
  {
    key: "bus-controller",
    label: "Bus Controller",
    icon: "directions-bus",
    route: "/driver",
    description:
      "Driver: Manage trip starts, handle stops, and broadcast live position.",
  },
];

function RoleCard({ role, selected, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.card, selected && styles.cardSelected]}
    >
      <View style={styles.cardLeft}>
        <View style={styles.iconCircle}>
          <MaterialIcons
            name={role.icon}
            size={22}
            color={selected ? "#F8F9FF" : "#C7C7D9"}
          />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{role.label}</Text>
          <Text style={styles.cardDescription}>{role.description}</Text>
        </View>
      </View>
      {selected ? <Ionicons name="checkmark-circle" size={24} color="#7C83FD" /> : null}
    </TouchableOpacity>
  );
}

export default function LoginScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0F" />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>TRACKO</Text>
          <Text style={styles.subtitle}>Real-time campus transit tracking</Text>
        </View>

        <View style={styles.cardsWrapper}>
          {roles.map((role, index) => (
            <RoleCard
              key={role.key}
              role={role}
              selected={selected === index}
              onPress={() => setSelected(index)}
            />
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push(roles[selected].route)}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={["#7C83FD", "#5B5EF7"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Continue →</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>SECURE CAMPUS PORTAL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0F",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 48,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 8,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#A5A5C4",
    fontFamily: "DMSans_400Regular",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 320,
  },
  cardsWrapper: {
    gap: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#14141C",
    borderRadius: 26,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 6,
  },
  cardSelected: {
    borderColor: "#7C83FD",
    backgroundColor: "#181826",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    flex: 1,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#11111A",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
    lineHeight: 19,
  },
  buttonWrapper: {
    marginTop: 28,
  },
  buttonGradient: {
    borderRadius: 28,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7C83FD",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
  },
  footer: {
    paddingVertical: 18,
    alignItems: "center",
  },
  footerText: {
    fontSize: 11,
    color: "#8B8CB4",
    letterSpacing: 2,
    fontFamily: "DMSans_400Regular",
  },
});