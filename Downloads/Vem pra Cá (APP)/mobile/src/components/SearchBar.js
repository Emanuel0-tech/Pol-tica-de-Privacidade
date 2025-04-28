import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import COLORS from '../constants/colors';

const SearchBar = ({ placeholder }) => (
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
      style={{ flex: 1, marginLeft: 8 }}
    />
    <Ionicons name="options" size={24} color={COLORS.black} />
  </View>
);

export default SearchBar;
