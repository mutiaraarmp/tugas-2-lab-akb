import { FlatList, Text, View } from "react-native";

const data = [
  { nim: "105841114722", nama: "Mutiara Dewi" },
  { nim: "105841114222", nama: "Reski Asriani" },
  { nim: "105841114333", nama: "Dzulviana" },
  { nim: "105841114444", nama: "Annisa Alfrini" },
];

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>
        Daftar Mahasiswa
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.nim}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginVertical: 5 }}>
            {item.nim} - {item.nama}
          </Text>
        )}
      />
    </View>
  );
}
