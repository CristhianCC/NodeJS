const fs = require('fs');
let base = 3;
console.clear();

console.log('====================');
console.log(`   Tabla del: ${base}`);
console.log('====================');

let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile(`tabla_${base}.txt`, salida, (err) => {
    if (err) {
        throw err;
    }
    console.log(`tabla_${base}.txt creada!`);
});

console.log(salida);