import React, {FC, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const TodoList: FC = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Todosss',
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('createtodo')}>
            <Image
              source={require('../../assets/images/ic_plus.png')}
              style={styles.plusStyle}
            />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <View>
      <Text>Todo List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  plusStyle: {
    height: 34,
    width: 34,
    marginRight: 10,
  },
});
