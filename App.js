import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { isValidPhoneNumber } from 'your-library-name';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleCheckPhoneNumber = () => {
    setIsValid(isValidPhoneNumber(phoneNumber));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter phone number"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }}
      />
      <Button title="Check phone number" onPress={handleCheckPhoneNumber} />
      {isValid ? <Text style={{ color: 'green' }}>Valid phone number</Text> : <Text style={{ color: 'red' }}>Invalid phone number</Text>}
    </View>
  );
}
