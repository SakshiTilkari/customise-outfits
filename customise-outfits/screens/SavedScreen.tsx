import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CollectionsScreen from "./CollectionsScreen";
import OutfitsScreen from "./OutfitsScreen";
import ItemsScreen from "./ItemsScreen";

const tabs = ["Collections", "Outfits", "Items"] as const;

export default function SavedScreen() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Collections");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.tabRow}>
        {tabs.map((t) => (
          <TouchableOpacity key={t} onPress={() => setActiveTab(t)}>
            <Text style={[styles.tabText, activeTab === t && styles.tabActive]}>
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "Collections" && <CollectionsScreen />}
      {activeTab === "Outfits" && <OutfitsScreen />}
      {activeTab === "Items" && <ItemsScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  tabText: { fontSize: 16, color: "#888" },
  tabActive: { color: "#000", fontWeight: "bold" },
});

