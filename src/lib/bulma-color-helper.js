export const getModifiedColorClass = (color, modifier) => {
  if (!modifier) return `is-${color}`;
  return `is-${color} ${modifier}`;
};

export const getTextColorClass = (color) => `has-text-${color}`;

export const getBackgroundColorClass = (color) => `has-background-${color}`;

export const getInvertedClass = (color) => `is-${color}-inverted`;

// Helper to combine multiple classes
export const combineClasses = (...classes) => classes.filter(Boolean).join(' ');