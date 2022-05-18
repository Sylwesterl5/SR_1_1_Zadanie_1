const YEAR = 2100;

if ((YEAR % 4 === 0 && YEAR % 100 !== 0) || YEAR % 400 === 0) {
    console.log(`Rok ${YEAR} jest rokiem przestępnym`);
} else {
    console.log(`Rok ${YEAR} nie jest rokiem przestępnym`);
}