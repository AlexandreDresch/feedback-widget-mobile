import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright(){
  return (
    <View>
        <Text style={styles.text}>
            We appreciate your contact.
        </Text>
    </View>
  );
}