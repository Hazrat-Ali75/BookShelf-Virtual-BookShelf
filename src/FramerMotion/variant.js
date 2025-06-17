

export const fadeIn = (direction = 'up', delay = 0) => {
    const distance = 80;
  
    const variants = {
      hidden: {
        opacity: 0,
        x: ['left', 'right'].includes(direction)
          ? direction === 'left'
            ? distance
            : -distance
          : 0,
        y: ['up', 'down'].includes(direction)
          ? direction === 'up'
            ? distance
            : -distance
          : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: 'tween',
          duration: 0.9,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  
    return variants;
  };
  