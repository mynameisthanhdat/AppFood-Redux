/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';

import BasicFlatlist from './components/BasicFlatList';

AppRegistry.registerComponent('TestFood', () => BasicFlatlist);

console.disableYellowBox = true;