import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

const SplashScreen = ({ navigation }) => {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    const timer = setTimeout(() => {
      if (isSignedIn) {
        navigation.replace("HomeScreen");
      } else {
        navigation.replace("SignInScreen");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoaded, isSignedIn, navigation]);

  return (
    <View style={styles.root}>
      <Image 
        source={require("../assets/images/icon.png")} 
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>SNAP MAP</Text>
    </View>
  );
};

export default SplashScreen;


const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: '#000',
    letterSpacing: 2,
  },
});