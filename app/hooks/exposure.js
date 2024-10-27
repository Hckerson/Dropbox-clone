










// {const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//         setHasAnimated(true); // Prevent further updates
//       }
//     });
  
//     if (elementRef.current && !hasAnimated) {
//       observer.observe(elementRef.current);
//     }
  
//     return () => {
//       if (elementRef.current) observer.unobserve(elementRef.current);
//     };
//   }, [hasAnimated]);}