// components/NumberCircle.tsx
import { Text } from "react-native";
import styles from "./Styles";
import { TitleProps } from "../../Interfaces/";

const Title: React.FC<TitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;
