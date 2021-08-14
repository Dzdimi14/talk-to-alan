import React, {useEffect, useState} from "react";
import './index.css';
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles.js';
import alanBtn from '@alan-ai/alan-sdk-web';



const alanKey = '266e102b49582cc0344f28cf7d8c998b2e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {

  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();


  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
        }
      }
    })
  }, [])


  return (
    <div>
      <div className={classes.title}>
        Ask Alan The Wise
      </div>
      <NewsCards articles={newsArticles}></NewsCards>
    </div>
  );
}

export default App;
