const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const goingToSleep = () => 'Partiu dormir!!';
const doingThings = (func) => func();

console.log(doingThings(breakfast));

