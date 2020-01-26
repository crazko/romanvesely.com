import React from 'react';

export const TextFit = ({ children }) => {
  const ref = React.useRef();

  const [style, setStyle] = React.useState({
    fontFamily: 'Merriweather',
    display: 'inline-block',
    opacity: 0,
    'line-height': '1em',
    textTransform: 'uppercase',
  });

  React.useEffect(() => {
    const width = ref.current.offsetWidth;
    const parentWidth = 700;
    const fontSize = Math.floor((parentWidth / width) * 100);

    setStyle({
      fontFamily: 'Merriweather',
      'font-size': `${fontSize}%`,
      display: 'block',
      opacity: 1,
      'line-height': '1em',
      textTransform: 'uppercase',
      'white-space': 'nowrap',
    });
  }, []);

  return (
    <span ref={ref} style={style}>
      {children}
    </span>
  );
};
