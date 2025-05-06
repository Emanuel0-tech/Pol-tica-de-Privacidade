import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const SearchBar = ({ placeholder, value, onChangeText, onOptionsPress }) => (
  <View style={{
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 8
  }}>
    <Ionicons name="search" size={24} color={COLORS.black} />
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={{ flex: 1, marginLeft: 8 }}
    />
    <TouchableOpacity onPress={onOptionsPress}>
      <Ionicons name="options" size={24} color={COLORS.black} />
    </TouchableOpacity>
  </View>
);

export default SearchBar;
