import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateTodo, TodoList} from '../screens';

const {Navigator, Screen} = createStackNavigator();

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="todoList" component={TodoList} />
        <Screen name="createtodo" component={CreateTodo} />
      </Navigator>
    </NavigationContainer>
  );
};
