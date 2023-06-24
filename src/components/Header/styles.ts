import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.gray700,
    height: Dimensions.get("screen").height * 0.22,
    width: Dimensions.get("screen").width,
    marginLeft: -24,
    justifyContent: "center",
    alignItems: "center",
  },
});
