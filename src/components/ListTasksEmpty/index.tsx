import { ClipboardText } from "phosphor-react-native";
import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Space from "../Space";
import { globalStyles } from "../../styles/globalStyles";

const ListTasksEmpty: FC = () => {
  return (
    <View style={styles.container}>
      <Space size={48} />
      <ClipboardText size={56} color={globalStyles.colors.gray400} />
      <Space />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export default ListTasksEmpty;
