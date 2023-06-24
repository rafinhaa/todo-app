import { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/logo.svg";

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default Header;
