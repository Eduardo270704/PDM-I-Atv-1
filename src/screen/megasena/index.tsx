import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useLottery } from "../../hooks/useLottery";
import Ball from "../../components/Ball";
import styles from "./styles";

const MegaSenaScreen: React.FC = () => {
  const { results, loading, error } = useLottery();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const megaSenaNumbers = results.megasena?.numbers || [];

  console.log("API data for MegaSena: ", megaSenaNumbers);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.numbersContainer}>
        {megaSenaNumbers.map((num, index) => (
          <Ball
            key={index}
            number={num}
            backgroundColor="#209869"
            textColor="#fff"
          />
        ))}
      </View>
      <Text style={styles.date}>
        {results.megasena?.dateInFull || "Date not available"}{" "}
      </Text>
    </View>
  );
};

export default MegaSenaScreen;
