import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'img-portrait': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'objectFit': 'cover',
    'transform': 'skewY(5deg)',
    'transformOrigin': 'top right',
    'position': 'relative',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2b2219' }],
    'only screen&&>w1030': {
      'position': 'absolute'
    }
  },
  'skewed': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'transparent',
    'zIndex': '0',
    'transform': 'skewY(5deg)',
    'transformOrigin': 'top right',
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 11 }, { 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': -12 }, { 'unit': 'string', 'value': '#2b2219' }]
  },
  'container_one': {
    'backgroundColor': 'transparent',
    'position': 'absolute',
    'marginTop': [{ 'unit': '%V', 'value': 0.4 }]
  },
  // media query for desktops
});
