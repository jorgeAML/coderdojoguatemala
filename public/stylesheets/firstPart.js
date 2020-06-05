import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'img-portrait': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'objectFit': 'cover',
    'transform': 'skewY(5deg)',
    'transformOrigin': 'top right',
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '	#dee2e1' }],
    'order': '1',
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': -12 }, { 'unit': 'string', 'value': '#2b2219' }],
    'backgroundColor': '#231d25',
    'only screen&&>w1280': {
      'position': 'absolute'
    }
  },
  'skewed': {
    'position': 'relative',
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
  // here start the presentation
  'container_one': {
    'backgroundColor': 'transparent',
    'position': 'absolute',
    'marginTop': [{ 'unit': '%V', 'value': 0.4 }]
  },
  'container_titles': {
    'display': 'flex',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'container_titles_two': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'row-column': {
    'maxWidth': [{ 'unit': 'px', 'value': 1280 }],
    'flexDirection': 'column',
    'flexWrap': 'wrap',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'row': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'column': {
    // for mobiles
    'only screen&&<w1029': {
      'flex': '1'
    }
  },
  'container_titles title': {
    'flex': 'auto',
    'alignSelf': 'flex-start',
    'color': '#f9f8f9',
    'order': '1',
    'fontFamily': ''Work Sans', sans-serif'
  },
  'container_titles paragraph_title': {
    'flex': 'auto',
    'alignSelf': 'auto',
    'color': '#f9f8f9',
    'order': '2',
    'fontFamily': ''Work Sans', sans-serif'
  },
  'raise:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': -0.4 }, { 'unit': 'string', 'value': 'var(--hover-raise)' }],
    'transform': 'translateY(-0.25em)',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'var(--hover-raise)' }],
    'color': 'var(--hover-raise)'
  },
  'raise:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': -0.4 }, { 'unit': 'string', 'value': 'var(--hover-raise)' }],
    'transform': 'translateY(-0.25em)',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'var(--hover-raise)' }],
    'color': 'var(--hover-raise)'
  },
  'raise': {
    'alignSelf': 'center',
    'order': '3',
    'fontFamily': ''Work Sans', sans-serif',
    'color': 'var(--font)',
    'transition': '0.25s',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }],
    'borderRadius': '5px'
  },
  'raise': {
    'HoverRaise': '#00dcff',
    'Font': [{ 'unit': 'string', 'value': '#f9f8f9' }]
  },
  'container_titles_two paragraph_row': {
    'color': '#f9f8f9',
    'fontFamily': ''Work Sans', sans-serif'
  },
  'color-obj_1': {
    'color': '#e44f28'
  },
  'color_obj_2': {
    'color': '#f5b138'
  },
  // media query for desktops
  // media query for mobiles
});
