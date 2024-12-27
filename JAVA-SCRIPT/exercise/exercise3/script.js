/* Write your code below. Good luck! 🙂 */

let mark = {
    fullName: "Mark Millner",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`);
} else if (john.bmi > mark.bmi){
    console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`);
} 

