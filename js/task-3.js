// Задача 3. Перевірка спаму

function checkForSpam(message) {
  const messageLower = message.toLowerCase();
  const checkSpam = 'spam';
  const checkSale = 'sale';
  if (message.includes('spam')) {
    console.log(message);
  } else if (message.includes('sale')) {
    console.log(message);
  } else if (messageLower.includes(checkSpam.toLowerCase('spam'))) {
    console.log(message);
  } else if (messageLower.includes(checkSale.toLowerCase('sale'))) {
    console.log(message);
  } else {
    console.log('undefined');
  }
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function checkForSpam(message) {
//   let messageLower = message.toLowerCase();
//   let messageProhibited = 'spam' || 'sale';
//   if (message.includes(messageProhibited)) {
//     console.log(message);
//   } else if (messageLower.includes(messageProhibited.toLowerCase())) {
//     console.log(message);
//   } else {
//     console.log('undefined');
//   }
// }
