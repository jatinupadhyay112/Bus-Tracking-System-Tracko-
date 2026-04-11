import { DMSans_400Regular, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const roles = [
  { label: "Bus Controller", icon: "bus-outline", route: "/driver" },
  { label: "User", icon: "person-outline", route: "/parent" },
  { label: "Admin", icon: "shield-outline", route: "/admin" },
];

export default function LoginScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>TRACKO</Text>
        <View style={styles.indigoLine} />
      </View>

      {/* Switcher */}
      <View style={styles.middle}>
        <Text style={styles.youAre}>— You Are —</Text>

        <View style={styles.switcher}>
          {roles.map((role, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.switchBtn, selected === index && styles.switchBtnActive]}
              onPress={() => setSelected(index)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={role.icon}
                size={16}
                color={selected === index ? "#ffffff" : "#6b7280"}
              />
              <Text style={[styles.switchText, selected === index && styles.switchTextActive]}>
                {role.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Selected Role Card */}
        <View style={styles.roleCard}>
          <View style={styles.roleIconBox}>
            <Ionicons name={roles[selected].icon} size={36} color="#6366f1" />
          </View>
          <Text style={styles.roleLabel}>{roles[selected].label}</Text>
          <Text style={styles.roleDesc}>
            {selected === 0 && "Manage your route & share live location"}
            {selected === 1 && "Track your respective bus in real-time"}
            {selected === 2 && "Monitor all buses & manage routes"}
          </Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => router.push(roles[selected].route)}
          activeOpacity={0.85}
        >
          <Text style={styles.continueBtnText}>Continue</Text>
          <Ionicons name="arrow-forward" size={18} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>TEAM POINT BLANK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    paddingVertical: 60,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 62,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: 14,
    fontFamily: "DMSans_700Bold",
  },
  indigoLine: {
    width: 50,
    height: 3,
    backgroundColor: "#6366f1",
    marginTop: 14,
    borderRadius: 2,
  },
  middle: {
    alignItems: "center",
    gap: 24,
  },
  youAre: {
    color: "#6366f1",
    fontSize: 12,
    letterSpacing: 4,
    fontFamily: "DMSans_400Regular",
  },
  switcher: {
    flexDirection: "row",
    backgroundColor: "#111111",
    borderRadius: 14,
    padding: 4,
    borderWidth: 1,
    borderColor: "#222222",
    width: "100%",
  },
  switchBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    gap: 6,
  },
  switchBtnActive: {
    backgroundColor: "#6366f1",
  },
  switchText: {
    fontSize: 11,
    color: "#6b7280",
    fontFamily: "DMSans_400Regular",
  },
  switchTextActive: {
    color: "#ffffff",
    fontWeight: "700",
    fontFamily: "DMSans_700Bold",
  },
  roleCard: {
    width: "100%",
    backgroundColor: "#111111",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#222222",
    gap: 10,
  },
  roleIconBox: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: "#0a0a1a",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6366f1",
    marginBottom: 4,
  },
  roleLabel: {
    fontSize: 22,
    fontWeight: "900",
    color: "#ffffff",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
  },
  roleDesc: {
    fontSize: 12,
    color: "#6b7280",
    fontFamily: "DMSans_400Regular",
    textAlign: "center",
  },
  continueBtn: {
    width: "100%",
    backgroundColor: "#6366f1",
    borderRadius: 14,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  continueBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
  },
  footer: {
    alignItems: "center",
  },
  footerText: {
    color: "#374151",
    fontSize: 10,
    letterSpacing: 2,
    fontFamily: "DMSans_400Regular",
  },
});