import { Topic } from '@/types'

export const options = {
  colorsOptions: [
    {
      backgroundColor: 'bg-[#FFFFFF]',
      buttonBackgroundColor: 'bg-[#131821]',
      textColor: 'text-[#212936]',
      headerColor: 'text-[#282828]',
      primaryTextColor: 'text-[orange]',
      fillColor: 'fill-[#131821]',
      buttonTextColor: 'text-[#FFFFFF]'
    },
    {
      backgroundColor: 'bg-[#FFFFFF]',
      buttonBackgroundColor: 'bg-[#DEAA5C]',
      textColor: 'text-[#212936]',
      headerColor: 'text-[#282828]',
      primaryTextColor: 'text-[orange]',
      fillColor: 'fill-[#DEAA5C]',
      buttonTextColor: 'text-[#FFFFFF]'
    },
    {
      backgroundColor: 'bg-[#FAF1EB]',
      buttonBackgroundColor: 'bg-[#C07444]',
      textColor: 'text-[#131821]',
      headerColor: 'text-[#282828]',
      primaryTextColor: 'text-[#C07444]',
      fillColor: 'fill-[#C07444]',
      buttonTextColor: 'text-[#FFFFFF]'
    },
    {
      backgroundColor: 'bg-[#F3F4F6]',
      buttonBackgroundColor: 'bg-[#626BE9]',
      textColor: 'text-[#131821]',
      headerColor: 'text-[#282828]',
      primaryTextColor: 'text-[#626BE9]',
      fillColor: 'fill-[#626BE9]',
      buttonTextColor: 'text-[#FFFFFF]'
    },
    {
      backgroundColor: 'bg-[#0E1412]',
      buttonBackgroundColor: 'bg-[#A3B84B]',
      textColor: 'text-stone-400',
      headerColor: 'text-stone-300',
      primaryTextColor: 'text-[#A3B84B]',
      fillColor: 'fill-[#A3B84B]',
      buttonTextColor: 'text-[#FFFFFF]'
    },
    {
      backgroundColor: 'bg-[#0E1412]',
      buttonBackgroundColor: 'bg-[#C68421]',
      textColor: 'text-stone-400',
      headerColor: 'text-stone-300',
      primaryTextColor: 'text-[#C68421]',
      fillColor: 'fill-[#C68421]',
      buttonTextColor: 'text-[#FFFFFF]'
    },
    {
      backgroundColor: 'bg-gradient-to-r from-green-400 to-blue-500',
      buttonBackgroundColor: 'bg-[#131821]',
      textColor: 'text-[#212936]',
      headerColor: 'text-[#282828]',
      primaryTextColor: 'text-[#131821]',
      fillColor: 'fill-[#131821]',
      buttonTextColor: 'text-[#FFFFFF]'
    },
    {
      backgroundColor:
        'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
      buttonBackgroundColor: 'bg-[#131821]',
      textColor: 'text-[#212936]',
      headerColor: 'text-[#282828]',
      primaryTextColor: 'text-[#FFFFFF]',
      fillColor: 'fill-[#131821]',
      buttonTextColor: 'text-[#FFFFFF]'
    }
  ],

  topicOptions: Object.keys(Topic),
  maxWidthOptions: ['max-w-screen-lg'],

  typographySizesOptions: [
    {
      p: {
        fontSize: 'text-base'
      },
      h1: {
        fontSize: 'text-4xl'
      },
      h2: {
        fontSize: 'text-3xl'
      },
      h3: {
        fontSize: 'text-xl'
      },
      h4: {
        fontSize: 'text-lg'
      }
    },
    {
      p: {
        fontSize: 'text-base'
      },
      h1: {
        fontSize: 'text-5xl'
      },
      h2: {
        fontSize: 'text-4xl'
      },
      h3: {
        fontSize: 'text-2xl'
      },
      h4: {
        fontSize: 'text-xl'
      }
    }
  ],

  ctaOptions: [
    `rounded-none shadow-xl font-medium py-2 px-6 hover:bg-indigo-600`,
    `rounded-none shadow-xl font-medium py-3 px-6 hover:bg-indigo-600`,
    `rounded-xl font-medium py-3 px-6 hover:bg-indigo-600`
  ],
  h4TagStyleOptions: ['hidden', 'italic', 'underline underline-offset-2 italic']
}
