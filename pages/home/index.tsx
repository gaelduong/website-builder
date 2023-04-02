import Section from '@/layout/Section'
import { store } from '@/redux/store'
import { renderToString } from 'react-dom/server'
import JsxParser from 'react-jsx-parser'
import { Provider, useSelector } from 'react-redux'
import Footer from '../components/shared/Footer'
import Nav from '../components/shared/Nav'
import NavControl from '../components/shared/NavControl'

const Test = () => {
  const { layout } = useSelector((state: any) => state.layout)

  return (
    <>
      <NavControl />

      {/* <Nav /> */}
      {layout.map((section: any, idx: number) => {
        return (
          <Section
            key={idx}
            col={section.col}
            contentIds={section.contentIds}
            headings={section.headings}
            randomSeed={section.randomSeed}
          />
        )
      })}

      <Footer />
    </>
  )
}

const pageStr = `<>${renderToString(
  <Provider store={store}>
    <Test />
  </Provider>
).replaceAll('class=', 'className=')}</>`
// console.log(pageStr)

const pageStrCopy = (' ' + pageStr).slice(1)
console.log(pageStrCopy)

const Home = () => {
  return (
    <>
      <Test />
      {/* <JsxParser
        bindings={{
          foo: 'bar',
          myEventHandler: () => {
          }
        }}
        jsx={pageStrCopy}
      /> */}
    </>
  )
  //   return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: pageStrCopy }}></div>
}

export default Home
