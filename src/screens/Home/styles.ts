import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: globalStyles.colors.gray600,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    marginTop: -52 / 2,
  },
});
