// thanks to https://github.com/facebookincubator/create-react-app/issues/3199 for the fix

const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

export default raf;
