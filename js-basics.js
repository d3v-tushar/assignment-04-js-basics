// Problem:1  radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
function radianToDegree(){
    let degree = (180 * radian) / Math.PI;
    if(typeof radian !== 'number'){
        return 'Please enter valid data. \nYou data type is not a number';
    }
    else{
        return parseFloat(degree.toFixed(2));
    }
}
let radian = 10;
console.log(radianToDegree(radian));




// Problem:2  isJavaScriptFile 
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
function isJavaScriptFile(){
    if(typeof fileName != 'string') {
        return 'Please enter valid data. \nYou data type is not a string';
    }
    else if(fileName.toLowerCase().endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
}
const fileName = 'index.js';
const file = isJavaScriptFile(fileName);
console.log(file);




// Problem 3: oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    if(typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number'){
        return 'Please enter valid data. \nYou data type is not a number';
    }
    else{
        const dieselPerLitre = 114;
        const petrolPerLitre = 130;
        const octanePerLitre = 135;
    
        const dieselPrice = dieselQuantity * dieselPerLitre;
        const petrolPrice = petrolQuantity * petrolPerLitre;
        const octanePrice = octaneQuantity * octanePerLitre;
        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }

}
const totalBill = oilPrice(30, 20, 10);
console.log(totalBill);




// Problem 4: publicBusFare
// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 
function publicBusFare(){
    if(typeof peopleCount !== 'number'){
        return 'Please enter valid data. \nYou data type is not a number';
    }
    else{
        return ((peopleCount % 50) % 11) * 250;
    }
}
const peopleCount = 117;
console.log(publicBusFare(peopleCount));




// Problem 5: isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
function isBestFriend() {
    if (typeof friends.name !== 'string' ||
        typeof anothFriends.friend !== 'string' ||
        typeof anothFriends.name !== 'string' ||
        typeof friends.friend !== 'string') {
        return 'Please enter valid data.\n You data type is not a string';
    }

    else if (friends.name == anothFriends.friend && anothFriends.name == friends.friend) {
        return true;
    }

    else {
        return false;
    }
}
let friends = {name: 'tushar', friend: 'jhankar'};
let anothFriends = { name: 'jhankar', friend: 'tushar'};
let bestFriends = isBestFriend(friends, anothFriends);
console.log(bestFriends);
