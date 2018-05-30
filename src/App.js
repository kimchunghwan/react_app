import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from "./Movie";

// Component > render > return > JSX (html maked by react)

// Component Lifecycle 
//  Render : componentWillmount() -> render() -> componentDidMount()
//  Update : componentWillReceiveProps() -> ShouldComponentUpdate -> ComponentWillUpdate() -> render -> componentDidUpdate

// State
//  state가 바뀔때마다 render()가 불려진다.
// array sample 


class App extends Component {

  state = {

  }

  componentWillMount(){
    console.log("will mount")
  }

  render() {
    const movieInfo = this.state.MovieInfo
    return (
      
      <div className={movieInfo ? "App" : "App--loading"}>
        {this.state.MovieInfo ? this._renderMovieInfo() : "loading~!"}        
      </div>
    );
  }

  componentDidMount(){
    console.log("did mount")
    this._getMovieInfo()
    
  }

  _getMovieInfo = async () => {
    console.log("ttest!")
    const MovieInfo = await this._callApi()
    this.setState({
      MovieInfo
    })
    console.log(MovieInfo)
  }

  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(resp => resp.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }


  _renderMovieInfo = () => {
    return this.state.MovieInfo.map((MovieInfo, index) => {
      // 맵을 사용할시에 key 속성은 필수 
      // return <Movie title={MovieInfo.title} imgSrc={MovieInfo.imgSrc}  key={index}/>
      return <Movie 
                key={MovieInfo.id} 
                id={MovieInfo.id} 
                title={MovieInfo.title} 
                imgSrc={MovieInfo.medium_cover_image} 
                genres={MovieInfo.genres} 
                rating={MovieInfo.rating}
                synopsis={MovieInfo.synopsis}
              />
    })
  } 

}

export default App;
