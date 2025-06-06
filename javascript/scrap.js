const IdxHashMap = require('indexed-hash-map');

const idxMap = new IdxHashMap();

idxMap.set(0, 'Ari');
idxMap.set('name', ['goodbye','goodbye again'])


console.log(idxMap.find(0))
console.log(idxMap.find("name"))
console.log(idxMap.includes('name'))

