const useScrollToCategory = (
  categoryRefs: React.MutableRefObject<Record<string, HTMLElement | null>>
) => {
  // Thanks to closure
  const scrollToCategory = (category: string) => {
    const categoryElement = categoryRefs.current[category];
    if (categoryElement) {
      categoryElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return scrollToCategory;
};

export default useScrollToCategory;
