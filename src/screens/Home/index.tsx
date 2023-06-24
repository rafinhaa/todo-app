import { Alert, FlatList, View } from "react-native";
import {
  Task,
  TasksInfo,
  Header,
  Input,
  AddTaskButton,
  Space,
  ListTasksEmpty,
} from "../../components";
import { FC, useState } from "react";
import { styles } from "./styles";

export type TasksProps = {
  id: string;
  task: string;
  done: boolean;
};

const Home: FC = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [task, setTask] = useState("");

  const completedTasks = tasks.filter((task) => task.done).length;

  const allTasks = tasks.length;

  const handleAddTask = () => {
    if (task.trim().length === 0) return;

    const newTask = {
      id: String(new Date().getTime()),
      task,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleDeleteTask = (id: string) => {
    Alert.alert("Remover item", "Tem certeza que deseja remover esse item?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
      },
    ]);
  };

  const handleDoneTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChangeText={setTask}
          value={task}
        />
        <AddTaskButton onPress={handleAddTask} />
      </View>
      <Space size={32} />
      <TasksInfo completed={completedTasks} created={allTasks} />
      <Space size={20} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            task={item}
            onDelete={handleDeleteTask}
            onDone={handleDoneTask}
            isDone={item.done}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Space size={8} />}
        ListEmptyComponent={() => <ListTasksEmpty />}
      />
    </View>
  );
};

export default Home;
