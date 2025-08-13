import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image
        source={{ uri: 'https://unismuh.ac.id/wp-content/uploads/2021/05/unismuh.jpg' }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu perguruan tinggi swasta
        yang berlokasi di Kota Makassar, Sulawesi Selatan. Kampus ini menawarkan berbagai program studi
        dan berkomitmen mencetak lulusan yang berintegritas, unggul, dan berdaya saing global.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center', color: '#1a4d2e' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 16 },
  description: { fontSize: 14, lineHeight: 20, textAlign: 'justify', color: '#333' },
});
