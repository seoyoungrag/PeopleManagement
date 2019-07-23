import './app/config'
import { registerScreensAndStartApp } from './app/navigation/layouts'
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
    'Remote debugger is in a background tab which may',
    'Require cycle:',
    'Unable to define method \'getConstants()\' on'
    ]);

// this registers the screens and starts the react-native-navigation process
registerScreensAndStartApp()
