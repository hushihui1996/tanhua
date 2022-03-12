import {PermissionsAndroid, Platform} from 'react-native';
import {init, Geolocation} from 'react-native-amap-geolocation';
import axios from 'axios';

class Geo {
  async initGeo() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      await init({
        // ios: 'e8b092f4b23cef186bd1c4fdd975bf38',
        android: '65c9c367038261040998959538b9ee92',
      });
      return Promise.resolve();
    }
  }
  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      console.log('开始定位');
      Geolocation.getCurrentPosition(({coords}) => {
        resolve(coords);
      }, reject);
    });
  }
  async getCityByLocation() {
    await init({
      // ios: 'e8b092f4b23cef186bd1c4fdd975bf38',
      android: '65c9c367038261040998959538b9ee92',
    });
    const {longitude, latitude} = await this.getCurrentPosition();
    const res = await axios.get('https://restapi.amap.com/v3/geocode/regeo', {
      params: {
        location: `${longitude},${latitude}`,
        key: '95b87d7f0627fa1a5b232bf34658d701',
      },
    });
    return Promise.resolve(res.data);
  }
}

export default new Geo();
