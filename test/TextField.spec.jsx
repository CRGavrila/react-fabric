import React from 'react'
import _ from 'lodash'
import sinon from 'sinon'
import TestUtils, { Simulate } from 'react-addons-test-utils'

import render from './util/render'

import TextField from '../src/TextField.jsx'
import Label from '../src/Label.jsx'

describe('TextField', function() {
  describe('[Functionality]', function() {
    it('is singleline per default', function() {
      var sut = render(
        <TextField />
      )

      var [input] = _.compact(sut.props.children)

      expect(input).to.have.property('type', 'input')
    })

    it('supports multiline', function() {
      var sut = render(
        <TextField multiline={true} />
      )

      var [input] = _.compact(sut.props.children)

      expect(input).to.have.property('type', 'textarea')
    })

    it('supports onChange callback', function() {
      var onChange = sinon.spy()
      var sut = TestUtils.renderIntoDocument(
        <TextField onChange={onChange} />
      )

      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
      input.value = 'Foo'
      Simulate.change(input)

      expect(onChange).to.have.been.calledOnce.and.calledWithMatch({
        target: { value: 'Foo' }
      })
    })

    it('supports onChange callback for multiline', function() {
      var onChange = sinon.spy()
      var sut = TestUtils.renderIntoDocument(
        <TextField onChange={onChange} multiline={true} />
      )

      var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'textarea')
      input.value = 'Foo'
      Simulate.change(input)

      expect(onChange).to.have.been.calledOnce.and.calledWithMatch({
        target: { value: 'Foo' }
      })
    })

    it('generates an id for input and sets the \'for\' attribute on the Label', function() {
      var sut = render(
        <TextField label="Foo" />
      )

      var [label, input] = _.compact(sut.props.children)

      expect(input.props.id).to.not.be.undefined
      expect(label.props).to.have.property('htmlFor', input.props.id)
    })
  })

  describe('[Appearance]', function() {
    describe('plain', function() {
      it('renders a wrapped input', function() {
        var sut = render(
          <TextField />
        )

        var [input, ...otherChildren] = _.compact(sut.props.children)

        expect(sut).to.have.property('type', 'div')
        expect(sut.props).to.have.property('className', 'ms-TextField')
        expect(input.props).to.have.property('className', 'ms-TextField-field')
        expect(otherChildren).to.have.lengthOf(0)
      })
    })

    describe('with a label property', function() {
      it('that is a Label Component gets just rendered', function() {
        var sut = render(
          <TextField label={
            <Label>Foo</Label>
            } />
        )

        var [label, ] = sut.props.children

        expect(label).to.have.property('type', Label)
        expect(label.props).to.have.property('children', 'Foo')
      })

      it('that is any element gets renderd inside a Label Component', function() {
        var label = <span>Foo</span>
        var sut = render(
          <TextField label={label} />
        )

        var [renderedLabel, ] = sut.props.children

        expect(renderedLabel).to.have.property('type', Label)
        expect(renderedLabel.props).to.have.property('children', label)
      })
    })

    describe('with a description', function() {
      it('that is any React element gets rendered inside a description container', function() {
        var description = <span>Foo</span>
        var sut = render(
          <TextField description={description} />
        )

        var [, renderedDescription] = _.compact(sut.props.children)

        expect(renderedDescription).to.have.property('type', 'span')
        expect(renderedDescription.props).to.have.property('className', 'ms-TextField-description')
        expect(renderedDescription.props).to.have.property('children', description)
      })
    })

    describe('with a placeholder', function() {
      it('adds placeholder modifier', function() {
        var sut = render(
          <TextField placeholder={true} />
        )

        expect(sut.props.className.split(' ')).to.include('ms-TextField--placeholder')
      })

      it('hides placeholder when input has a value', function() {
        var sut = TestUtils.renderIntoDocument(
          <TextField label="Foo" placeholder={true} />
        )

        var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')

        input.value = 'Bar'
        Simulate.change(input)

        var label = TestUtils.findRenderedComponentWithType(sut, Label)

        expect(label.props).to.have.deep.property('style.display', 'none')
      })
    })

    describe('when underlined', function() {
      it('adds underlined modifier', function() {
        var sut = render(
          <TextField underlined={true} />
        )

        expect(sut.props.className.split(' ')).to.include('ms-TextField--underlined')
      })

      it('handles active state', function() {
        var sut = TestUtils.renderIntoDocument(
          <TextField underlined={true} />
        )

        var input = TestUtils.findRenderedDOMComponentWithTag(sut, 'input')
        Simulate.focus(input)

        expect(input.parentElement.className.split(' ')).to.include('is-active')
      })
    })

    it('can be required', function() {
      var sut = [
        render(<TextField label="Foo" required={true} />),
        render(<TextField label={<Label>Foo</Label>} required={true} />)
      ]

      var [label1, ] = sut[0].props.children
      var [label2, ] = sut[1].props.children

      expect(label1.props).to.have.property('required', true)
      expect(label2.props).to.have.property('required', true)
    })

    it('can be disabled', function() {
      var sut = [
        render(<TextField label="Foo" disabled={true} />),
        render(<TextField label={<Label>Foo</Label>} disabled={true} />)
      ]

      var [label1, ] = sut[0].props.children
      var [label2, ] = sut[1].props.children

      expect(label1.props).to.have.property('disabled', true)
      expect(label2.props).to.have.property('disabled', true)
    })
  })
})
