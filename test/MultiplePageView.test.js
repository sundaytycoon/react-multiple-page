import React from 'react'
import ReactDOMServer from 'react-dom/server'

// import { BrowserRouter } from 'react-router-dom'  // When I wanna using history in jest, It prefer BrowserRouter to MemoryRouter
import { MemoryRouter } from 'react-router-dom'

// import MultiplePageView from 'react-multiple-page'
import MultiplePageView from '../examples/src/lib/MultiplePageView'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// https://github.com/facebook/create-react-app/issues/3636
// Create-react-app dosen't support jest v22, Now on 2018-03-25

const { mount, shallow } = Enzyme

describe('1. <MultiplePageView> test', () => {
  let componentMount = null
  let componentShallow = null
  const pages = [
    () => (<div>1</div>),
    () => (<div>2</div>),
    () => (<div>3</div>),
    () => (<div>4</div>),
  ]

  it('render correctly', () => {
    componentMount = mount(
      <MemoryRouter>
        <MultiplePageView pages={pages} />
      </MemoryRouter>
    )
    componentShallow = shallow(
      <MemoryRouter>
        <MultiplePageView pages={pages} />
      </MemoryRouter>
    )
    expect(componentMount.containsMatchingElement(MultiplePageView)).toEqual(true)
    expect(componentShallow).not.toBeInstanceOf(MultiplePageView)
  })


  describe('1-1. #pageController.nextPage(), prevPage(), goPage(pageNumber)', () => {
    it('It will render well', () => {
      const instance = componentMount.find('MultiplePageView').instance()

      // testing nextPage()
      pages.filter((_, index) => {
        expect(componentMount.html()).toEqual(ReactDOMServer.renderToStaticMarkup(pages[index]()))
        if (index !== pages.length - 1) instance.nextPage()
      })
  
      // testing prevPage()
      pages.filter((_, index) => {
        if (index !== 0) instance.prevPage()
        expect(componentMount.html()).toEqual(ReactDOMServer.renderToStaticMarkup(pages[(pages.length - 1) - index]()))
      })

      // test goPage()
      instance.goPage(pages.length - 1)
      expect(componentMount.html()).toEqual(ReactDOMServer.renderToStaticMarkup(pages[pages.length - 1]()))
      instance.goPage(0)
      expect(componentMount.html()).toEqual(ReactDOMServer.renderToStaticMarkup(pages[0]()))
    })

    it('with false state of when', () => {
      const instance = componentMount.find('MultiplePageView').instance()
      instance.when(false)
  
      // testing nextPage()
      pages.filter((_, index) => {
        expect(instance.props.location.state['mp_page']).toBe(index)
        if (index !== pages.length - 1) instance.nextPage()
      })
  
      // testing prevPage()
      pages.filter((_, index) => {
        if (index !== 0) instance.prevPage()
        expect(instance.props.location.state['mp_page']).toBe((pages.length - 1) - index)
      })
  
      // test goPage()
      instance.goPage(pages.length - 1)
      expect(instance.props.location.state['mp_page']).toBe(pages.length - 1)
      instance.goPage(0)
      expect(instance.props.location.state['mp_page']).toBe(0)
    })
  
    it('with true state of when', () => {

      const instance = componentMount.find('MultiplePageView').instance()
      instance.when(true)
  
  
      // testing nextPage()
      pages.filter((_, index) => {
        expect(instance.props.location.state['mp_page']).toBe(index)
        if (index !== pages.length - 1) instance.nextPage()
      })
  
      // testing prevPage() using history.goBack()
      pages.filter((_, index) => {
        if (index !== 0) instance.prevPage()
        expect(instance.props.location.state['mp_page']).toBe((pages.length - 1) - index)
      })
  
      console.warn('====== Did error logs been printed 3 times?')
  
  
      // test goPage() using history.replace()
      instance.goPage(pages.length - 1)
      expect(instance.props.location.state['mp_page']).toBe(pages.length - 1)
      instance.goPage(0)
      expect(instance.props.location.state['mp_page']).toBe(0)

      console.warn('====== Did error logs been printed 2 times?')
    })

    it('Is it able to use other state in \'location.state\'? ', () => {
      const instance = componentMount.find('MultiplePageView').instance()
      instance.when(false)
      expect(instance.props.location.state).toMatchObject({mp_page: 0})

      instance.props.history.push(instance.props.location.pathname, { hello: 'world' })
      expect(instance.props.location.state).toMatchObject({ mp_page: 0, hello: 'world' })

      instance.nextPage()
      expect(instance.props.location.state).toMatchObject({ mp_page: 1, hello: 'world' })

      instance.prevPage()
      expect(instance.props.location.state).toMatchObject({ mp_page: 0, hello: 'world' })

      instance.goPage(3)
      expect(instance.props.location.state).toMatchObject({ mp_page: 3, hello: 'world' })

      instance.goPage(0)
      expect(instance.props.location.state).toMatchObject({ mp_page: 0, hello: 'world' })
    })
  })
})