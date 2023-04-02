import { getRandomItem } from '@/utils/general'
import { text } from '@/utils/text'

const getHero = () => {
  const options = [
    {
      col: 2,
      contentIds: [12, 0]
    },
    {
      col: 2,
      contentIds: [0, 12]
    },
    {
      col: 1,
      contentIds: [12]
    },
    {
      col: 1,
      contentIds: [13]
    }
  ]

  return getRandomItem(options)
}

const getInfo1 = () => {
  const options = [
    [
      {
        col: 2,
        contentIds: [0, getRandomItem([4, 5, 9])],
        headings: {
          heading: text(3, 5),
          subheading: text(5, 10, false)
        }
      },
      { col: 2, contentIds: [getRandomItem([4, 5, 9]), 0] }
    ],
    [
      {
        col: 2,
        contentIds: [getRandomItem([4, 5, 9]), 0],
        headings: {
          heading: text(3, 5),
          subheading: text(5, 10, false)
        }
      },
      { col: 2, contentIds: [0, getRandomItem([4, 5, 9])] }
    ]
  ]
  return getRandomItem(options)
}

const getInfo2 = () => {
  const options = [
    [
      {
        col: 3,
        contentIds: [...Array(getRandomItem([3, 4, 5]))].map((i: any) => 2),
        headings: {
          heading: text(3, 5),
          subheading: text(5, 10, false)
        }
      },
      { col: 2, contentIds: [getRandomItem([4, 5, 9]), 0] },
      { col: 4, contentIds: [2, 2, 2, 2] }
    ],
    [
      { col: 3, contentIds: [1, 1, 1, 1] },
      { col: 2, contentIds: [0, getRandomItem([4, 5, 9])] },
      {
        col: 3,
        contentIds: [3, 3, 3],
        headings: {
          heading: text(3, 5),
          subheading: text(5, 10, false)
        }
      }
    ]
  ]
  return getRandomItem(options)
}

/*

    2col item: 9
*/

export const generateLayout2 = () => [
  getHero(),

  {
    col: 2,
    contentIds: [0, 9],
    headings: {
      heading: text(3, 5),
      subheading: text(5, 10, false)
    }
  },
  {
    col: 2,
    contentIds: [9, 0]
  },
  {
    col: 2,
    contentIds: [0, 0],
    headings: {
      heading: text(3, 5),
      subheading: text(5, 10, false)
    }
  },
  {
    col: 2,
    contentIds: [1, 1],
    headings: {
      heading: text(3, 5),
      subheading: text(5, 10, false)
    },
    randomSeed: getRandomItem([1, 2, 3])
  },
  {
    col: 2,
    contentIds: [1, 1]
  },
  {
    col: 3,
    contentIds: [1, 1, 1],
    randomSeed: getRandomItem([2])
  }

  //   {
  //     col: 2,
  //     contentIds: [3, 3]
  //   },
  //   {
  //     col: 3,
  //     contentIds: [3, 3, 3]
  //   },
  //   {
  //     col: 2,
  //     contentIds: [4, 4]
  //   },
  //   {
  //     col: 3,
  //     contentIds: [4, 4, 4]
  //   },
  //   {
  //     col: 2,
  //     contentIds: [5, 5]
  //   },
  //   {
  //     col: 3,
  //     contentIds: [5, 5, 5]
  //   },
  //   {
  //     col: 2,
  //     contentIds: [6, 6]
  //   },
  //   {
  //     col: 3,
  //     contentIds: [6, 6, 6]
  //   },
  //   {
  //     col: 2,
  //     contentIds: [7, 7]
  //   },
  //   {
  //     col: 3,
  //     contentIds: [7, 7, 7]
  //   },
  //   {
  //     col: 2,
  //     contentIds: [8, 8]
  //   },
  //   {
  //     col: 3,
  //     contentIds: [8, 8, 8]
  //   },
  //   {
  //     col: 2,
  //     contentIds: [9, 9]
  //   },
  //   {
  //     col: 3,
  //     contentIds: [9, 9, 9]
  //   },
  //   {
  //     col: 2,
  //     contentIds: [10, 10]
  //   },
  //   {
  //     col: 1,
  //     contentIds: [11]
  //   }
]

export const generateLayout = () => [getHero(), ...getInfo1(), ...getInfo2()]
