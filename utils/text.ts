import randomWords from 'random-words'

import { LoremIpsum } from 'lorem-ipsum'
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4
//   }
// })

// console.log(lorem.generateParagraphs(2))
// lorem.generateSentences(5)
// lorem.generateParagraphs(7)

export const text = (min: number, max: number, capitalize = true): string => {
  const result = randomWords({ min, max }).join(' ')

  // if (capitalize) return result.replace(/(^\w|\s\w)/g, m => m.toUpperCase())

  return result.charAt(0).toUpperCase() + result.slice(1)
}
