import { FC } from "react";
import { TouchableHighlight, TouchableHighlightProps } from "react-native";
import { PlusCircle } from "phosphor-react-native";
import { styles } from "./styles";
import { globalStyles } from "../../../styles/globalStyles";

const AddTaskTouchableHighlight: FC<TouchableHighlightProps> = ({
  ...rest
}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={globalStyles.colors.blue}
      {...rest}
    >
      <PlusCircle size={24} color={globalStyles.colors.gray100} />
    </TouchableHighlight>
  );
};

export default AddTaskTouchableHighlight;
