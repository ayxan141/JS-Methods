// TASK 1
// 1. const arr = [1,2,4,12,56,547] bu arrayde butun ededleri 2-ye vurub yeni array yaradin
// const arr = [1, 2, 4, 12, 56, 547];

// const newArr = arr.map(num => num * 2);

// console.log(newArr);

// TASK 2
// 2. const arr = [5,8,11,20,7] bu arrayda yalniz cut ededleri sechin
// const arrr = [5, 8, 11, 20, 7];

// const evenNumbers = arrr.filter(num => num % 2 === 0);

// console.log(evenNumbers);

// TASK 3
// 3. const arr = ["alma", "armud", "chiyelek", "mandalina"] arrayde neche element oldugunu tap
// const arrrr = ["alma", "armud", "chiyelek", "mandalina"];

// const count = arr.length;

// console.log(count);

// TASK 4
//4. const arr = [3,6,9] arrayde butun ededlerin cemini tapn
// const ar = [3, 6, 9];

// const sum = arr.reduce((total, num) => total + num, 0);

// console.log(sum);


// 5. Array-də "js" sözünün olub-olmadığını yoxla

// const arr5 = ["c#", "sql", "html", "css", "scss", "js", "react"];
// console.log(arr5.includes("js")); 

// 6. Array-i əlifba sırasına görə düz

// const arr6 = ["banan", "alma", "gilas"];
// console.log(arr6.sort());

// 7. 10-dan böyük ədədlərin kvadratını tap

// const arr7 = [4, 12, 7, 20];
// const result7 = arr7.filter(n => n > 10).map(n => n * n);
// console.log(result7);

// 8. Array-də ən böyük elementi tap

// const arr8 = [5, 18, 2, 30];
// console.log(Math.max(...arr8));

// 9. 10-dan böyük ilk ədədi tap

// const arr9 = [3, 7, 12, 5, 20];
// console.log(arr9.find(n => n > 10));

// 10. Array-i tərsinə çevir

// const arr10 = ["a", "b", "c", "d"];
// console.log(arr10.reverse());

// 11. Bütün ədədlərin cəmi 50-dən böyükdürmü?

// const arr11 = [10, 15, 20, 8];
// const sum11 = arr11.reduce((a, b) => a + b, 0);
// console.log(sum11 > 50);

// 12. "scss" sözünün indexini tap

// const arr12 = ["c#", "sql", "html", "css", "scss", "js", "react"];
// console.log(arr12.indexOf("scss"));

// 13. Array-də ən azı bir string varmı?

// const arr13 = [1, 2, "js", true];
// console.log(arr13.some(item => typeof item === "string"));

// 14. Bütün ədədlər müsbətdirmi?

// const arr14 = [3, 7, 1, 9];
// console.log(arr14.every(n => n > 0));

// 15. Bütün istifadəçilərin yaşı 18-dən böyükdürmü?

// const arr15 = [
//   { name: "Aysel", age: 22 },
//   { name: "Murad", age: 19 }
// ];
// console.log(arr15.every(user => user.age > 18));

// 16. İki array-i birləşdir

// const newArr = [1, 2, 3].concat([4, 5, 6]);
// console.log(newArr);

// 17. 2-ci elementi "scss" ilə əvəz et

// const arr17 = ["html", "css", "js"];
// arr17[1] = "scss";
// console.log(arr17);



// LOCALSTORAGE 
// 1. LocalStorage-ə ad yaz

// localStorage.setItem("username", "Ayxan");

// 2. Oxu və console-a çıxar

// console.log(localStorage.getItem("username"));

// 3. Number yaz və tipini yoxla

// localStorage.setItem("age", 25);
// const age = localStorage.getItem("age");
// console.log(age, typeof age); // string

// 4. Obyekti LocalStorage-də saxla

// const user = { name: "Aysel", age: 22 };
// localStorage.setItem("user", JSON.stringify(user));

// 5. Obyekti oxu və object-ə çevir

// const savedUser = JSON.parse(localStorage.getItem("user"));
// console.log(savedUser);

// 6. isLogged açarı yarat

// localStorage.setItem("isLogged", JSON.stringify(true));

// 7. isLogged true-dursa "Welcome" yazdır

// const isLogged = JSON.parse(localStorage.getItem("isLogged"));
// if (isLogged) {
//   console.log("Welcome");
// }

// 8. İstənilən bir açarı sil

// localStorage.removeItem("age");

// 9. LocalStorage-də neçə məlumat var

// console.log(localStorage.length);

// 10. Bütün LocalStorage-ni sil

// localStorage.clear();















