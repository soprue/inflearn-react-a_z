import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // !ref.current -> 잘못된 ref를 넣었거나, ref를 넣지 않았을 때 에러를 막아 주는 방어 코드 역할
      if(!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  return (
    <div>useOnClickOutside</div>
  )
}

export default useOnClickOutside