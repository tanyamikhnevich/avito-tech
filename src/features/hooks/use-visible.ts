import { useCallback, useState } from "react";

export const useIsVisible = (defaultVisible: boolean) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const show = useCallback((func: () => void) => {
    setIsVisible(true);
    func();
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);

  return { isVisible, show, hide };
};
