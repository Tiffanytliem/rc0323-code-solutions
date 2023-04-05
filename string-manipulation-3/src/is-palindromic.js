/* exported isPalindromic */
function isPalindromic(string) {
  const compact = string.replace(/[^a-zA-Z0-9]/g, '');
  console.log(compact);
  let reverse = '';
  for (let i = compact.length - 1; i >= 0; i--) {
    reverse += compact.charAt(i);
  }
  if (reverse === compact) {
    return true;
  }
  return false;
}
