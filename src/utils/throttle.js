// function throttle(fn, ms) {
//   let timeout;
//   function exec() {
//     fn.apply();
//   }
//   function clear() {
//     timeout == undefined ? null : clearTimeout(timeout);
//   }
//   if (fn !== undefined && ms !== undefined) {
//     timeout = setTimeout(exec, ms);
//   } else {
//     console.error("callback function and the timeout must be supplied");
//   }
//   // API to clear the timeout
//   throttle.clearTimeout = function() {
//     clear();
//   };
// }

// const throttle = (func, limit) => {
//   let inThrottle;
//   return function() {
//     const args = arguments;
//     const context = this;
//     if (!inThrottle) {
//       func.apply(context, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// };

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default throttle;
