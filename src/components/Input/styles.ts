import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.gray500,
    padding: 16,
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    color: globalStyles.colors.gray100,
  },
});
