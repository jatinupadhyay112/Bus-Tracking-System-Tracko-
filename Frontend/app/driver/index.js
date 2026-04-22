import { DMSans_400Regular, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";

const driverActions = [
  {
    key: "start-trip",
    title: "Start Trip",
    description: "Begin your route and start tracking",
    icon: "play-circle",
    color: "#10B981",
  },
  {
    key: "end-trip",
    title: "End Trip",
    description: "Complete current trip",
    icon: "stop-circle",
    color: "#EF4444",
  },
  {
    key: "emergency",
    title: "Emergency Alert",
    description: "Send emergency notification",
    icon: "warning",
    color: "#F59E0B",
  },
  {
    key: "route-info",
    title: "Route Information",
    description: "View assigned route details",
    icon: "map",
    color: "#7C83FD",
  },
  {
    key: "passenger-count",
    title: "Passenger Count",
    description: "Update current passenger count",
    icon: "people",
    color: "#8B5CF6",
  },
  {
    key: "maintenance",
    title: "Report Issue",
    description: "Report vehicle maintenance needs",
    icon: "build",
    color: "#EC4899",
  },
];

function ActionCard({ action, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.cardLeft}>
        <View style={[styles.iconCircle, { backgroundColor: action.color + "20", borderColor: action.color }]}>
          <Ionicons
            name={action.icon}
            size={24}
            color={action.color}
          />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{action.title}</Text>
          <Text style={styles.cardDescription}>{action.description}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#7C83FD" />
    </TouchableOpacity>
  );
}

export default function DriverScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });
  const [isOnTrip, setIsOnTrip] = useState(false);

  if (!fontsLoaded) return null;

  const handleAction = (actionKey) => {
    switch (actionKey) {
      case "start-trip":
        if (!isOnTrip) {
          setIsOnTrip(true);
          Alert.alert("Trip Started", "Your location is now being tracked.");
        } else {
          Alert.alert("Already on Trip", "End current trip first.");
        }
        break;
      case "end-trip":
        if (isOnTrip) {
          setIsOnTrip(false);
          Alert.alert("Trip Ended", "Trip completed successfully.");
        } else {
          Alert.alert("No Active Trip", "Start a trip first.");
        }
        break;
      case "emergency":
        Alert.alert(
          "Emergency Alert",
          "This will notify all passengers and admin. Are you sure?",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Send Alert", style: "destructive", onPress: () => Alert.alert("Alert Sent", "Emergency notification dispatched.") }
          ]
        );
        break;
      case "route-info":
        Alert.alert("Route Information", `Current Route: Route A - Campus Loop\nStops: 8\nEstimated Duration: 45 minutes`);
        break;
      case "passenger-count":
        Alert.alert("Passenger Count", "Current passengers: 12\nCapacity: 50");
        break;
      case "maintenance":
        Alert.alert("Maintenance Report", "Report submitted. Admin will be notified.");
        break;
      default:
        break;
    }
  };

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

        {/* Status Section */}
        <View style={styles.statusSection}>
          <View style={[styles.statusIndicator, isOnTrip && styles.statusActive]}>
            <Ionicons
              name={isOnTrip ? "location" : "location-outline"}
              size={20}
              color={isOnTrip ? "#10B981" : "#6B7280"}
            />
            <Text style={[styles.statusText, isOnTrip && styles.statusTextActive]}>
              {isOnTrip ? "ON TRIP" : "OFF DUTY"}
            </Text>
          </View>
          <Text style={styles.routeText}>Route A - Campus Loop</Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Passengers</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Minutes Left</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Stops</Text>
          </View>
        </View>

        {/* Actions Grid */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Driver Actions</Text>
          <View style={styles.actionsGrid}>
            {driverActions.map((action) => (
              <ActionCard
                key={action.key}
                action={action}
                onPress={() => handleAction(action.key)}
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
  statusSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  statusIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#14141C",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#374151",
  },
  statusActive: {
    backgroundColor: "#10B98120",
    borderColor: "#10B981",
  },
  statusText: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
  },
  statusTextActive: {
    color: "#10B981",
  },
  routeText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    marginTop: 12,
    textAlign: "center",
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
  actionsSection: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    marginBottom: 8,
  },
  actionsGrid: {
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
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
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