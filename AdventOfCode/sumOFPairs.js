const fs = require('fs').promises;

const parseLines = async ()=> {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n');
};

const solve = async ()=>{
   const lines =  await parseLines();
  // console.log(lines); gives data in string formate
  const numbers = lines.map(Number); // now the string will convert to numbers
  console.log(numbers);
}

solve();