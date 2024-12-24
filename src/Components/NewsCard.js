import React from "react";
import Pic from "./imgs/Pic.jpeg";

export default function NewsCard(props) {
  const { title, description, urlToImage, newsUrl, author, date } = props;

  if (!title && !description && !urlToImage && !newsUrl && !author && !date) {
    return null;
  }

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={urlToImage || Pic}
          className="card-img-top"
          alt={title || "News Image"}
        />
        <div className="card-body">
          <h5 className="card-title">{title || "No Title Available"}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {author || "Unknown Author"}
          </h6>
          <p className="card-text">
            {description || "No Description Available"}
          </p>
          <p className="card-text">
            <small className="text-muted">
              {date ? new Date(date).toDateString() : "No Date Provided"}
            </small>
          </p>
          <a
            href={newsUrl || "#"}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
