import React, { useState, useEffect } from "react";
import Newsitems from "./NewsCard";
import Spinner from "./Loading";
import PropTypes from "prop-types";

const News = (props) => {
  const { country, category, pageSize } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b6c6d089a3cd496682fe7c57dc2ff4be&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `${category} News`;
    updateNews();
    // eslint-disable-next-line
  }, [country, category, page, pageSize]);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    if (!(page + 1 > Math.ceil(totalResults / pageSize))) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="container my-3">
        <h2 className="text-center" style={{ marginTop: "90px" }}>
          Today News Headline
        </h2>
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description ? element.description.slice(0, 88) : ""
                    }
                    urlToImage={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
