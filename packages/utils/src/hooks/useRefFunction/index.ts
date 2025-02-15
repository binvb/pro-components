﻿import { useRef } from 'react';

const useRefFunction = <T extends (...args: any) => any>(reFunction: T) => {
  const ref = useRef<any>(null);
  ref.current = reFunction;
  return (...rest: Parameters<T>): ReturnType<T> => {
    return ref.current?.(...(rest as any));
  };
};

export { useRefFunction };
