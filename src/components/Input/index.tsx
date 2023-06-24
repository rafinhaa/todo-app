import { FC, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "../../styles/globalStyles";

const Input: FC<TextInputProps> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.container,
        {
          borderColor: isFocused
            ? globalStyles.colors.purple
            : globalStyles.colors.gray700,
        },
      ]}
      placeholderTextColor={globalStyles.colors.gray300}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  );
};

export default Input;
