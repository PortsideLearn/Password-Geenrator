import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function generatePassword(length, level) {
  var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  var allChars = lowerChars + upperChars + numbers + symbols;
  var password = '';
  
  if (level == 'easy') {
    allChars = lowerChars + upperChars + numbers;
  }
  else if (level == 'medium') {
    allChars = lowerChars + upperChars + numbers + symbols.slice(0,8);
  }
  else if (level == 'hard') {
    allChars = lowerChars + upperChars + numbers + symbols;
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}




export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [level, setLevel] = useState('easy');
  const [password, setPassword] = useState('');

  function handleGeneratePassword() {
    setPassword(generatePassword(length, level));
  }

  return (
    <View>
      <Text>Желаемая длина пароля:</Text>
      <TextInput
        keyboardType='numeric'
        value={length.toString()}
        onChangeText={text => setLength(parseInt(text))}
      />
      <Text>Уровень сложности:</Text>
      <TextInput
        value={level}
        onChangeText={text => setLevel(text)}
      />
      <Button title='Сгенерировать пароль' onPress={handleGeneratePassword} />
      <Text>{password}</Text>
    </View>
  );
}
