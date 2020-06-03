---
title: Highlight
description: Foo bar baz
---

lorem

export const Highlight = () => {
const [hash, setHash] = React.useState(null);
const handleSelection = () => {
const selection = document.getSelection();
const text = selection.toString();
if (text.length === 0) {
setHash(null);
} else {
setHash(`#:~:text=${text}`);
}
};
React.useEffect(() => {
if (typeof document === "undefined") {
return;
}
document.addEventListener("selectionchange", handleSelection);
return () =>
document.removeEventListener("selectionchange", handleSelection);
}, []);
const handleClick = () => {window.location.href = `${window.location.href}${hash}`; window.location.reload(true)};
return (
<button onClick={handleClick} disabled={!hash}>
open this window and Highlight selected text
</button>
);
};

lorem

<Highlight />

lorem
