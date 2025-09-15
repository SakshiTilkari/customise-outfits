import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const CARD_MARGIN = 8;
const CARD_WIDTH = (Dimensions.get('window').width - CARD_MARGIN * 3) / 2;

export const OutfitCard = ({ outfit }: { outfit: any }) => (
  <View style={styles.card}>
    <View style={styles.imagesRow}>
      {['top', 'bottom', 'footwear', 'outerwear'].map((key) =>
        outfit[key] ? (
          <Image key={key} source={outfit[key]} style={styles.image} />
        ) : null
      )}
    </View>

    <Text style={styles.title}>{outfit.title}</Text>

    <View style={styles.tagsRow}>
      {outfit.tags.map((tag: string) => (
        <View key={tag} style={styles.tagChip}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    marginBottom: 12, 
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  imagesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: (CARD_WIDTH - 20) / 2,
    height: (CARD_WIDTH - 20) / 2,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#222',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagChip: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#333',
  },
});

