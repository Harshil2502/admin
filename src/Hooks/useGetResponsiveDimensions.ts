import { useEffect, useRef, useState } from "react";

export default function useGetResponsiveDimensions() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [ref.current]);

  return { ref, width, height };
}
