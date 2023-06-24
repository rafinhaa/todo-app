import { FC, useState } from "react";
import { TouchableHighlight, TouchableHighlightProps } from "react-native";
import { Trash } from "phosphor-react-native";
import { styles } from "./styles";
import { globalStyles } from "../../../styles/globalStyles";

const RemoveTaskButton: FC<TouchableHighlightProps> = ({ ...rest }) => {
  const [isPressed, setIsPressed] = useState(false);

  const iconColor = isPressed
    ? globalStyles.colors.danger
    : globalStyles.colors.gray300;

  const handlePress = () => {
    setIsPressed(true);
  };

  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={globalStyles.colors.gray400}
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...rest}
    >
      <Trash size={24} color={iconColor} />
    </TouchableHighlight>
  );
};

export default RemoveTaskButton;
