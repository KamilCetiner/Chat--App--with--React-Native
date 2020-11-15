import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    marginLeft:30,
    marginTop:15,
    marginBottom:15,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
  },
  input: {
    paddingVertical: 0,
  },
});

export const cityStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: "#424242",
    fontWeight: 'bold',
    marginLeft: 5
  },
});

export const detailStyle = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  },
  line: {
    borderWidth: 1,
    width: Dimensions.get("window").width / 4,
    alignSelf: 'center',
    borderColor: '#e0e0e0',
    marginVertical: 2
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
  },
  address: {
    fontSize: 15,
    marginTop:5
  
  },
  phone: {
    fontWeight: 'bold',
    marginLeft: 5
  },
});


export const authStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -70
  },
  logo: {
    height: Dimensions.get('window').height / 5,
    resizeMode: 'contain',
  },
  logoText: {
      color: 'purple',
      fontSize: 35,
      fontWeight: 'bold'
  }
});

export const button = StyleSheet.create({
  container: {
    marginBottom:5,
    left: 20,
  },

  Touch: {
  backgroundColor: '#e1f5fe',
  width: Dimensions.get('window').width * 0.90 , 
  height: 30,
  marginTop: 7,
  padding:25,
  paddingBottom:40,
  borderRadius: 10,  
  
  },
  text:{
    textAlign: 'center',
    fontSize: 15,
    color: '#212121',
    fontWeight: 'bold',
  },
 
})



export const input_style = StyleSheet.create({
  container: {
  backgroundColor: '#eceff1',
  width: Dimensions.get('window').width * 0.90 , 
  marginTop: 7,
  padding:5,
  borderRadius: 10,
  left: 20,
  },
})



export const timelinePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd8dc'
  },
});


export const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]