class TrieNode {
  // @ts-ignore
  children: Map<string, TrieNode | null>

  constructor() {
    // @ts-ignore
    this.children = new Map();
  }
}

class Tries {
  private readonly root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  collectAllWords(node: TrieNode = this.root, word: string = '', words: string[] = []): string[] {
    for (const [key, childNode] of node.children.entries()) {
      if (key === '*') words.push(word);
      else this.collectAllWords(childNode!, word + key, words);
    }
    return words;
  }

  getAllKeys(node: TrieNode = this.root) {
    for (const [key, childNode] of node.children.entries()) {
      console.log(key);
      if (key !== '*') this.getAllKeys(childNode!);
    }
  }

  autocorrect(word: string) {
    const foundWord = this.search(word);
    if (!foundWord) {
      let term = '';
      for (const char of word) {
        const found = this.search(term);
        if (found) {
          term += char;
          console.log('found', found);
          console.log('term', term);
        }
        // console.log(found)
      }
    }
    return word
  }

  autocomplete(prefix: string) {
    const currentNode = this.search(prefix);
    if (!currentNode) return null;
    return this.collectAllWords(currentNode);
  }

  insert(word: string) {
    let currentNode = this.root;
    for (const character of word) {
      if (currentNode.children.get(character)) currentNode = currentNode.children.get(character)!;
      else {
        const child = new TrieNode();
        currentNode.children.set(character, child);
        currentNode = child;
      }
    }
    currentNode.children.set('*', null)
  }

  search(character: string): null | TrieNode {
    let currentNode = this.root;
    for (const char of character) {
      if (currentNode.children.has(char)) currentNode = currentNode.children.get(char)!;
      else return null
    }
    return currentNode;
  }
}

const trie = new Tries();
trie.insert('cat');
trie.insert('cattery');
trie.insert('cathode')
const found = trie.search('ca');
console.log(found)
const words = trie.collectAllWords();
console.log(words)
console.log(trie.autocomplete('cast'));
trie.getAllKeys();
const catTrie = new Tries();
catTrie.insert('cat')
catTrie.insert('catnap')
catTrie.insert('catnip')
console.log('AUTOCORRECT')
const corr = catTrie.autocorrect('catnar');
console.log(corr)