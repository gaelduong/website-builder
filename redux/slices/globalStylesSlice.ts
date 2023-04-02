import { Topic } from '@/types'
import { getRandomItem } from '@/utils/general'
import { createSlice, current } from '@reduxjs/toolkit'
import { options } from '@/config/globalStyles'

export interface GlobalVariantsType {
  topic?: Topic
  maxWidth: string
  text: {
    color: string
  }
  background?: {
    bgColor: string
  }
  cta: string
  button?: {
    bgColor: string
  }
}

const getGlobalVariants = () => {
  const selectedColors = getRandomItem(options.colorsOptions)

  const selectedGlobalConfig = {
    maxWidth: getRandomItem(options.maxWidthOptions),
    topic: getRandomItem(options.topicOptions),
    colors: selectedColors,
    typography: {
      fontFamily: '',
      sizes: getRandomItem(options.typographySizesOptions)
    },
    cta: getRandomItem(options.ctaOptions),
    h4TagStyleOptions: getRandomItem(options.h4TagStyleOptions)
  }

  return {
    topic: selectedGlobalConfig.topic,
    maxWidth: selectedGlobalConfig.maxWidth,
    text: {
      color: selectedGlobalConfig.colors.textColor,
      primaryColor: selectedGlobalConfig.colors.primaryTextColor,
      headerColor: selectedGlobalConfig.colors.headerColor
    },
    headings: {
      h1: {
        fontSize: selectedGlobalConfig.typography.sizes.h1.fontSize
      },
      h2: {
        fontSize: selectedGlobalConfig.typography.sizes.h2.fontSize
      },
      h3: {
        fontSize: selectedGlobalConfig.typography.sizes.h3.fontSize
      },
      h4: {
        fontSize: selectedGlobalConfig.typography.sizes.h4.fontSize
      }
    },
    background: {
      bgColor: selectedGlobalConfig.colors.backgroundColor
    },
    cta: selectedGlobalConfig.cta,
    button: {
      bgColor: selectedGlobalConfig.colors.buttonBackgroundColor,
      textColor: selectedGlobalConfig.colors.buttonTextColor
    },
    fill: {
      color: selectedGlobalConfig.colors.fillColor
    },
    h4TagStyleOptions: selectedGlobalConfig.h4TagStyleOptions
  }
}

const globalStylesSlice = createSlice({
  name: 'globalStyes',
  initialState: getGlobalVariants(),
  reducers: {
    randomizeGlobalStyles: state => {
      const newGlobalStyles = getGlobalVariants()
      Object.keys(state).forEach(key => {
        // @ts-ignore
        state[key] = newGlobalStyles[key]
      })
    }
  }
})

export const { randomizeGlobalStyles } = globalStylesSlice.actions

export default globalStylesSlice.reducer
