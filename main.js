let str = `
010-1234-5678
cjs42552@naver.com
https://regexr.com/
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi');
const regexp = /the/gi;
console.log(str.match(regexp));

const regexp1 =  /fox/gi;
console.log(regexp1.test(str));

console.log(str.replace(regexp1, "AAA"));
// fox자리에 AAA삽입.(문자 대체) -> str다시 불러와도 원본 유지↓
console.log(str);

str = str.replace(regexp1, "AAA");
// str 에 재할당하여 다시 불러우면 원본도 변경 ↓
console.log(str);


// 플레그(옵션)

// const regexp2 = /the/gi;
console.log(str.match(/the/gi));

console.log(str.match(/\.$/gim));