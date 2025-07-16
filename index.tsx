// index.tsx

import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const imageData = [
  { main: 'https://picsum.photos/id/101/200', alt: 'https://picsum.photos/id/201/200' },
  { main: 'https://picsum.photos/id/102/200', alt: 'https://picsum.photos/id/202/200' },
  { main: 'https://picsum.photos/id/103/200', alt: 'https://picsum.photos/id/203/200' },
  { main: 'https://picsum.photos/id/104/200', alt: 'https://picsum.photos/id/204/200' },
  { main: 'https://picsum.photos/id/105/200', alt: 'https://picsum.photos/id/205/200' },
  { main: 'https://picsum.photos/id/106/200', alt: 'https://picsum.photos/id/206/200' },
  { main: 'https://picsum.photos/id/107/200', alt: 'https://picsum.photos/id/207/200' },
  { main: 'https://picsum.photos/id/108/200', alt: 'https://picsum.photos/id/208/200' },
  { main: 'https://picsum.photos/id/109/200', alt: 'https://picsum.photos/id/209/200' },
];

export default function Index() {
  const [images, setImages] = useState(
    imageData.map((img, index) => ({
      id: index,
      currentSrc: img.main,
      scale: 1,
      flipped: false,
    }))
  );

  const handlePress = (id: number) => {
    setImages(prev =>
      prev.map(img => {
        if (img.id === id) {
          const newScale = Math.min(img.scale * 1.2, 2);
          const flipped = !img.flipped;
          const newSrc = flipped ? imageData[img.id].alt : imageData[img.id].main;
          return { ...img, currentSrc: newSrc, scale: newScale, flipped };
        }
        return img;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {images.map(img => (
          <TouchableOpacity key={img.id} onPress={() => handlePress(img.id)} style={styles.cell}>
            <Image
              source={{ uri: img.currentSrc }}
              style={[styles.image, { transform: [{ scale: img.scale }] }]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 330,
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
