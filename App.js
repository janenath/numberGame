import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberRounds, setNumberRounds] = useState(0);

  const newGameHandler = () => {
    setNumberRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setNumberRounds(0);
  };

  const gameOverHandler = numberRounds => {
    setNumberRounds(numberRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && numberRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (numberRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={numberRounds} startNewGame={newGameHandler}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
