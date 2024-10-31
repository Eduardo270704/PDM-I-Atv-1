import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useLottery } from "../../hooks";
import Styles from "./Styles";

const LotteryResults: React.FC = () => {
  const { results, loading, error } = useLottery();

  if (loading) {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Lottery Results</Text>

      <View style={Styles.result}>
        <Text style={Styles.label}>Mega-Sena:</Text>
        <Text style={Styles.resultText}>
          {results.megasena?.numbers.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>

      <View style={Styles.result}>
        <Text style={Styles.label}>Quina:</Text>
        <Text style={Styles.resultText}>
          {results.quina?.numbers.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>

      <View style={Styles.result}>
        <Text style={Styles.label}>Timemania:</Text>
        <Text style={Styles.resultText}>
          {results.timemania?.numbers.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>
    </View>
  );
};

export default LotteryResults;
