/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import Posts from './app/Posts';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Posts);
