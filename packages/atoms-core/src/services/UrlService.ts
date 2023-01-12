export const isExternal = (inputUrl: string) => {
  const host = window.location.hostname;

  const linkHost = (url: string) => {
    if (/^https?:\/\//.test(url)) {
      const parser = document.createElement('a');
      parser.href = url;
      return parser.hostname;
    }

    return window.location.hostname;
  };

  return host !== linkHost(inputUrl);
};
