import { onCleanup, createSignal } from "solid-js";

export function useWebWorker(arg0, workOptions, options = {}) {
  const { window } = options
  const [data, setData] = createSignal(null);
  const [worker, setWorker] = createSignal(null);

  const post = (...args) => {
    if (!worker()) {
      return;
    }
    worker().postMessage(...args);
  }

  const terminate = () => {
    if (!worker()) {
      return;
    }
    worker().terminate();
  }

  if (window) {
    if (typeof arg0 === 'string') {
      setWorker(new Worker(arg0, workOptions));
    } else if (typeof arg0 === 'function') {
      setWorker(arg0());
    } else {
      setWorker(arg0);
    }

    worker().onmessage = (e) => {
      setData(e.data);
    }

    onCleanup(terminate)
  }

  return {
    data,
    post,
    terminate,
    worker
  }
}