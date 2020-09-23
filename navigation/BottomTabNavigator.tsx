import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import HomeScreen from '../screens/HomeScreen';
import VideosScreen from '../screens/VideosScreen';
import AgendaScreen from '../screens/AgendaScreen'
import OracaoScreen from '../screens/OracaoScreen';
import MaisScreen from '../screens/MaisScreen';

import { BottomTabParamList, HomeParamList, VideosParamList, AgendaParamList, OracaoParamList, MaisParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Videos"
        component={VideosNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="logo-youtube" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Agenda"
        component={AgendaNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
        }}
      />
            <BottomTab.Screen
        name="Oracao"
        component={OracaoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-book" color={color} />,
        }}
      />
            <BottomTab.Screen
        name="Mais"
        component={MaisNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-more" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Primeira Igreja Batista' }}
      />
    </HomeStack.Navigator>
  );
}

const VideosStack = createStackNavigator<VideosParamList>();

function VideosNavigator() {
  return (
    <VideosStack.Navigator>
      <VideosStack.Screen
        name="VideosScreen"
        component={VideosScreen}
        options={{ headerTitle: 'Vídeos' }}
      />
    </VideosStack.Navigator>
  );
}

const AgendaStack = createStackNavigator<AgendaParamList>();

function AgendaNavigator() {
  return (
    <AgendaStack.Navigator>
      <AgendaStack.Screen
        name="AgendaScreen"
        component={AgendaScreen}
        options={{ headerTitle: 'Agenda' }}
      />
    </AgendaStack.Navigator>
  );
}

const OracaoStack = createStackNavigator<OracaoParamList>();

function OracaoNavigator() {
  return (
    <OracaoStack.Navigator>
      <OracaoStack.Screen
        name="OracaoScreen"
        component={OracaoScreen}
        options={{ headerTitle: 'Pedidos de Oração' }}
      />
    </OracaoStack.Navigator>
  );
}

const MaisStack = createStackNavigator<MaisParamList>();

function MaisNavigator() {
  return (
    <MaisStack.Navigator>
      <MaisStack.Screen
        name="MaisScreen"
        component={MaisScreen}
        options={{ headerTitle: 'Mais' }}
      />
    </MaisStack.Navigator>
  );
}
