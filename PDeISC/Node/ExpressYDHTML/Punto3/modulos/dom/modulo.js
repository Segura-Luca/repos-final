export const getChildCount = (elementId) => {
    const element = document.getElementById(elementId);
    return element ? element.children.length : 0;
};
