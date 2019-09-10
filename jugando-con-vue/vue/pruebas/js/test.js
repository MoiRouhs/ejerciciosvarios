// función para comprobar si un string es palíndromo
function checkPalindrome(string) {
  const reversedString = string
    .split("")
    .reverse()
    .join("");
  return string === reversedString;
}
export { checkPalindrome };
export const TEST = true;
