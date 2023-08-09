import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className="card mb-3 w-100" >
        <img src={imageUrl ?? 'https://images.examples.com/wp-content/uploads/2018/03/Purehell.crop_671x504_03.preview.jpg'} className="customImg img-fluid" alt={title}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a target='_blank' href={newsUrl}  className="btn btn-primary btn-sm">Detail</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
