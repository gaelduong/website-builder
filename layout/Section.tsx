import { renderToString } from 'react-dom/server'
import {
  SIDE_SHORT_HEAD_SHORT_PAR_CTA,
  FULL_IMG,
  FULL_IMG_H_LP,
  FULL_IMG_H_SP_CTA,
  HALF_IMG,
  H_LP,
  H_LP_CTA,
  H_LP_LIST,
  H_P_H_P,
  ICON_H_LP,
  ICON_H_P_ICON_H_P,
  SHORT_HEAD_SHORT_PAR_CTA,
  SMALL_IMG,
  TAG_H_LP,
  H1_P_CTA,
  H1_P_IMG_CTA
} from '@/content/Contents'
import {
  getBgColor,
  getH2Styles,
  getMaxWidth,
  getTextColor
} from '@/utils/globalVariants'
import { Roboto, Inter } from 'next/font/google'
import { useSelector } from 'react-redux'
import React from 'react'

const inter = Inter({
  weight: '400',
  subsets: ['latin']
})

const contentMap = {
  0: FULL_IMG,
  1: FULL_IMG_H_LP,
  2: FULL_IMG_H_SP_CTA,
  3: H_LP,
  4: H_LP_CTA,
  5: H_P_H_P,
  6: ICON_H_LP,
  7: ICON_H_P_ICON_H_P,
  8: TAG_H_LP,
  9: H_LP_LIST,
  10: SHORT_HEAD_SHORT_PAR_CTA,
  11: SIDE_SHORT_HEAD_SHORT_PAR_CTA,
  12: H1_P_CTA,
  13: H1_P_IMG_CTA
}

enum Screen {
  mobile = 'mobile',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

enum FlexDirection {
  row = 'row',
  col = 'col'
}

interface FlexContainerConfig {
  screen: Screen
  flexDirection: FlexDirection
}

interface FlexItemsConfig {
  screen: Screen
  widthInPercent: number
}

interface FlexRowProps {
  config?: {
    gap: number
    flexContainerConfigs: FlexContainerConfig[]
    flexItemsConfigs: FlexItemsConfig[]
  }

  children?: any[]
}

interface SectionProps {
  col: number
  contentIds: number[]
  randomSeed?: number
  headings?: {
    heading?: string
    subheading?: string
  }
}

const Section = ({ col, contentIds, randomSeed, headings }: SectionProps) => {
  const { globalStyles } = useSelector((state: any) => state)

  const configs = {
    config: {
      gap: 8,
      flexContainerConfigs: [
        {
          screen: Screen.mobile,
          flexDirection: FlexDirection.col
        },
        {
          screen: Screen.sm,
          flexDirection: FlexDirection.row
        },
        {
          screen: Screen.md,
          flexDirection: FlexDirection.row
        }
      ],
      flexItemsConfigs: [
        {
          screen: Screen.mobile,
          widthInPercent: 100
        },
        {
          screen: Screen.sm,
          widthInPercent: 100 / (col - 1)
        },
        {
          screen: Screen.md,
          widthInPercent: 100 / col
        }
      ]
    }
  }

  const configProp = configs.config

  const flexContainerConfigsString = configProp.flexContainerConfigs
    .map(({ screen, flexDirection }) => {
      if (screen === Screen.mobile) return `flex-${flexDirection}`

      return `${screen}:flex-${flexDirection}`
    })
    .join(' ')

  const gap = configProp.gap
  const gapRem = gap / 4

  const flexItemsConfigString = configProp.flexItemsConfigs
    .map(({ screen, widthInPercent }) => {
      // const width = `calc(${widthInPercent}%-${gapRem}rem)`

      // if (screen === Screen.mobile) return `w-[${width}]`

      // console.log(`${screen}:w-[${width}]`)

      if (col === 1) {
        return 'w-[calc(100%-2rem)]'
      }

      if (col === 2) {
        return 'w-[calc(100%-2rem)] sm:w-[calc(50%-2rem)]'
      }
      if (col === 3) {
        return 'w-[calc(100%-2rem)] sm:w-[calc(50%-2rem)] md:w-[calc(33.33%-2rem)]'
      }
      if (col === 4) {
        return 'w-[calc(100%-2rem)] sm:w-[calc(33.33%-2rem)] md:w-[calc(25%-2rem)]'
      }
      // return `${screen}:w-[${width}]`
    })
    .join(' ')

  const flexItems = contentIds.map((contentId: any, idx: number) => {
    /* @ts-ignore */
    const Item = contentMap[contentId]
    return (
      <div
        suppressHydrationWarning
        key={idx}
        className={`${flexItemsConfigString} ${getTextColor()} ${
          inter.className
        } `}
      >
        {/* @ts-ignore */}
        <Item randomSeed={randomSeed} />
      </div>
    )
  })

  const gapStr = `gap-${gap}`

  const comp = (
    <section className={`${getBgColor()} py-20`}>
      <div
        suppressHydrationWarning
        className={`${getMaxWidth()} mx-auto px-4 md:px-8 space-y-12`}
      >
        {headings && (
          <div
            suppressHydrationWarning
            className=" max-w-screen-md mx-auto text-center space-y-4"
          >
            {headings.heading && (
              <h2
                suppressHydrationWarning
                className={`${getH2Styles()} font-bold`}
              >
                {headings.heading}
              </h2>
            )}

            {headings.subheading && (
              <p
                suppressHydrationWarning
                className="mt-4 text-lg text-gray-500 "
              >
                {headings.subheading}
              </p>
            )}
          </div>
        )}
        {/* <div suppressHydrationWarning className=" max-w-screen-md space-y-4">
          <h2 className="text-3xl font-bold text-gray-700 ">Some heading</h2>
          <p suppressHydrationWarning className="mt-4 text-lg text-gray-500 ">
            A long and sweet sub-heading used to add more description
          </p>
        </div> */}
        <div
          suppressHydrationWarning
          className={`flex flex-wrap ${flexContainerConfigsString} ${gapStr} items-center`}
        >
          {flexItems}
        </div>
      </div>
    </section>
  )

  const htmlString = renderToString(comp).replaceAll('class=', 'className=')

  //   console.log(htmlString)

  return comp
}

export default Section
