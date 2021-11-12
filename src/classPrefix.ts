export default (className: string) => {
  if (!className) return '';

  const prefix = 'tw-';
  const outClasses = [];
  const excludes: string[] = [];

  const classes = className.split(' ');

  for (const name of classes) {
    if (!name) continue;

    if (name.indexOf(':') > -1) {
      const parts = name.replace(/\n/gi, '').split(':');
      const variantName = parts[0];
      const variantClass = parts[1];
      if (excludes.indexOf(variantClass) > -1) {
        continue;
      }
      const outName = `${variantName}:${prefix}${variantClass}`;
      outClasses.push(outName);
    } else {
      const cleanedName = name.replace(/\n/gi, '');
      if (excludes.indexOf(cleanedName) > -1) {
        continue;
      }
      const outName = `${prefix}${cleanedName}`;
      outClasses.push(outName);
    }
  }

  return outClasses.join(' ');
};

