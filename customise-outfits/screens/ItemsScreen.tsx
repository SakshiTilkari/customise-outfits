import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { items } from '../data/data';
import { ItemCard } from '../components/ItemCard';

const categories = ['Topwear', 'Bottomwear', 'Footwear', 'Outerwear'];
const stylesList = [...new Set(items.map(i => i.style))];
const colors = [...new Set(items.map(i => i.color))];

export default function ItemsScreen() {
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [styleFilter, setStyleFilter] = useState<string | null>(null);
  const [colorFilter, setColorFilter] = useState<string | null>(null);

  const filtered = useMemo(() =>
    items.filter(i =>
      (!typeFilter || i.category === typeFilter) &&
      (!styleFilter || i.style === styleFilter) &&
      (!colorFilter || i.color === colorFilter)
    ), [typeFilter, styleFilter, colorFilter]);

  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <Dropdown placeholder="Type"  items={categories} value={typeFilter}  onValueChange={setTypeFilter}/>
        <Dropdown placeholder="Style" items={stylesList} value={styleFilter} onValueChange={setStyleFilter}/>
        <Dropdown placeholder="Color" items={colors}     value={colorFilter} onValueChange={setColorFilter}/>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => <ItemCard item={item} />}
      />
    </View>
  );
}

function Dropdown({
  placeholder,
  items,
  value,
  onValueChange,
}: {
  placeholder: string;
  items: string[];
  value: string | null;
  onValueChange: (val: string | null) => void;
}) {
  return (
    <RNPickerSelect
      onValueChange={(val) => onValueChange(val || null)}
      value={value || ''}
      placeholder={{ label: placeholder, value: '' }}
      items={items.map(i => ({ label: i, value: i }))}
      useNativeAndroidPickerStyle={false}
      style={{
        inputIOS: pickerBase,
        inputAndroid: pickerBase,
        iconContainer: { top: 8, right: 12 },
        placeholder: { color: '#7a7a7a' },
      }}
    />
  );
}

const pickerBase = {
  fontSize: 15,
  paddingVertical: 8,
  paddingHorizontal: 14,
  backgroundColor: '#f7f2ef',
  borderRadius: 20,
  color: '#444',
  marginHorizontal: 6,
  borderWidth: 1,
  borderColor: '#e6ddd7',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

