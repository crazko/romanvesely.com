import React from 'react';

export const Highlight = () => {
  const [fragment, setFragment] = React.useState(null);
  React.useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, []);
  const handleSelection = () => {
    const selection = document.getSelection();
    if (selection.isCollapsed) {
      setFragment(null);
      return;
    }
    const { anchorNode: start, focusNode: end } = selection;
    const range = document.createRange();
    range.setStart(start, selection.anchorOffset);
    range.setEnd(end, selection.focusOffset);
    const backwards = range.collapsed;
    const isOneNode = start === end;
    const textStart = format(start.nodeValue);
    const textEnd = format(end.nodeValue);
    let fragments;
    if (isOneNode) {
      fragments = textStart;
    } else {
      if (backwards) {
        fragments = `${textEnd},${textStart}`;
      } else {
        fragments = `${textStart},${textEnd}`;
      }
    }
    setFragment(`#:~:text=${fragments}`);
  };
  const format = (s) => (s ? encodeURIComponent(s.trim()) : '');
  return fragment ? (
    <a
      href={fragment}
      style={{
        padding: '0.5em',
        border: '1px solid var(--accent)',
      }}
      target="_blank"
    >
      open it
    </a>
  ) : (
    <span
      style={{
        backgroundColor: 'var(--background-secondary)',
        border: '1px solid var(--background-secondary)',
        padding: '0.5em',
        cursor: 'not-allowed',
      }}
    >
      open it
    </span>
  );
};
