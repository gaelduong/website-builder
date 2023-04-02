import Image from 'next/image'
import Link from 'next/link'

import { text } from '@/utils/text'
import { getRandomItem } from '@/utils/general'
import {
  getBgColor,
  getCTAStyles,
  getFillColor,
  getH1Styles,
  getH2Styles,
  getH3Styles,
  getH4Styles,
  geth4TagStyles,
  getItemImage,
  getNormalImage
} from '@/utils/globalVariants'

export const CTAButton = () => {
  const localVariants = {
    hasArrow: getRandomItem([true, false])
  }
  return (
    <Link
      href="#"
      className={`${getCTAStyles()} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg`}
    >
      {text(2, 2)}{' '}
      {localVariants.hasArrow && <span className="font-bold"> →</span>}
    </Link>
  )
}

export const SecondaryCTAButton = () => {
  return (
    <Link
      href="#"
      className="font-medium underline underline-offset-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
    >
      View More <span className="font-bold"> →</span>
    </Link>
  )
}

export const H_LP = () => {
  return (
    <div>
      <h3 className={`${getH3Styles()} font-bold mb-4`}>{text(2, 2)}</h3>
      <p>
        A long paragraph. Minim magna id reprehenderit aute. Voluptate amet ea
        ut esse enim. Culpa fugiat incididunt excepteur aliquip ex ullamco.
      </p>
    </div>
  )
}

export const H_LP_LIST = () => {
  const checkDoubleSvg = (
    <svg
      className={`${getFillColor()}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11.602 13.76l1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.414 2.125 2.125 1.413 1.412zm.002-2.828l4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951z" />
    </svg>
  )

  const checkCircleSvg = (
    <svg
      className={`${getFillColor()}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
    </svg>
  )
  const localVariants = {
    hasList: getRandomItem([true, false]),
    hasCTA: getRandomItem([true, false]),
    checkIcon: getRandomItem([checkCircleSvg, checkDoubleSvg])
  }

  const innterContent = localVariants.hasList ? (
    <>
      <p className="">{text(20, 30, false)}:</p>
      <ul className="list-none list-inside my-8 space-y-4">
        {[...Array(3)].map(i => (
          <li className="flex items-center gap-4 mb-2">
            {localVariants.checkIcon}

            <span>Lower your energy bills and reduce your carbon</span>
          </li>
        ))}
      </ul>
    </>
  ) : localVariants.hasCTA ? (
    <p className="mb-8">{text(40, 50, false)}.</p>
  ) : (
    <p className="mb-8">{text(50, 60, false)}.</p>
  )

  return (
    <div className="">
      <h4 className={`${getH4Styles()} ${geth4TagStyles()} `}>Features</h4>
      <h2 className={`${getH2Styles()} my-4`}>H2 headings</h2>
      {innterContent}
      <div>{localVariants.hasCTA && <CTAButton />}</div>
    </div>
  )
}

export const H_LP_CTA = () => {
  return (
    <div className="">
      <h3 className={`${getH2Styles()} mb-4`}>{text(3, 4)}</h3>
      <p className="mb-6">{text(30, 40, false)}</p>
      <div>
        <CTAButton />
      </div>
    </div>
  )
}

export const TAG_H_LP = () => {
  return (
    <div>
      <h4 className="text-xl text-rose-500"> Culture </h4>
      <h3 className={`${getH3Styles()}`}>Amazing Opportunity for Everyone</h3>
      <p>
        A long paragraph. Minim magna id reprehenderit aute. Voluptate amet ea
        ut esse enim. Culpa fugiat incididunt excepteur aliquip ex ullamco.
      </p>
    </div>
  )
}

export const ICON_H_LP = () => {
  return (
    <div>
      <div
        className={`h-12 w-12 rounded-full ${getBgColor()} flex items-center justify-center mb-4`}
      >
        <svg
          className={`h-6 w-6 text-indigo-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h4 className="text-lg leading-6 font-medium">Trying is Seeing</h4>
      <p className="mt-2 text-base">
        A long paragraph. Minim magna id reprehenderit aute. Voluptate amet ea
        ut esse enim. Culpa fugiat incididunt excepteur aliquip ex ullamco.
      </p>
    </div>
  )
}

export const FULL_IMG_H_LP2 = () => {
  // const localVariants = {
  //   cardEffect: getRandomItem([
  //     'py-2 px-4 bg-gray-200 border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
  //     ''
  //   ])
  // }
  return (
    <div>
      <div className="mb-4">
        <Image
          src={getItemImage()}
          alt="d"
          className="h-[12rem] object-contain"
        />
      </div>
      <h4 className="text-xl leading-6 font-bold">{text(4, 5)}</h4>
      <div className="mt-2 text-base">
        A short paragraph. Minim magna id reprehenderit aute. Voluptate amet ea
        ut esse enim. Culpa fugiat incididunt excepteur aliquip ex ullamco.
        (FULL_IMG_H_LP)
      </div>
    </div>
  )
}

export const FULL_IMG_H_LP = ({ randomSeed }: { randomSeed: any }) => {
  console.log(randomSeed)
  const localVariants = {
    cardEffect: getRandomItem([
      'py-2 px-4 bg-gray-200 border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
      ''
    ]),
    cta:
      randomSeed % 3 == 0 ? (
        ''
      ) : randomSeed % 2 == 0 ? (
        <SecondaryCTAButton />
      ) : (
        <CTAButton />
      )
  }
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <Image
          src={getItemImage()}
          alt="d"
          className="h-[12rem] object-contain"
        />
      </div>
      <div className="max-w-[30ch]">
        <h3 className={`${getH3Styles()} leading-8 font-bold `}>
          {text(4, 5)}
        </h3>
        <div className="mt-2 text-base mb-6">
          A short paragraph. Minim magna id reprehenderit aute. Voluptate amet
          ea ut esse enim. Culpa fugiat incididunt excepteur aliquip ex ullamco.
          (FULL_IMG_H_LP)
        </div>
        <div>{localVariants.cta}</div>
      </div>
    </div>
  )
}

export const FULL_IMG_H_SP_CTA = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <Image
          src={getItemImage()}
          alt=""
          className="h-[12rem] object-contain"
        />
      </div>
      <div className="max-w-[30ch]">
        <h4 className="text-lg leading-6 font-medium">{text(2, 3)}</h4>
        <p className="mt-2 text-base">
          A short paragraph. Minim magna id reprehenderit aute.
        </p>
        <div>
          <Link
            href="#"
            className="font-medium underline underline-offset-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            View More <span className="font-bold"> →</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const FULL_IMG = () => {
  return (
    <div>
      <Image
        src={getNormalImage()}
        alt="Illustration"
        className="w-full max-h-[21rem] selection:rounded-xl  md:max-w-full relative object-contain"
      />
    </div>
  )
}

export const HALF_IMG = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={getNormalImage()}
        alt="Illustration"
        className="w-[50%] rounded-xl md:max-w-full relative shadow-2xl"
      />
    </div>
  )
}

export const SMALL_IMG = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={getNormalImage()}
        alt="Illustration"
        className="w-[20%] rounded-xl md:max-w-full relative shadow-2xl"
      />
    </div>
  )
}

export const H_P_H_P = () => {
  return (
    <div className="space-y-4">
      <h3 className={`${getH3Styles()}`}>Transparency</h3>
      <p>
        A short paragraph. Minim magna id reprehenderit aute. Voluptate amet ea
        ut esse enim.
      </p>
      <h3 className={`${getH3Styles()}`}>Hyperfocus</h3>
      <p>
        A short paragraph. Minim magna id reprehenderit aute. Voluptate amet ea
        ut esse enim.
      </p>
      <h3 className={`${getH3Styles()}`}>Support</h3>
      <p>
        A short paragraph. Minim magna id reprehenderit aute. Voluptate amet ea
        ut esse enim.
      </p>
    </div>
  )
}

export const ICON_H_P_ICON_H_P = () => {
  return (
    <div className="space-y-4">
      {[...Array(3)].map(i => (
        <div className="flex flex-wrap flex-row gap-2 items-start">
          <div className="w-[calc(20%-2rem)]">
            <Image src={getItemImage()} alt="" />
          </div>
          <div className="w-full md:w-[calc(80%-2rem)]">
            <h3 className="text-xl md:text-xl lg:text-xl font-semibold leading-tight mb-4">
              Customer focused
            </h3>
            <p className="text-lg">
              From energy management software to mobile apps and dashboards
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export const SHORT_HEAD_SHORT_PAR_CTA = () => {
  return (
    <div className="space-y-4 text-center">
      <h3 className="text-3xl">Ready to get started?</h3>
      <p>
        A short paragraph. Minim magna id reprehenderit aute Voluptate amet.
      </p>
      <div>
        <CTAButton />
      </div>
    </div>
  )
}

export const SIDE_SHORT_HEAD_SHORT_PAR_CTA = () => {
  return (
    <div className="flex justify-around">
      <div>
        <h3 className={`${getH3Styles()}`}>Ready to get started?</h3>
        <p>
          A short paragraph. Minim magna id reprehenderit aute. Voluptate amet
          ea ut esse enim.
        </p>
      </div>
      <div>
        <Link
          href="#"
          className={`${getCTAStyles()} hover:bg-indigo-600 shadow-xl text-white font-medium py-2 px-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg`}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export const H1_P_CTA = () => {
  const localVariants = {
    align: getRandomItem([
      // { text: 'text-center', imgMx: 'mx-auto' },
      { text: 'text-left', imgMx: '' }
    ]),
    hasSecondCTA: getRandomItem([true, false])
  }

  return (
    <div className={`${localVariants.align.text}`}>
      <h1
        className={`${getH1Styles()} font-bold lg:leading-[1.14] mb-4 md:mb-6`}
      >
        {text(4, 6)}
      </h1>
      <p className="text-lg mb-8 md:mb-12">{text(14, 25)}.</p>
      <CTAButton />
      <Link
        href="#"
        className={`${
          !localVariants.hasSecondCTA && 'hidden'
        } font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      `}
      >
        {text(2, 2)}
      </Link>
    </div>
  )
}

export const H1_P_IMG_CTA = () => {
  const localVariants = {
    align: getRandomItem([
      { text: 'text-center', imgMx: 'mx-auto' }
      // { text: 'text-left', imgMx: '' }
    ]),
    hasSecondCTA: getRandomItem([true, false])
  }

  return (
    <div className={`${localVariants.align.text}`}>
      <h1
        className={`${getH1Styles()} font-bold lg:leading-[1.14] mb-4 md:mb-6`}
      >
        {text(4, 6)}
      </h1>
      <p className="text-lg mb-8 md:mb-12">{text(14, 25)}.</p>
      <div className={`mb-8 w-1/2 ${localVariants.align.imgMx}`}>
        <Image src={getNormalImage()} alt="d" />
      </div>
      <CTAButton />
      <Link
        href="#"
        className={`${
          !localVariants.hasSecondCTA && 'hidden'
        } font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      `}
      >
        {text(2, 2)}
      </Link>
    </div>
  )
}

// TODO
export const IMG_LEFT_HEAD_PAR_CTA_RIGHT = () => {
  return <></>
}
