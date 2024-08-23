import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Pressable
} from 'react-native';

const imagePaths = [
  require('./assets/images/1.jpg'),
  require('./assets/images/2.jpg'),
  require('./assets/images/3.jpg'),
  require('./assets/images/4.jpg'),
  require('./assets/images/5.jpg'),
  require('./assets/images/6.jpg'),
  require('./assets/images/7.jpg'),
  require('./assets/images/8.jpg'),
  require('./assets/images/9.jpg'),
  require('./assets/images/10.jpg'),
  require('./assets/images/11.jpg'),
  require('./assets/images/12.jpg'),
  require('./assets/images/13.jpg')
];

function App(): React.JSX.Element {
  
  const showImage = (i: number) => {setBigImageNumber(i)}
  
  const [bigImageNumber, setBigImageNumber] = useState<number>(1);

  const bigImage = () => {
    return (
      <Image style={styles.bigImage} source={imagePaths[bigImageNumber]} />
    )
  }

  const items = [];

  for (let i = 0; i < 13; i++) {
    items.push(
      <Pressable key={i} onPress={() => showImage(i)}>
        <Image style={styles.imageCard} source={imagePaths[i]} />
      </Pressable>
    );
  }

  

  return (

    <SafeAreaView style={styles.primaryContainer}>

      <View style={styles.bigImageContainer}>
       {bigImage()}
      </View>
      <ScrollView horizontal={true} style={styles.smallImageContainer}>
        {items}
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1
  },
  bigImageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: 'center'
  },
  smallImageContainer: {
    flex: 1
  },
  bigImage: {
    borderRadius: 20,
    width: 300,
    height: 550
  },
  imageCard: {
    width: 100,
    height: 150,
    marginHorizontal: 20
  }

});

export default App;
