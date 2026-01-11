import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootParamList } from "../types";
import PersonIcon from "../assets/icons/PersonIcon";

type NavigationProp = NativeStackNavigationProp<RootParamList>;

const BottomNavigation = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();

  const isActive = (screenName: keyof RootParamList) => {
    return route.name === screenName;
  };

  return (
    <View style={styles.bottomNavWrapper}>
      <View style={styles.bottomNav}>
        {/* Left - Compass Button (MapScreen) */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <MaterialCommunityIcons
            name="compass-outline"
            size={26}
            color={isActive("MapScreen") ? "#EF4444" : "#9CA3AF"}
          />
        </TouchableOpacity>

        {/* Spacer for center button */}
        <View style={{ width: 72 }} />

        {/* Right - Profile Button */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <PersonIcon
            width={26}
            height={26}
            color={isActive("ProfileScreen") ? "#EF4444" : "#9CA3AF"}
          />
        </TouchableOpacity>
      </View>

      {/* Center Camera Button */}
      <TouchableOpacity
        style={styles.centerButton}
        onPress={() => navigation.navigate("CameraScreen")}
        activeOpacity={0.85}
      >
        <FontAwesome name="camera" size={26} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavWrapper: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 12,
  },
  navItem: {
    padding: 10,
  },
  centerButton: {
    position: "absolute",
    top: -28, // Creates the cut-out effect
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 16,
  },
});

export default BottomNavigation;
