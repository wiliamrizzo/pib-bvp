import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Tab1: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Tab2: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Tab3: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
