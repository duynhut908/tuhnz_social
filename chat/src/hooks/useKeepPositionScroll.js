import { useState, useEffect, useRef } from "react";

export default function useScrollPosition() {
  // Khai báo state để lưu vị trí cuộn
  
  const elementRef = useRef(null);  // Khởi tạo ref để tham chiếu đến phần tử cuộn
  const [scrollPosition, setScrollPosition] = useState(0); // Lưu vị trí cuộn

  const handleScroll = () => {
      if (elementRef.current) {
          setScrollPosition(elementRef.current.scrollTop); // Cập nhật vị trí cuộn
      }
  };

  useEffect(() => {
      const element = elementRef.current;
      if (element) {
          element.addEventListener("scroll", handleScroll); // Lắng nghe sự kiện cuộn của phần tử

          // Cleanup event listener khi component unmount
          return () => {
              element.removeEventListener("scroll", handleScroll);
          };
      }
  }, []); // Chạy một lần khi component mount

  

  return [scrollPosition, elementRef];
}
