import { useState } from 'react';
import styles from './App.module.css';
import { ArticleList, SearchForm } from './components';
import { fetchArticlesWithTopic } from './article-api';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setIsLoading(true);
        const data = await fetchArticlesWithTopic(topic);
        setArticles(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
  }

  
  return (
    <div className={styles.container}>
      <SearchForm onSearch={onSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Whoops...something went wrong!</p>}
      {articles?.length > 0 && <ArticleList articles={articles} />}
    </div>
  )
}

export default App;
