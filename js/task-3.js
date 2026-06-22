function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

console.log(checkForSpam("Big SALE this weekend!")); // true
console.log(checkForSpam("This is a normal message")); // false
console.log(checkForSpam("Don't miss our spam-free newsletter")); // true
console.log(checkForSpam("Hello, how are you?")); // false
console.log(checkForSpam("SpAm alert!")); // true
