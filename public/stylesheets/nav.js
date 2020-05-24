import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#2e3941',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'auto'
  },
  'html': {
    'backgroundColor': '#2e3941',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'auto'
  },
  'wrapper': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nav': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 38 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '2',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderRadius': '5px',
    'transition': 'all 1s ease',
    'MozTransition': 'all 1s ease',
    'OTransition': 'all 1s ease',
    'WebkitTransition': 'all 1s ease',
    'transform': 'translate(-50%, -50%)',
    'top': [{ 'unit': '%V', 'value': 0.05 }],
    'backgroundColor': '#707070'
  },
  'nav button#main-btn': {
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'position': 'absolute',
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
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
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
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
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
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
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
  },
  'content': {
    'width': [{ 'unit': '%H', 'value': 0.65 }],
    'background': '#fff',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  }
});
