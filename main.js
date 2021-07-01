let str = `
010-1234-5678
cjs42552@naver.com
https://regexr.com/
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.
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

// 패턴 (표현1)

console.log(str.match(/d$/gm));
console.log(str.match(/^t/gim));
console.log(str.match(/h..p/g));
console.log(str.match(/jumps|lazy/g));
console.log(str.match(/https?/g));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/\b\w{2,3}\b/g));
// \w -> 숫자를 포함한 영어 알파벳 문자 \b -> 문자 경계

// 패턴 (표현2)
console.log(str.match(/[dog]/g));
console.log(str.match(/[0-9]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));
console.log(str.match(/\bj\w{1,}\b/g));
console.log(str.match(/\d/g));

const h = ` the hello world        !

`
console.log(h.match(/\s/g));
console.log(h.replace(/\s/g, ''));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));