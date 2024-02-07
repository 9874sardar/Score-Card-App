import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Controls from "./Components/Controls";
import Score from "./Components/Scores";
import ScoreProvider from "./context/ScoreContext";

export default function App() {
  return (
    <ScoreProvider>
      <View style={styles.container}>
          <>
            <Score />
            <Controls />
          </>
       
      </View>
    </ScoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {margin:0},
});
