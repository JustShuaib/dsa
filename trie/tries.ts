export class TrieNode {
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

  /**
   * Write a function that traverses each node of a trie and prints each key,
   * including all "*" keys
   * @param node
   */
  getAllKeys(node: TrieNode = this.root) {
    for (const [key, childNode] of node.children.entries()) {
      console.log(key);
      if (key !== '*') this.getAllKeys(childNode!);
    }
  }

  /**
   * Write an autocorrect function that attempts to replace a user’s typo with
   * a correct word. The function should accept a string that represents text
   * a user typed in. If the user’s string is not in the trie, the function should
   * return an alternative word that shares the longest possible prefix with
   * the user’s string
   * @param word
   */
  autocorrect(word: string) {
    let currentNode = this.root;
    let prefix: string = '';
    for (const char of word) {
      if (currentNode.children.has(char)) {
        prefix += char;
        currentNode = currentNode.children.get(char)!;
      } else return prefix + this.collectAllWords(currentNode)[0];
    }
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
trie.insert('catnap')
trie.insert('catnip')
const found = trie.search('ca');
console.log(found)
const words = trie.collectAllWords();
console.log(words)
console.log(trie.autocomplete('cast'));
trie.getAllKeys();
const corr = trie.autocorrect('catnar');
console.log(corr)