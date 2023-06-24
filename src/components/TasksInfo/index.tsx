import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "../../styles/globalStyles";

type TasksInfoProps = {
  completed: number;
  created: number;
};

const TasksInfo: FC<TasksInfoProps> = ({ completed, created }) => {
  const Info: FC<{ label: string; color: string; count: number }> = ({
    label,
    color,
    count,
  }) => (
    <View style={styles.taskWrapper}>
      <Text style={[styles.info, { color: color }]}>{label}</Text>
      <View style={styles.count}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Info label="Criadas" color={globalStyles.colors.blue} count={created} />
      <Info
        label="Concluídas"
        color={globalStyles.colors.purple}
        count={completed}
      />
    </View>
  );
};

export default TasksInfo;
