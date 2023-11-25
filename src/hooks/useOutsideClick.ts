import { useEffect, MutableRefObject } from "react";

function useOutsideClick(
  ref: MutableRefObject<any>,
  modalRef: MutableRefObject<any>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements or the modal's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        (modalRef?.current && modalRef?.current.contains(event.target as Node))
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
