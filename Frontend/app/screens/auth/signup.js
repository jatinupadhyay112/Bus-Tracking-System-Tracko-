import app from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { DMSans_400Regular, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { Ionicons } from "@expo/vector-icons";
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
  TextInput,
  Alert,
} from "react-native";

const auth = getAuth(app);

export default function SignupScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_700Bold });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!fontsLoaded) return null;

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      Alert.alert("Error", "Please enter your full name");
      return false;
    }
    if (!formData.email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      Alert.alert("Error", "Please enter your phone number");
      return false;
    }
    if (formData.password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log("Signup success:", userCredential.user);
      Alert.alert("Success", "Account created successfully!");
      // Redirect to role selection
      router.push("/screens/auth/role-selection");

    } catch (_error) {
      Alert.alert("Error", "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0F" />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#A5A5C4" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join TRACKO for real-time transit tracking</Text>
        </View>

        <View style={styles.formWrapper}>
          {/* Full Name Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={18} color="#7C83FD" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#525270"
                value={formData.fullName}
                onChangeText={(value) => handleInputChange("fullName", value)}
              />
            </View>
          </View>

          {/* Email Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={18} color="#7C83FD" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="your.email@example.com"
                placeholderTextColor="#525270"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(value) => handleInputChange("email", value)}
              />
            </View>
          </View>

          {/* Phone Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={18} color="#7C83FD" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="+1 (555) 000-0000"
                placeholderTextColor="#525270"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(value) => handleInputChange("phone", value)}
              />
            </View>
          </View>

          {/* Password Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={18} color="#7C83FD" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Create a strong password"
                placeholderTextColor="#525270"
                secureTextEntry={!showPassword}
                value={formData.password}
                onChangeText={(value) => handleInputChange("password", value)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={18}
                  color="#7C83FD"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={18} color="#7C83FD" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                placeholderTextColor="#525270"
                secureTextEntry={!showConfirmPassword}
                value={formData.confirmPassword}
                onChangeText={(value) => handleInputChange("confirmPassword", value)}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                activeOpacity={0.7}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye" : "eye-off"}
                  size={18}
                  color="#7C83FD"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms & Conditions */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing up, you agree to our{" "}
              <Text style={styles.termsLink}>Terms of Service</Text>
              {" "}and{" "}
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleSignup}
            disabled={loading}
            style={styles.buttonWrapper}
          >
            <LinearGradient
              colors={["#7C83FD", "#5B5EF7"]}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>{loading ? "Creating Account..." : "Sign Up"}</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginLinkContainer}>
            <Text style={styles.loginLinkText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
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
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  backButtonText: {
    fontSize: 14,
    color: "#A5A5C4",
    fontFamily: "DMSans_400Regular",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
    fontFamily: "DMSans_700Bold",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#A5A5C4",
    fontFamily: "DMSans_400Regular",
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 300,
  },
  formWrapper: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 13,
    color: "#F8F9FF",
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
    borderColor: "rgba(124, 131, 253, 0.2)",
    height: 52,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#F8F9FF",
    fontFamily: "DMSans_400Regular",
    paddingVertical: 0,
  },
  eyeIcon: {
    padding: 8,
    marginLeft: 8,
  },
  termsContainer: {
    marginVertical: 8,
  },
  termsText: {
    fontSize: 12,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
    textAlign: "center",
    lineHeight: 18,
  },
  termsLink: {
    color: "#7C83FD",
    fontFamily: "DMSans_700Bold",
  },
  buttonWrapper: {
    marginTop: 12,
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
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  loginLinkText: {
    fontSize: 13,
    color: "#B2B0CE",
    fontFamily: "DMSans_400Regular",
  },
  loginLink: {
    fontSize: 13,
    color: "#7C83FD",
    fontFamily: "DMSans_700Bold",
  },
});
