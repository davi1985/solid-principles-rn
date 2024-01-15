import { Text, View } from 'react-native';
import { Repo as Props } from '../@types';

export const Repo = ({ id, language, name }: Props) => (
  <View key={id}>
    <Text>{name}</Text>
    <Text>{language}</Text>
  </View>
);
