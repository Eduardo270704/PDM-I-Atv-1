import React from "react";
import { View, Text } from "react-native";
import { BallProps } from "../../Interfaces";
import Styles from "./Styles";

const Ball: React.FC<BallProps> = ({
  number,
  backgroundColor,
  textColor,
}) => {
  return (
    <View style={[Styles.circle, { backgroundColor }]}>
      <Text style={[Styles.text, { color: textColor }]}>{number}</Text>
    </View>
  );
};

export default Ball;
