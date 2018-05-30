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
    flg : "hello!",
    MovieInfo : [
      { 
        id: 1,
        title : "hunger game",
        imgSrc : "http://cfile26.uf.tistory.com/image/246A924F52A41A0C333CED"
      },
      { 
        id: 2,
        title : "forest gump",
        imgSrc : "http://ticketimage.interpark.com/Movie/still_image/V16/V1601142p_01.gif"
      },
      { 
        id: 3,
        title : "creap",
        imgSrc : "https://assets.horseheadhuffer.com/hashed_silo_content/silo_content/15099/resized/creap.jpg"
      },
      { 
        id: 4,
        title : "day after tomorrow",
        imgSrc : "http://image.cine21.com/IMGDB/poster/2004/0430/large/193157_01.jpg"
      },
    ]
  }


  componentWillMount(){
    console.log("will mount")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React test</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!!!!
        </p>
        <h3>{this.state.flg} </h3>
        // if MovieInfo empty disp just "loading~!"
        {this.state.MovieInfo ? this._renderMovieInfo() : "loading~!"}        
      </div>
    );
  }

  componentDidMount(){
    console.log("did mount")

    // test state 
    setTimeout(() => {
      // wrong code 
      // this.state.flg = "say again! hello!" 

      this.setState({
        flg:"test state again!",
        MovieInfo:[  
          {
            id: 5,
            title : "엣지 오브 투모로우",
            imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOW91EdWVNqOGfUtZswKdmMXCcAQMPXR-X1Cu-92TvqMa5y3wFvjNQ5Y"
          },
          ...this.state.MovieInfo,
        ]
      })
    }, 5000); // sec 

  }
  

  _renderMovieInfo = () => {
    return this.state.MovieInfo.map((MovieInfo, index) => {
      // 맵을 사용할시에 key 속성은 필수 
      return <Movie title={MovieInfo.title} imgSrc={MovieInfo.imgSrc}  key={index}/>
    })
  } 

}

export default App;
