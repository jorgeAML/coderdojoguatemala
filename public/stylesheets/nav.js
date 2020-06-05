import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#231d25',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'auto',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'transition': '1s ease'
  },
  'wrapper': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'flexFlow': 'row wrap'
  },
  'wrapper > *': {
    'flex': '1 100%'
  },
  'nav': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '2',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f9f8f9' }],
    'transition': 'all 1s ease',
    'MozTransition': 'all 1s ease',
    'OTransition': 'all 1s ease',
    'WebkitTransition': 'all 1s ease',
    'transform': 'translate(-50%, -50%)',
    'backgroundColor': 'transparent',
    'only screen&&>w1280': {
      'width': [{ 'unit': 'px', 'value': 100 }],
      'height': [{ 'unit': 'px', 'value': 38 }],
      'position': 'absolute',
      'left': [{ 'unit': '%H', 'value': 0.5 }],
      'top': [{ 'unit': '%V', 'value': 0.05 }]
    }
  },
  'nav button#main-btn': {
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'transition': 'all 0.5s ease',
    'color': '#fff',
    'fontFamily': ''Squada One', cursive',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '10px',
    'MozBorderRadius': '10px',
    'WebkitBorderRadius': '10px',
    'transformOrigin': 'middle'
  },
  'nav button#main-btn:hover': {
    'MozTransform': 'scale(1.5)',
    'MsTransform': 'scale(1.5)',
    'WebkitTransform': 'scale(1.5)',
    'transform': 'scale(1.5)'
  },
  'nav button#main-btn:focus': {
    'outline': 'none'
  },
  'nav #sub-navs > button': {
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'transition': 'all 1s ease, scale 0.5s ease, transform 0.5s ease',
    'fontFamily': ''Squada One', cursive',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0',
    'MozBorderRadius': '10px',
    'WebkitBorderRadius': '10px',
    'borderRadius': '10px',
    'transformOrigin': 'middle',
    'color': '#2e3941'
  },
  'nav #sub-navs > button:hover': {
    'MozTransform': 'scale(1.5)',
    'MsTransform': 'scale(1.5)',
    'WebkitTransform': 'scale(1.5)',
    'transform': 'scale(1.5)'
  },
  'nav #sub-navs > button:focus': {
    'outline': 'none'
  },
  'a': {
    'color': '#fff',
    'textDecoration': 'none'
  }
});
