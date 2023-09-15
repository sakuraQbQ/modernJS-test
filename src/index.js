/**
 * const letの変数宣言
 */

//  var val1 ="var変数";
//  console.log(val1);

//  //var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);

//  //var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 ="const変数";
// console.log(val3);

// //const変数は上書き不可能
// val3 = "let変数を上書き";

// //const変数は再宣言不可能
// const val3 = "let変数を再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// val4.name = "jak";
// console.log(val4);
// val4.address = "Hiroshima";

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  *
//  */
// const name = "じゃけえ";
// const age = 28;

// //私の名前はじゃけえです。年齢は28歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// //従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 =(num1 ,num2) => num1 + num2;
// console.log(func3(177,12));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// //オブジェクトの分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['じゃけえ',28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// /**
//  * デフォルト値
//  */

// const sayHello = (name = "gest") => console.log(`こんにちは${name}さん`); //引数がなかった時のデフォルト値を設定しておける
// sayHello("じゃけえ");
// sayHello();

/**
 * スプレッド構文
 */

// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 15];
// const arr5 = [20, 30];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //参照引き継がれない
// const arr8 = [...arr4];
// arr8[0] =100;
// console.log(arr8);
// console.log(arr4);

// //参照が引き継がれる（元の配列も変更されてしまう）
// const arr9 = arr4;
// arr9[0] =100;
// console.log(arr9);
// console.log(arr4);

/**
 * mapやfiltrrを使った配列の処理
 */

// const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// //  const nameArr2 = nameArr.map((name)=>{
// //   return name;
// //  })
// //  console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

// //ある条件？条件がTrueの時：条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());
// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(90, 5));
// console.log(checkSum(150,-55));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("１か２はTrueになります");
// }
// if (flag1 && flag2) {
//   console.log("１も２もTrueになります");
// }

// ||は左側がfalseだった場合右側を返す
// const num = 20; //null =false
// const fee = num || "金額未設定です";
// console.log(fee);

// //  &&は左側がtrueだった場合右側を返す
// const num2 = 20;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
