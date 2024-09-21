
const turingMachine = lerJSON();
let fita = lerFita();


console.log(fita);

// Execução -> Árvore? Arrays? 

// Escrever a fita resultante + ACEITA/REJEITA.


function lerJSON(){
    const fs = require('fs');
    const info = fs.readFileSync('states.json', 'utf8');
    return JSON.parse(info);
}

function lerFita(){
    const fs = require('fs')
    fs.readFile('problem.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      return toString(data);
    })
}