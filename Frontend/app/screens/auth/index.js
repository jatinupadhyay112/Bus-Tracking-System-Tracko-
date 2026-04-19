import { DMSans_400Regular, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

function InputField({ label, placeholder, icon, isPassword, value, onChangeText, showPassword, onTogglePassword }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name={icon} size={18} color="#7C83FD" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#525270"
          secureTextEntry={isPassword && !showPassword}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
        />
        {isPassword && (
          <TouchableOpacity onPress={onTogglePassword} activeOpacity={0.7} style={styles.toggleIcon}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={18}
              color="#7C83FD"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default function LoginScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams();
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!fontsLoaded) return null;

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    if (!password.trim()) {
      Alert.alert("Error", "Please enter your password");
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace with actual login API call
      console.log("Login attempt:", { email, password });
      Alert.alert("Success", "Logged in successfully!");
      // Redirect based on role (you may need to update this)
      // router.push("/admin");
    } catch (_error) {
      Alert.alert("Error", "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0F" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header with Logo */}
        <View style={styles.headerTop}>
          <View style={styles.logoContainer}>
            <Ionicons name="radio" size={24} color="#7C83FD" />
          </View>
          <Text style={styles.logoText}>Tracko</Text>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Welcome back</Text>
          <Text style={styles.subtitle}>
            {role ? `Continue as ${role.replace(/-/g, " ")}` : "Log in to track your fleet in real-time."}
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formWrapper}>
          <InputField
            label="EMAIL ADDRESS"
            placeholder="name@company.com"
            icon="email"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordHeader}>
            <Text style={styles.label}>PASSWORD</Text>
            <TouchableOpacity onPress={() => Alert.alert("Info", "Password reset feature coming soon")} activeOpacity={0.7}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={18} color="#7C83FD" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#525270"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.7} style={styles.toggleIcon}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={18}
                color="#7C83FD"
              />
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleLogin}
            disabled={loading}
            style={styles.signInButtonWrapper}
          >
            <LinearGradient
              colors={["#7C83FD", "#5B5EF7"]}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.signInButton}
            >
              <Text style={styles.signInButtonText}>{loading ? "Signing In..." : "Sign In"}</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Google Button */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => Alert.alert("Info", "Google sign-in coming soon")}
            activeOpacity={0.8}
          >
            <FontAwesome name="google" size={18} color="#7C83FD" style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don&apos;t have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => router.push("/screens/auth/signup")}
          >
            Sign up
          </Text>
        </Text>
      </View>
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
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
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
  titleSection: {
    marginBottom: 32,
  },
  mainTitle: {
    fontSize: 36,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#A5A5C4",
    fontFamily: "DMSans_400Regular",
    lineHeight: 21,
  },
  formWrapper: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 12,
    color: "#F8F9FF",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 12,
    color: "#7C83FD",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#14141C",
    borderRadius: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "rgba(124, 131, 253, 0.15)",
    height: 54,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#F8F9FF",
    fontFamily: "DMSans_400Regular",
    paddingVertical: 0,
  },
  toggleIcon: {
    padding: 8,
    marginLeft: 8,
  },
  signInButtonWrapper: {
    marginTop: 8,
  },
  signInButton: {
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7C83FD",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 10,
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "DMSans_700Bold",
    letterSpacing: 1,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#2A2A2F",
  },
  dividerText: {
    fontSize: 11,
    color: "#8B8CB4",
    fontFamily: "DMSans_400Regular",
    letterSpacing: 1,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14141C",
    borderRadius: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(124, 131, 253, 0.15)",
    gap: 10,
  },
  googleIcon: {
    marginRight: 4,
  },
  googleButtonText: {
    fontSize: 14,
    color: "#F8F9FF",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 0.5,
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
    textAlign: "center",
  },
  signupLink: {
    color: "#7C83FD",
    fontFamily: "DMSans_700Bold",
  },
});
