import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container_sp': {
    'display': 'flex',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'only screen&&>w1030': {
      'justifyContent': 'center',
      'alignContent': 'center',
      'position': 'relative',
      'marginTop': [{ 'unit': '%V', 'value': 0.05 }]
    }
  },
  'container_sp > *': {
    'flex': '1 100%'
  },
  'column_sp': {
    'flexDirection': 'column',
    'flexFlow': 'column wrap'
  },
  'h1_sp': {
    'color': 'var(--color-work)',
    'fontFamily': 'var(--font-work)'
  },
  'p_sp': {
    'color': 'var(--color-work)',
    'fontFamily': 'var(--font-work)'
  },
  'h2_tp': {
    'fontFamily': 'var(--font-work)',
    'color': 'var(--color-h2)'
  },
  'hr_tp': {
    'color': 'var(--color-h2)'
  },
  'row_tp': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'margin_tp': {
    'margin': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }]
  },
  'inline_tp': {
    'display': 'inline-flex',
    'flexDirection': 'row',
    'alignContent': 'center'
  },
  'in_box': {
    'backgroundImage': 'linear-gradient(-150deg,#231d25,#231d25,#40214a)',
    'position': 'relative',
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#40214a' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.24)' }]
  },
  'in_box p': {
    'color': 'var(--color-h2)',
    'fontFamily': 'var(--font-sans)'
  },
  'post_1tp': {
    'backgroundImage': 'linear-gradient(-150deg,#231d25,#231d25,#40214a)',
    // background-color: aliceblue;
    'margin': [{ 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.01 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.01 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.01 }],
    'position': 'relative',
    'transitionDuration': '1s',
    'cursor': 'default',
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#40214a' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.24)' }],
    // transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  },
  'post_1tp:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 28 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22)' }],
    'transform': 'scale(1.05,1.05)'
  },
  'img1': {
    // we built it in the screen media
  },
  'box_button': {
    'backgroundColor': 'transparent',
    'backgroundImage': 'linear-gradient(-150deg,#231d25,#231d25,#40214a)',
    'position': 'relative',
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#40214a' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.24)' }]
  },
  'box_button a': {
    'color': 'var(--color-h2)',
    'fontFamily': 'var(--font-sans)',
    'position': 'relative'
  },
  'box_button a:hover': {
    'textDecoration': 'none'
  },
  'fill:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'var(--hover-fill)' }]
  },
  'fill:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'var(--hover-fill)' }]
  },
  // color
  'fill': {
    'color': 'var(--color-button-fill)',
    'transition': '0.95s'
  },
  'fill:hover': {
    'borderColor': 'var(--hover-fill)',
    'color': '#fff',
    'backgroundImage': 'var(--hover-fill)'
  },
  'fill': {
    'ColorButtonFill': '#a972cb',
    'HoverFill': 'linear-gradient(-150deg,		#004749,			#00746b,	#00a950)',
    'TransitionAll': '0.25s'
  },
  'h1_sp': {
    'FontWork': ''Squada One', cursive',
    'ColorWork': '#ebd1d8',
    'ColorH2': '#f9f8f9',
    'FontSans': ''Work Sans', sans-serif'
  },
  'p_sp': {
    'FontWork': ''Squada One', cursive',
    'ColorWork': '#ebd1d8',
    'ColorH2': '#f9f8f9',
    'FontSans': ''Work Sans', sans-serif'
  },
  'h2_tp': {
    'FontWork': ''Squada One', cursive',
    'ColorWork': '#ebd1d8',
    'ColorH2': '#f9f8f9',
    'FontSans': ''Work Sans', sans-serif'
  },
  'in_box p': {
    'FontWork': ''Squada One', cursive',
    'ColorWork': '#ebd1d8',
    'ColorH2': '#f9f8f9',
    'FontSans': ''Work Sans', sans-serif'
  },
  'box_button a': {
    'FontWork': ''Squada One', cursive',
    'ColorWork': '#ebd1d8',
    'ColorH2': '#f9f8f9',
    'FontSans': ''Work Sans', sans-serif'
  }
});
