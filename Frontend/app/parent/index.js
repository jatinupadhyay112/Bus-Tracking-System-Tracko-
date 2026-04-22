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
  Alert,
} from "react-native";

const parentFeatures = [
  {
    key: "live-map",
    title: "Live Map View",
    description: "Track your child's bus in real-time",
    icon: "map",
    route: "/parent/map",
  },
  {
    key: "bus-schedule",
    title: "Bus Schedule",
    description: "View pickup and drop-off times",
    icon: "time",
    route: "/parent/schedule",
  },
  {
    key: "notifications",
    title: "Notifications",
    description: "Manage alert preferences",
    icon: "notifications",
    route: "/parent/notifications",
  },
  {
    key: "emergency-contacts",
    title: "Emergency Contacts",
    description: "Important contact information",
    icon: "call",
    route: "/parent/contacts",
  },
  {
    key: "trip-history",
    title: "Trip History",
    description: "View past trips and routes",
    icon: "history",
    route: "/parent/history",
  },
  {
    key: "feedback",
    title: "Feedback & Support",
    description: "Report issues or get help",
    icon: "help-circle",
    route: "/parent/support",
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
          <Ionicons
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

export default function ParentMap() {
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
          <Text style={styles.welcomeTitle}>Parent Dashboard</Text>
          <Text style={styles.welcomeSubtitle}>
            Stay connected with your child&apos;s transportation and receive real-time updates.
          </Text>
        </View>

        {/* Current Status */}
        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusTitle}>Current Trip Status</Text>
            <View style={styles.statusBadge}>
              <Ionicons name="location" size={16} color="#10B981" />
              <Text style={styles.statusBadgeText}>ON ROUTE</Text>
            </View>
          </View>
          <View style={styles.statusDetails}>
            <Text style={styles.busInfo}>Bus #12 - Route A</Text>
            <Text style={styles.nextStop}>Next Stop: Main Gate (5 min)</Text>
            <Text style={styles.eta}>Estimated Arrival: 3:45 PM</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => Alert.alert("Live Map", "Opening live map view...")}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#7C83FD", "#5B5EF7"]}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.quickActionGradient}
            >
              <Ionicons name="map" size={20} color="#FFFFFF" />
              <Text style={styles.quickActionText}>View Live Map</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => Alert.alert("Emergency", "Calling emergency contact...")}
            activeOpacity={0.8}
          >
            <View style={[styles.quickActionGradient, { backgroundColor: "#EF4444" }]}>
              <Ionicons name="call" size={20} color="#FFFFFF" />
              <Text style={styles.quickActionText}>Emergency Call</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>More Features</Text>
          <View style={styles.featuresGrid}>
            {parentFeatures.map((feature) => (
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
  statusCard: {
    backgroundColor: "#14141C",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(124, 131, 253, 0.15)",
  },
  statusHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statusTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#10B98120",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusBadgeText: {
    fontSize: 12,
    color: "#10B981",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.5,
  },
  statusDetails: {
    gap: 8,
  },
  busInfo: {
    fontSize: 16,
    color: "#7C83FD",
    fontFamily: "DMSans_700Bold",
  },
  nextStop: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "DMSans_400Regular",
  },
  eta: {
    fontSize: 14,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
  },
  quickActions: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },
  quickActionButton: {
    flex: 1,
  },
  quickActionGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  quickActionText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "DMSans_700Bold",
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