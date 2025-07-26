//input array of strings 
// fucntion 1 - setup -> it will the dict of words
//second fn - isInDict(word) -> return true if in dict otherwise false
const fs = require('fs');

const createNode = () => ({ children: {}, isWord: false });

const insertTrie = (trie, word) =>
  word.split('').reduce(([node, root], char, idx) => {
    if (!node.children[char]) {
      node.children[char] = createNode();
    }
    const nextNode = node.children[char];
    if (idx === word.length - 1) nextNode.isWord = true;
    return [nextNode, root];
  }, [trie, trie])[1];

const searchPartialTrie = (trie, word) => {
  let node = trie;
  for (const char of word) {
    node = node.children[char];
    if (!node) return false;
  }
  return true; // as long as path exists, it's a partial match
};

const traverseTrie = (node, path = '') => {
  if(node.isWord) {
    console.log(`Word: ${path}`);
  }
  for(const char in node.children ){
    traverseTrie(node.children[char], path + char);
  }
}
const testIfChildren = (node) => {
  for (const char in node.children) {
    const childNode = node.children[char];
    // console.log(`test here: ${char}`, JSON.stringify(childNode, null, 2));
    testIfChildren(childNode)
  }
};

const setupHybrid = (dict) => {
  const trie = createNode();
  const seen = new Set();

  for (const word of dict) {
    if (seen.has(word) || searchPartialTrie(trie, word)) return testIfChildren(trie), true;
    seen.add(word);
    insertTrie(trie, word);
  }
  testIfChildren(trie)
  // fs.writeFileSync('./javascript/trie.json', JSON.stringify(trie, null, 2));
  return {matches: false, trie};
};
// console.log(traverseTrie(JSON.parse(fs.readFileSync('./javascript/trie.json', 'utf8'))));
// console.log(JSON.stringify(setupHybrid(['cat', 'dog', 'fish', 'car']), null, 2)) //false
// console.log(setupHybrid(['cat', 'dog', 'fish', 'ca'])) //true 



const createNode1 = () => ({ children: {}, isWord: false});

const searchPartialTrie1 = (trie, word) => {
  let node = trie;
  for (const char of word) {
    node = node.children[char]
    if(!node) return false;
  }
  return true;
}
const insertNewWord = (trie, word) => {
  let node = trie;
  for (const char of word) {
    if(!node.children[char]) {
      node.children[char] = createNode1(); 
    }
    node = node.children[char];
  }
  node.isWord = true;
  
}

const hybrid1 = (dict) => {
  const trie = createNode1();
  const seen = new Set();

  for ( const word of dict ) {
    if( seen.has(word) || searchPartialTrie1(trie, word)) return true;
    seen.add(word)
    insertNewWord(trie, word)
  }
  return false;
}

//turn below on to see output of second attempt
// console.log('test1', hybrid1(['cat', 'dog', 'fish', 'car', 'at']))


const words = ['cat', 'dog', 'fish', 'car', 'at', 'test this']
const setMe = words.reduce((set, word) => {
  set.add(word)
  
  word.split('').forEach((_, idx) => {
    const start = word.slice(0, idx);
    const end = word.slice(idx + 1);
    
    const partialWord = `${start}*${end}`;
    set.add(partialWord);
  });
  return set;
}, new Set());

const isInDict = (word) => {
  const regex = new RegExp(`^${word.replace('*', '.*')}$`);
  // words.some((word) => {
  //   console.log(regex.test(word))
  // })
  return setMe.has(word);
}
  
// console.log(set)
console.log(isInDict('jo*')) //false
console.log(isInDict('test thi*')) //true
console.log(isInDict('*est this')) //true



// dumb implementation of this if we want to swap the data structure
// console.log(words.some(word => word.includes('ct')));
