import { useEffect, RefObject } from "react";

const useOutsideClickToClose = (ref: RefObject<HTMLElement>, onClose: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClose]);
};

export default useOutsideClickToClose;
