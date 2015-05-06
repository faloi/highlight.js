/*
Language: Gobstones
Author: Federico Aloi <federico.aloi@gmail.com>
Description: A programming language designed for teaching the fundamental abstractions for algorithmic problem solving
*/

function(hljs) {
  return {
    keywords: {
      keyword: 'program procedure function return if then else switch repeat while foreach in',
      literal: 'Verde|10 Azul|10 Rojo|10 Negro|10 Norte|10 Este|10 Sur|10 Oeste|10 False True',
      built_in: 'Poner Sacar Mover IrAlBorde VaciarTablero',
      operator: 'not div mod siguiente previo opuesto hayBolitas nroBolitas puedeMover minBool maxBool minDir maxDir minColor maxColor'
    },
    contains: [ 
      hljs.NUMBER_MODE, 
      hljs.C_LINE_COMMENT_MODE, 
      hljs.C_BLOCK_COMMENT_MODE, 
      hljs.HASH_COMMENT_MODE,
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: /[a-z][0-9A-Za-z'_]*/}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.HASH_COMMENT_MODE
            ],
          }
        ],
      }
    ]
  }
}
