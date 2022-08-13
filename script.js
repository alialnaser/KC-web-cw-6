alert("مرحباً بك في موقعي الذي سيحسب درجتك!!")

let grade = prompt("اكتب درجتك بالأرقام")

console.log(grade);

if (grade >= 90) {
console.log("%c لقد حصلت على امتياز 🥳", "color: #21E1E1")
} else if (grade >= 80) {
    console.log("%c لقد حصلت على جيد جداً🤩", "color: #ADCF9F")
} else if (grade >= 70) {
    console.log( "%c لقد حصلت على جيد🙂", "color: #E8AA42")
} else if (grade >= 60) {
    console.log("%c لقد حصلت على مقبول😕", "color: #CA4E79")
} else if (grade >= 50) {
    console.log("%c لقد حصلت على ضعيف☹️", "color: #FF1E00")
} else {
    console.log("راسب💔")
}
//this is a comment