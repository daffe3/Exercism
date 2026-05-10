//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
};

export const all = (promises) => {
  if (promises === undefined) return Promise.resolve(undefined);
  if (promises.length === 0) return Promise.resolve([]);

  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

export const allSettled = (promises) => {
  if (promises === undefined) return Promise.resolve(undefined);
  if (promises.length === 0) return Promise.resolve([]);

  return new Promise((resolve) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
        })
        .catch((error) => {
          results[index] = error;
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

export const race = (promises) => {
  if (promises === undefined) return Promise.resolve(undefined);
  if (promises.length === 0) return Promise.resolve([]);

  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

export const any = (promises) => {
  if (promises === undefined) return Promise.resolve(undefined);
  if (promises.length === 0) return Promise.resolve([]);

  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(errors);
          }
        });
    });
  });
};