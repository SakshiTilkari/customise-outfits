import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const Chip = ({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) => (
  <Pressable
    onPress={onPress}
    style={[styles.chip, selected && styles.chipSelected]}>
    <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
      {label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipSelected: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  chipText: {
    color: '#333',
    fontWeight: '600', // same weight for both
    fontSize: 13,
  },
  chipTextSelected: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});
