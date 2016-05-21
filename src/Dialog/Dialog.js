import React from 'react'
import cx from 'classnames'

import DialogButton from './DialogButton.js'
import DialogTitle from './DialogTitle.js'
import DialogSubtext from './DialogSubtext.js'
import DialogAction from './DialogAction.js'

import Overlay from '../Overlay'
import fabricComponent, { isFabricComponent } from '../fabricComponent'

import style from './Dialog.scss'

const scanChildren = children => React.Children.toArray(children).reduce((r, child) => {
  if (isFabricComponent(child, DialogTitle)) {
    r.title = child // eslint-disable-line no-param-reassign
  } else if (isFabricComponent(child, DialogAction)) {
    r.actions.push(child)
  } else {
    r.content.push(child)
  }
  return r
}, { title: null, content: [], actions: [] })

const Dialog = ({
  children,
  className,
  closeable,
  darkOverlay,
  hidden,
  onClose,
  ...props
}) => {
  const { title, content, actions } = scanChildren(children)

  return (
    <div data-fabric="Dialog"
      {...props}
      styleName={cx('ms-Dialog', {
        'ms-Dialog--close': closeable,
        'ms-Dialog--hidden': hidden
      })}
      className={className}>
      <Overlay styleName="ms-Overlay" dark={darkOverlay} onClick={closeable ? onClose : null} />
      <div styleName="ms-Dialog-main">
        { closeable && <DialogButton close onClick={onClose} /> }
        { title }
        <div styleName="ms-Dialog-inner">
          <div styleName="ms-Dialog-content">
            { content }
          </div>
          { actions.length > 0 && <div styleName="ms-Dialog-actions">
            <div styleName="ms-Dialog-actionsRight">
              { actions }
            </div>
          </div> }
        </div>
      </div>
    </div>
  )
}
Dialog.propTypes = {
  actions: React.PropTypes.node,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  closeable: React.PropTypes.bool,
  darkOverlay: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  onClose: React.PropTypes.func
}
Dialog.defaultProps = {
  closeable: false,
  darkOverlay: false,
  hidden: true
}
Dialog.Subtext = DialogSubtext
Dialog.Action = DialogAction
Dialog.Title = DialogTitle

export default fabricComponent(Dialog, style)

