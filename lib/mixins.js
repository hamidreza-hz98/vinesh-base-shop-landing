export function matchPath(pattern, pathname) {
  const regex = new RegExp(
    '^' +
      pattern
        .replace(/\*/g, '.*')
        .replace(/\//g, '\\/')
        .replace(/\./g, '\\.') +
      '$'
  );
  return regex.test(pathname);
}