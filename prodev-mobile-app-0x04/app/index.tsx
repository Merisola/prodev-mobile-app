import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { router } from "expo-router";

export default function Home() {
  return (
    <ImageBackground
      source={BACKGROUNDIMAGE}
      style={styles.backgroundImageContainer}
    >
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome to ProDev</Text>
      </View>
      <View style={styles.titleSubTextContainer}>
        <Text style={styles.titleSubText}>Explore your potential.</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonPrimaryText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonSecondaryText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
