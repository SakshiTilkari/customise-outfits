import React, { useState, useMemo } from 'react';
import { View, FlatList, ScrollView, StyleSheet } from 'react-native';
import { outfits } from '../data/outfits';
import { Chip } from '../components/Chip';
import { OutfitCard } from '../components/OutfitCard';

const allTags = [...new Set(outfits.flatMap((o) => o.tags))];

export default function OutfitsScreen() {
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
  return tag ? outfits.filter(i => i.tags.includes(tag)) : outfits;
}, [tag]);

  return (
    <View style={styles.container}>
      {/* Category filter row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.filterRow}
      >
        {allTags.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            selected={tag === cat}
            onPress={() =>
              setTag(tag === cat ? null : cat)
            }
          />
        ))}
      </ScrollView>

      {/* outfit grid */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => <OutfitCard outfit={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});
