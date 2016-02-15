/**
 * Developer - Satish Jha
 * DrawerLayoutAndroid Example
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  View
} from 'react-native';

class DrawerLayoutEx extends Component {
  render() {

    var navView = (
      <View style={{flex:1, backgroundColor: '#FFFFFF', margin: 40}}>
        <Text style={{ textAlign: 'left'}}>
          In Drawer
        </Text>

        <Text style={{ textAlign: 'left'}}>
           - Example
        </Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={340}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={ () => navView}>

        <View style={{ flex:1, alignItems: 'center', marginTop: 20}}>
          <Text style={{ color: '#AA2211', backgroundColor: '#11EE22', margin: 20 }}>
            Drawer Layout Android Example
          </Text>
        </View>
      </DrawerLayoutAndroid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }  
});

AppRegistry.registerComponent('DrawerLayoutEx', () => DrawerLayoutEx);
