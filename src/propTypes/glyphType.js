import React from 'react'

export const GLYPH_TYPES = [
  'alert',
  'alert2',
  'alertOutline',
  'arrowDown',
  'arrowDown2',
  'arrowDownLeft',
  'arrowDownRight',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'arrowUp2',
  'arrowUpLeft',
  'arrowUpRight',
  'ascending',
  'at',
  'attachment',
  'bag',
  'balloon',
  'bell',
  'boards',
  'bold',
  'bookmark',
  'books',
  'briefcase',
  'bundle',
  'cake',
  'calendar',
  'calendarDay',
  'calendarPublic',
  'calendarWeek',
  'calendarWorkWeek',
  'camera',
  'car',
  'caretDown',
  'caretDownLeft',
  'caretDownOutline',
  'caretDownRight',
  'caretLeft',
  'caretLeftOutline',
  'caretRight',
  'caretRightOutline',
  'caretUp',
  'caretUpLeft',
  'caretUpOutline',
  'caretUpRight',
  'cart',
  'cat',
  'chart',
  'chat',
  'chatAdd',
  'check',
  'checkPeople',
  'checkbox',
  'checkboxCheck',
  'checkboxEmpty',
  'checkboxMixed',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronThickDown',
  'chevronThickLeft',
  'chevronThickRight',
  'chevronThickUp',
  'chevronThinDown',
  'chevronThinLeft',
  'chevronThinRight',
  'chevronThinUp',
  'chevronUp',
  'chevronsDown',
  'chevronsLeft',
  'chevronsRight',
  'chevronsUp',
  'circleBall',
  'circleBalloons',
  'circleCar',
  'circleCat',
  'circleCoffee',
  'circleDog',
  'circleEmpty',
  'circleFill',
  'circleFilled',
  'circleHalfFilled',
  'circleInfo',
  'circleLightning',
  'circlePill',
  'circlePlane',
  'circlePlus',
  'circlePoodle',
  'circleUnfilled',
  'classNotebook',
  'classroom',
  'clock',
  'clutter',
  'coffee',
  'collapse',
  'conflict',
  'contact',
  'contactForm',
  'contactPublic',
  'copy',
  'creditCard',
  'creditCardOutline',
  'dashboard',
  'descending',
  'desktop',
  'deviceWipe',
  'dialpad',
  'directions',
  'document',
  'documentAdd',
  'documentForward',
  'documentLandscape',
  'documentPDF',
  'documentReply',
  'documentSearch',
  'documents',
  'dog',
  'dogAlt',
  'dot',
  'download',
  'drm',
  'drop',
  'dropdown',
  'editBox',
  'ellipsis',
  'embed',
  'event',
  'eventCancel',
  'eventInfo',
  'eventRecurring',
  'eventShare',
  'exclamation',
  'expand',
  'eye',
  'favorites',
  'fax',
  'fieldMail',
  'fieldNumber',
  'fieldText',
  'fieldTextBox',
  'fileDocument',
  'fileImage',
  'filePDF',
  'filter',
  'filterClear',
  'firstAid',
  'flag',
  'folder',
  'folderMove',
  'folderPublic',
  'folderSearch',
  'fontColor',
  'fontDecrease',
  'fontIncrease',
  'frowny',
  'fullscreen',
  'gear',
  'glasses',
  'globe',
  'graph',
  'group',
  'header',
  'heart',
  'heartEmpty',
  'hide',
  'home',
  'inboxCheck',
  'info',
  'infoCircle',
  'italic',
  'key',
  'late',
  'lifesaver',
  'lifesaverLock',
  'lightBulb',
  'lightning',
  'link',
  'linkRemove',
  'listBullets',
  'listCheck',
  'listCheckbox',
  'listGroup',
  'listGroup2',
  'listNumbered',
  'lock',
  'mail',
  'mailCheck',
  'mailDown',
  'mailEdit',
  'mailEmpty',
  'mailError',
  'mailOpen',
  'mailPause',
  'mailPublic',
  'mailRead',
  'mailSend',
  'mailSync',
  'mailUnread',
  'mapMarker',
  'meal',
  'menu',
  'menu2',
  'merge',
  'metadata',
  'microphone',
  'miniatures',
  'minus',
  'mobile',
  'money',
  'move',
  'multiChoice',
  'music',
  'navigate',
  'new',
  'newsfeed',
  'notRecurring',
  'note',
  'noteEdit',
  'noteForward',
  'noteReply',
  'notebook',
  'onedrive',
  'onlineAdd',
  'onlineJoin',
  'oofReply',
  'org',
  'page',
  'paint',
  'panel',
  'partner',
  'pause',
  'pencil',
  'people',
  'peopleAdd',
  'peopleCheck',
  'peopleError',
  'peoplePause',
  'peopleRemove',
  'peopleSecurity',
  'peopleSync',
  'person',
  'personAdd',
  'personRemove',
  'phone',
  'phoneAdd',
  'phoneTransfer',
  'picture',
  'pictureAdd',
  'pictureEdit',
  'pictureRemove',
  'pill',
  'pinDown',
  'pinLeft',
  'placeholder',
  'plane',
  'play',
  'plus',
  'plus2',
  'pointItem',
  'popout',
  'post',
  'print',
  'protectionCenter',
  'question',
  'questionReverse',
  'quote',
  'radioButton',
  'reactivate',
  'receiptCheck',
  'receiptForward',
  'receiptReply',
  'refresh',
  'reload',
  'reply',
  'replyAll',
  'replyAllAlt',
  'replyAlt',
  'ribbon',
  'room',
  'save',
  'scheduling',
  'search',
  'section',
  'sections',
  'settings',
  'share',
  'shield',
  'sites',
  'skypeCheck',
  'skypeCircleCheck',
  'skypeCircleClock',
  'skypeCircleMinus',
  'skypeClock',
  'skypeMinus',
  'smiley',
  'soccer',
  'socialListening',
  'sort',
  'sortLines',
  'split',
  'star',
  'starEmpty',
  'stopwatch',
  'story',
  'styleRemove',
  'subscribe',
  'sun',
  'sunAdd',
  'sunQuestion',
  'support',
  'table',
  'tablet',
  'tag',
  'taskRecurring',
  'tasks',
  'teamwork',
  'text',
  'textBox',
  'tile',
  'timeline',
  'today',
  'toggle',
  'toggleMiddle',
  'touch',
  'trash',
  'triangleDown',
  'triangleEmptyDown',
  'triangleEmptyLeft',
  'triangleEmptyRight',
  'triangleEmptyUp',
  'triangleLeft',
  'triangleRight',
  'triangleUp',
  'trophy',
  'underline',
  'unsubscribe',
  'upload',
  'video',
  'voicemail',
  'voicemailForward',
  'voicemailReply',
  'waffle',
  'work',
  'wrench',
  'x',
  'xCircle'
]

export default React.PropTypes.oneOf(GLYPH_TYPES)