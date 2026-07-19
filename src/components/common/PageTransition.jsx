const PageTransition = ({ children }) => {
  return (
    <div className="animate-[pageFade_.35s_ease]">
      {children}
    </div>
  );
};

export default PageTransition;