import React, { Component } from "react";
import { connect } from "react-redux";
import "./Comments.scss";

import CommentElement from "./CommentElement/CommentElement";
class Comments extends Component {
  render() {
    const { dataApp } = this.props;
    return (
      <article className="comments">
        <div className="container-comments">
          <div className="comments_header">Отзывы наших клиентов</div>
          <div className="container-section-client">
            {dataApp.books
              ? dataApp.books.personsComments.map((elem, index) => {
                  return (
                    <CommentElement
                      key={index}
                      props={{
                        name: elem.name,
                        description: elem.description,
                        date: elem.date,
                        url: elem.url
                      }}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </article>
    );
  }
}
const putStateToProps = state => {
  return {
    dataApp: state.app.dataApp
  };
};

export default connect(putStateToProps)(Comments);
