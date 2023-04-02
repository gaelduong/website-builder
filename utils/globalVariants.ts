import { store } from '@/redux/store'
import { getRandomItem } from './general'
import {
  furniture_item_1,
  furniture_item_2,
  furniture_item_3,
  furniture_normal_1,
  furniture_normal_2,
  pokemon1,
  pokemon2,
  pokemon3,
  pokemon4,
  pokemon5,
  dashboard,
  img6,
  img5,
  sushi1,
  sushi2,
  sushi3,
  sushi4,
  sushi5,
  clothing1,
  clothing2,
  clothing3,
  clothing4,
  clothing5
} from '@/public/images'
import { Topic } from '@/types'

export const getTextColor = () => {
  const { globalStyles } = store.getState()
  return globalStyles.text.color
}

export const getH1Styles = () => {
  const { globalStyles } = store.getState()
  return `${globalStyles.headings.h1.fontSize} ${globalStyles.text.headerColor}`
}

export const getH2Styles = () => {
  const { globalStyles } = store.getState()
  return `font-extrabold ${globalStyles.headings.h2.fontSize} ${globalStyles.text.headerColor}`
}

export const getH3Styles = () => {
  const { globalStyles } = store.getState()
  return `${globalStyles.headings.h3.fontSize} ${globalStyles.text.headerColor}`
}

export const getH4Styles = () => {
  const { globalStyles } = store.getState()
  return `${globalStyles.headings.h4.fontSize} ${globalStyles.text.primaryColor}`
}

export const getBgColor = () => {
  const { globalStyles } = store.getState()
  return globalStyles.background?.bgColor
}

export const getFillColor = () => {
  const { globalStyles } = store.getState()
  return globalStyles.fill?.color
}

export const getButtonPrimaryColor = () => {
  const { globalStyles } = store.getState()
  return globalStyles.button?.bgColor
}

export const getCTAStyles = () => {
  const { globalStyles } = store.getState()
  return `${globalStyles.button.textColor} ${globalStyles.button?.bgColor} ${globalStyles.cta}`
}

export const getMaxWidth = () => {
  const { globalStyles } = store.getState()
  return globalStyles.maxWidth
}

export const geth4TagStyles = () => {
  const { globalStyles } = store.getState()
  return globalStyles.h4TagStyleOptions
}

const Images = {
  [Topic.Pokemon]: {
    hero: dashboard,
    normal: [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5],
    item: [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5],
    icon: pokemon1
  },
  [Topic.Furniture]: {
    hero: dashboard,
    normal: [furniture_normal_1, furniture_normal_2],
    item: [furniture_item_1, furniture_item_2, furniture_item_3],
    icon: furniture_item_1
  },
  [Topic.Saas]: {
    hero: dashboard,
    normal: [dashboard, img6, img5],
    item: [dashboard, img6, img5],
    icon: dashboard
  },
  [Topic.Sushi]: {
    hero: dashboard,
    normal: [sushi1, sushi2, sushi3, sushi4, sushi5],
    item: [sushi1, sushi2, sushi3, sushi4, sushi5],
    icon: dashboard
  }
  // [Topic.Clothing]: {
  //   hero: dashboard,
  //   normal: [clothing1, clothing2, clothing3, clothing4, clothing5],
  //   item: [clothing1, clothing2, clothing3, clothing4, clothing5],
  //   icon: dashboard
  // }
}

export const getNormalImage = () => {
  const { subject }: { subject: Topic } = store.getState().subject
  return getRandomItem(Images[subject].normal)
}

export const getItemImage = () => {
  const { subject }: { subject: Topic } = store.getState().subject
  return getRandomItem(Images[subject].item)
}
