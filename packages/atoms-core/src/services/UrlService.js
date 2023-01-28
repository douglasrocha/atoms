export const isExternal = (inputUrl) => {
  const host = window.location.hostname;

  const linkHost = (url) => {
    if (/^https?:\/\//.test(url)) {
      const parser = document.createElement('a');
      parser.href = url;
      return parser.hostname;
    }

    return window.location.hostname;
  };

  return host !== linkHost(inputUrl);
};
