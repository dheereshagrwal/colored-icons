import { useEffect } from "react";

function useOutsideClick(ref, modalRef, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements or the modal's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        (modalRef?.current && modalRef?.current.contains(event.target))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, modalRef]); // Adding modalRef to the dependencies array
}

export default useOutsideClick;
