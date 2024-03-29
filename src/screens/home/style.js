import { Platform } from 'react-native';

export default {
  loadingscreen:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#00233A'
  },
  activity:{
    marginTop: 30,
  },
  background: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  cityInput: {
    fontFamily: 'futura',
    fontSize: 30,
    color: 'white',
    marginTop: -20,
    textAlign: 'center',
    width: 200,
  },
  city: {
    fontFamily: 'futura',
    fontSize: 30,
    color: 'white',
    marginTop: -20,
  },
  text: {
    fontFamily: 'gillsans',
    fontSize: 15,
    color: 'white',
    marginTop: 5,
  },
  weatherinfo:{
    alignItems: 'center',
    flex: 1,
  },
  netherlands:{
    width: 125,
    height: 125,
    marginBottom: -115,
    marginLeft: -10
  },
  wind:{
    width: 60,
    height: 125,
    marginBottom: 10,
    marginRight: -30,
  },
  weatherData:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title:{
    fontFamily: 'futura',
    fontSize: 25,
    color: 'white',
    marginBottom: 15,
  },
  daytime: {
    width: 200,
    height: 200
  },
  loginScreenContainer: {
    marginTop:  Platform.OS === 'ios' ? 85 : 25,
    padding: 20
  },
};