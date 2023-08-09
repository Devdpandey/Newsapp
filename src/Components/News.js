import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
  constructor(){
    super()
    this.state={
      articles: []
    }
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/everything?q=nepal&apiKey=18a69ba88388491ca6c51f6336249e6b';
    let data = await fetch(url);
    let processedData = await data.json();
    console.log(processedData);
    this.setState({
      articles:processedData.articles
    });
  }
  render() {
    return (
      <div className='container'>
        <h2>Nepal News Updates:</h2>
        <div className='row my-3'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem  description={element.description ? element.description.slice(0 , 80) : ''} title={element.title ? element.title.slice(0, 30) : ''} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
      
      </div>
    )
  }
}

export default News
