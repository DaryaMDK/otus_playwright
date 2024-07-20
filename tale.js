function kolobok(characterName) {
  switch (characterName) {
    case 'дедушка':
      return 'Я от дедушки ушёл';
    case 'заяц':
      return 'Я от зайца ушёл';
    case 'лиса':
      return 'Меня съели';
    default:
      return 'Неизвестный персонаж';
  }
}

console.log(kolobok('дедушка'));
console.log(kolobok('лиса'));
console.log(kolobok('заяц'));


function newYear(character) {
  return `${character}! ${character}! ${character}!`;
}

console.log(newYear("Дед Мороз"));
console.log(newYear("Снегурочка"));