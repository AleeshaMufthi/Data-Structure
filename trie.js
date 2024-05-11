class Node {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new Node();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }
  
  // Example usage:
  
  const trie = new Trie();
  
  trie.insert("hello");
  trie.insert("hey");
  trie.insert("world");
  
  console.log(trie.search("hello")); // Output: true
  console.log(trie.search("worlds")); // Output: false
  
  console.log(trie.startsWith("he")); // Output: true
  console.log(trie.startsWith("xyz")); // Output: falsehh