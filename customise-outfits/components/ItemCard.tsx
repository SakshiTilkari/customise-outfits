import { View, Image, Text, StyleSheet } from "react-native";

export const ItemCard = ({ item }: { item: any }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.cardImage} />
    <View style={styles.cardBody}>
      <Text style={styles.title}>{item.category}</Text>
      <View style={styles.badgeRow}>
        <View style={styles.badge}><Text style={styles.badgeText}>{item.color}</Text></View>
        <View style={styles.badge}><Text style={styles.badgeText}>{item.style}</Text></View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',       // keeps image corners rounded
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  badgeRow: { flexDirection: 'row' },
  badge: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 6,
  },
  badgeText: { fontSize: 12, color: '#555' },
});
