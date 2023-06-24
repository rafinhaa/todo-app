import { FC } from "react";
import { View } from "react-native";

type SpaceProps = {
  size?: number;
};

const Space: FC<SpaceProps> = ({ size = 16 }) => {
  return <View style={{ width: "100%", height: size }} />;
};

export default Space;
