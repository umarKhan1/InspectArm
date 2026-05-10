import { useSplashAnimation } from "@/hooks/useSplashAnimation";
import { splashStyles as styles} from "@/styles/splash/splash";
import { View } from "react-native";
import { Image } from "expo-image";
import Animated from "react-native-reanimated";

export default function () {

  const { animatedStyle } = useSplashAnimation();
  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Image
          source={require('../../assets/images/splash-icon.png')}
          style={styles.logo}
          contentFit="contain"
        />
      </Animated.View>
    </View>
  );
}