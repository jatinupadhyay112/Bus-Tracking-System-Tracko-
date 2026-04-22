import { DMSans_400Regular, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function GetStarted() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0F" />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="radio" size={32} color="#7C83FD" />
          </View>
          <Text style={styles.logoText}>TRACKO</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.mainTitle}>Real-Time Campus Transit Tracking</Text>
          <Text style={styles.subtitle}>
            Experience seamless transportation with live bus tracking, instant notifications, and comprehensive fleet management all in one place.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresSection}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Ionicons name="location" size={24} color="#7C83FD" />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Live Tracking</Text>
              <Text style={styles.featureDescription}>Monitor bus locations in real-time</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Ionicons name="notifications" size={24} color="#7C83FD" />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Smart Alerts</Text>
              <Text style={styles.featureDescription}>Get notified about arrivals and delays</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Ionicons name="shield-checkmark" size={24} color="#7C83FD" />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Secure & Safe</Text>
              <Text style={styles.featureDescription}>Enterprise-grade security for all users</Text>
            </View>
          </View>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/screens/auth/role-selection")}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={["#7C83FD", "#5B5EF7"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Get Started →</Text>
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
    paddingTop: 64,
    paddingBottom: 120,
  },
  logoSection: {
    alignItems: "center",
    marginBottom: 48,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#14141C",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7C83FD",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 24,
    color: "#F8F9FF",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 2,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 48,
  },
  mainTitle: {
    fontSize: 32,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#A5A5C4",
    fontFamily: "DMSans_400Regular",
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 320,
  },
  featuresSection: {
    gap: 24,
    marginBottom: 48,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#14141C",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(124, 131, 253, 0.2)",
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
    lineHeight: 20,
  },
  buttonWrapper: {
    marginTop: 8,
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
    fontSize: 18,
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    fontSize: 11,
    color: "#8B8CB4",
    letterSpacing: 2,
    fontFamily: "DMSans_400Regular",
  },
});