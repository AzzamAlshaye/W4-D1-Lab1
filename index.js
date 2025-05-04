// 1. حساب مساحة المستطيل
// تخزين طول وعرض المستطيل، ثم حساب المساحة وطباعة النتيجة
const length = 5; // مثال: الطول
const width = 3; // مثال: العرض
const area = length * width;
console.log("The area of the rectangle is: " + area);

// 2. محول درجة الحرارة
// من مئوية إلى فهرنهايت
const celsius = 25; // مثال: 25°C
const fahrenheitFromC = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C is ${fahrenheitFromC}°F`); // 25°C is 77°F

// من فهرنهايت إلى مئوية
const fahrenheit = 77; // مثال: 77°F
const celsiusFromF = ((fahrenheit - 32) * 5) / 9;
console.log(`${fahrenheit}°F is ${celsiusFromF}°C`); // 77°F is 25°C

// 3. من ساعة إلى ثانية
// تخزين عدد الساعات، وعدد الثواني في الساعة، ثم حساب الإجمالي
const hours = 2; // مثال: 2 ساعات
const secondsPerHour = 3600; // 1 ساعة = 3600 ثانية
const totalSeconds = hours * secondsPerHour;
console.log(`${hours} hours = ${totalSeconds} Seconds`); // 2 hours = 7200 Seconds

// 4. Concatenation
// تعريف متغيرين وطباعة قيمتهما مرة واحدة باستخدام concatenation
const thingOne = "Hello";
const thingTwo = "World";
console.log(thingOne + " " + thingTwo); // Hello World

// 5. Total bill
// استخدام var كما هو مطلوب: حساب الفاتورة، البقشيش (15%)، والمجموع
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15; // 15% من قيمة الفاتورة
var total = bill + tip;
console.log(total); // يطبع إجمالي المبلغ (bill + tip)

// 6. Mad Libs
const adjective1 = "amazing";
const adjective2 = "fun";
const adjective3 = "entertaining";
const madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib);

// 7. Awesome Message
const firstName = "Azzam";
const interest = "Tech";
const hobby = "play video games";
const awesomeMessage =
  "Hi, my name is " +
  firstName +
  ". I love " +
  interest +
  ". In my spare time, I like to " +
  hobby +
  ".";
console.log(awesomeMessage);
