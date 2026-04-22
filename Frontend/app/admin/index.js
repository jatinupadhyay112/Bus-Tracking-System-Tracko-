import { DMSans_400Regular, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

const adminFeatures = [
  {
    key: "routes",
    title: "Manage Routes",
    description: "Create and edit bus routes",
    icon: "route",
    route: "/admin/routes",
  },
  {
    key: "vehicles",
    title: "Fleet Management",
    description: "Monitor and manage vehicles",
    icon: "directions-bus",
    route: "/admin/vehicles",
  },
  {
    key: "drivers",
    title: "Driver Management",
    description: "Assign drivers to routes",
    icon: "people",
    route: "/admin/drivers",
  },
  {
    key: "analytics",
    title: "Analytics & Reports",
    description: "View system analytics",
    icon: "bar-chart",
    route: "/admin/analytics",
  },
  {
    key: "alerts",
    title: "System Alerts",
    description: "Manage emergency alerts",
    icon: "warning",
    route: "/admin/alerts",
  },
  {
    key: "settings",
    title: "System Settings",
    description: "Configure system preferences",
    icon: "settings",
    route: "/admin/settings",
  },
];

function FeatureCard({ feature, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.cardLeft}>
        <View style={styles.iconCircle}>
          <MaterialIcons
            name={feature.icon}
            size={24}
            color="#7C83FD"
          />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{feature.title}</Text>
          <Text style={styles.cardDescription}>{feature.description}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#7C83FD" />
    </TouchableOpacity>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0F" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="radio" size={24} color="#7C83FD" />
          </View>
          <Text style={styles.logoText}>TRACKO</Text>
          <TouchableOpacity
            onPress={() => router.push("/screens/auth/role-selection")}
            activeOpacity={0.7}
            style={styles.logoutButton}
          >
            <Ionicons name="log-out-outline" size={20} color="#A5A5C4" />
          </TouchableOpacity>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Admin Dashboard</Text>
          <Text style={styles.welcomeSubtitle}>
            Manage your campus transit system with comprehensive control and real-time insights.
          </Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Active Routes</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Vehicles</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Drivers</Text>
          </View>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Management Tools</Text>
          <View style={styles.featuresGrid}>
            {adminFeatures.map((feature) => (
              <FeatureCard
                key={feature.key}
                feature={feature}
                onPress={() => router.push(feature.route)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0F",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 120,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  logoContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#14141C",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7C83FD",
  },
  logoText: {
    fontSize: 18,
    color: "#F8F9FF",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
  },
  logoutButton: {
    padding: 8,
  },
  welcomeSection: {
    marginBottom: 32,
  },
  welcomeTitle: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: "#A5A5C4",
    fontFamily: "DMSans_400Regular",
    lineHeight: 21,
  },
  statsSection: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#14141C",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(124, 131, 253, 0.15)",
  },
  statNumber: {
    fontSize: 24,
    color: "#7C83FD",
    fontFamily: "DMSans_700Bold",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
    textAlign: "center",
  },
  featuresSection: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    marginBottom: 8,
  },
  featuresGrid: {
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#14141C",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(124, 131, 253, 0.15)",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 12,
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
    marginBottom: 2,
  },
  cardDescription: {
    fontSize: 13,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
    lineHeight: 18,
  },
});