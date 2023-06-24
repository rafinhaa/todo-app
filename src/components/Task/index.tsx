import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "../../styles/globalStyles";
import { CheckCircle, Circle } from "phosphor-react-native";
import { TasksProps } from "../../screens/Home";
import RemoveTaskButton from "../Buttons/RemoveTaskButton";

type TaskProps = {
  task: TasksProps;
  isDone?: boolean;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
};

const Task: FC<TaskProps> = ({ task, isDone = false, onDelete, onDone }) => {
  const CheckBox: FC<{ checked: boolean }> = ({ checked }) =>
    checked ? (
      <CheckCircle
        size={24}
        color={globalStyles.colors.blueDark}
        weight="fill"
      />
    ) : (
      <Circle size={24} color={globalStyles.colors.blue} />
    );

  const taskStyle = isDone ? styles.taskDone : styles.taskOpen;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => onDone(task.id)}
      >
        <CheckBox checked={isDone} />
        <Text style={[styles.task, taskStyle]}>{task.task}</Text>
      </TouchableOpacity>
      <RemoveTaskButton onPress={() => onDelete(task.id)} />
    </View>
  );
};

export default Task;
