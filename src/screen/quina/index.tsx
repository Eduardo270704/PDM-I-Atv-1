import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import Ball from "../../components/Ball";
import { useLottery } from "../../hooks";

const QuinaScreen: React.FC = () => {
  const { results, loading, error } = useLottery();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const quinaNumbers = results.quina?.numbers || [];

  console.log("API data for Quina: ", quinaNumbers);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUINA</Text>
      <View style={styles.numbersContainer}>
        {quinaNumbers.map((num, index) => (
          <Ball
            key={index}
            number={num}
            backgroundColor="#260085"
            textColor="#fff"
          />
        ))}
      </View>
      <Text style={styles.date}>
        {results.quina?.dateInFull || "Date not available"}{" "}
      </Text>
    </View>
  );
};

export default QuinaScreen;
