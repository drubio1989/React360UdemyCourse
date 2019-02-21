import React from 'react';
import { StyleSheet } from 'react-360';

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: '#00171F',
    borderColor: '#003459',
    borderWidth: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10
  },
  header: {
    backgroundColor: '#003459'
  },
  textSize: {
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: 'green'
  }
});

export default styles;
