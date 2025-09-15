import React, { useState, useMemo } from "react";
import { View, ScrollView, FlatList, StyleSheet } from "react-native";
import { items, categories } from "../data/data";
import { Chip } from "../components/Chip";
import { ItemCard } from "../components/ItemCard";

/**
 * Collections:
 *  - Think of these as all items grouped by category (like your first screenshot).
 *  - User can filter by category only.
 */
export default function CollectionsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const filtered = useMemo(() => {
    return selectedCategory
      ? items.filter((i) => i.category === selectedCategory)
      : items;
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      {/* Category filter row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.filterRow}
      >
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            selected={selectedCategory === cat}
            onPress={() =>
              setSelectedCategory(selectedCategory === cat ? null : cat)
            }
          />
        ))}
      </ScrollView>

      {/* Item grid */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => <ItemCard item={item} />}
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
