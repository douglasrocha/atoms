export const getClassName = (baseClass, className, isDarkMode) => {
    const darkModeClass = isDarkMode ? ' is-dark-mode' : '';
    const overrideClass = className ? ` ${className}` : '';
    return `${baseClass}${darkModeClass}${overrideClass}`;
};
