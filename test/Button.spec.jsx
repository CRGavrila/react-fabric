import React from 'react'

import Button from '../src/Button.jsx'

import render from './util/render'

describe('Button', () => {
  it('has a display name', () => {
    expect(Button.displayName).to.equal('Button')
  })

  describe('[Presentation]', () => {
    it('renders a <button />', () => {
      var sut = render(
        <Button />
      )
      expect(sut).to.have.property('type', 'button')
      expect(sut).to.have.deep.property('props.className', 'ms-Button')
    })

    it('renders its children', () => {
      var sut = render(
        <Button>Foo</Button>
      )
      var children = sut.props.children

      expect(children).to.have.property('type', 'span')
      expect(children).to.have.deep.property('props.className', 'ms-Button-label')
      expect(children).to.have.deep.property('props.children', 'Foo')
    })

    it('can be disabled', () => {
      var sut = render(
        <Button disabled={true} />
      )

      expect(sut.props.className.split(' ')).to.include('is-disabled')
    })

    it('can be primary', () => {
      var sut = render(
        <Button primary={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--primary')
    })

    it('can be hero', () => {
      var sut = render(
        <Button hero={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--hero')
    })

    it('can be compound', () => {
      var sut = render(
        <Button compound={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--compound')
    })

    it('can be command', () => {
      var sut = render(
        <Button command={true} />
      )

      expect(sut.props.className.split(' ')).to.include('ms-Button--command')
    })
  })

  describe('[Functionality]', () => {
    it('can have a type attribute', () => {
      var sut = render(
        <Button type="submit" />
      )

      expect(sut).to.have.deep.property('props.type', 'submit')
    })
  })
})
