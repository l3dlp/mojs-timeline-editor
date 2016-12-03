
import md5 from 'md5';

export default (data, i=0) => {
  const { x, y, time, name } = data;

  return {
    id:         md5( `${Math.random()}${Math.random()}` ),
    name:       name || `point${i+1}`,
    isOpen:     true,
    isSelected: true,
    props: {
      x: x || 0,
      y: y || 0
    },
    spots: [
      { x:          x || 0,
        y:          y || 0,
        time:       time || 0
      }
    ]
  };
};