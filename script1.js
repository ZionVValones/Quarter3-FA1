let nickname = "Zion";
let heightInches = 62;
let weightKg = 50;

let feet = Math.round(heightInches / 12);
let inches = heightInches % 12;
let weightLbs = (weightKg * 2.20462);
Math.round(weightLbs);

alert(`Name: ${nickname}\nHeight: ${feet}'${inches}\"\nWeight: ${weightLbs} lbs`);
