import React, { useState } from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

const InputSearch = ({ onSearch, placeholder, style }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <TouchableOpacity style={[styles.inputSearch, style]} onPress={handleSearch}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder={placeholder}
        style={styles.searchInput}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Image source={require('../../assets/images/icons/search-icon.png')} style={styles.searchIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchInput: {
    padding: 10,
    width: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    width: 20,
    height: 20,
    tintColor: '#9B59B6',
  },
});

export default InputSearch;
