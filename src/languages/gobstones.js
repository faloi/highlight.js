/*
Language: Gobstones
Author: Federico Aloi <federico.aloi@gmail.com>
Description: A programming language designed for teaching the fundamental abstractions for algorithmic problem solving
*/

function(hljs) {
  return {
    keywords: 'program procedure function',
    contains: [ hljs.NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.HASH_COMMENT_MODE ]
  }
}
