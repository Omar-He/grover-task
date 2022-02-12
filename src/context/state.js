import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [term, setTerm] = useState("");
  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticle] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [term]);

  let store = {
    state: {
      allArticles: allArticles,
      searchTerm: term,
      selectedArticle: article,
      page: page,
    },
    setArticles: setAllArticle,
    updateSearchTerm: setTerm,
    setSelectedArticle: setArticle,
    setPage: (value) => setPage(value),
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
