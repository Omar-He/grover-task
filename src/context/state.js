import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [term, setTerm] = useState("");
  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticle] = useState([]);

  let store = {
    state: {
      allArticles: allArticles,
      searchTerm: term,
      selectedArticle: article,
    },
    setArticles: setAllArticle,
    updateSearchTerm: setTerm,
    setSelectedArticle: setArticle,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
