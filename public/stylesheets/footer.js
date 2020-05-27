import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'footer0': {
    // nothing here
  },
  'footer-img': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'height': [{ 'unit': '%V', 'value': 0.6 }]
  },
  'p-adjust': {
    'color': 'var(--color-font-one)',
    'fontFamily': 'var(--font-one)',
    'only screen&&>w1030': {
      'fontSize': [{ 'unit': 'rem', 'value': 0.8 }]
    }
  },
  'footer-row': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'footer-adjust': {
    'margin': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }]
  },
  'footer-adjust2': {
    'display': 'inline-flex',
    'flexDirection': 'row',
    'alignContent': 'center'
  },
  'footer-post': {
    'backgroundColor': 'transparent'
  },
  'footer-post > h3': {
    'color': 'var(--color-font-two)',
    'fontFamily': 'var(--font-two)'
  },
  'footer-post > ul': {
    'color': 'var(--color-font-one)',
    'fontFamily': 'var(--font-one)'
  },
  // VARIABLES
  'p-adjust': {
    'FontOne': ''Work Sans', sans-serif',
    'FontTwo': ''Squada One', cursive',
    'ColorFontOne': '#f9f8f9',
    'ColorFontTwo': '#576675'
  },
  'footer-post > h3': {
    'FontOne': ''Work Sans', sans-serif',
    'FontTwo': ''Squada One', cursive',
    'ColorFontOne': '#f9f8f9',
    'ColorFontTwo': '#576675'
  },
  'footer-post > ul': {
    'FontOne': ''Work Sans', sans-serif',
    'FontTwo': ''Squada One', cursive',
    'ColorFontOne': '#f9f8f9',
    'ColorFontTwo': '#576675'
  }
});
