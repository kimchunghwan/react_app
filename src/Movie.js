import React, { Component } from "react";
import PropTypes from "prop-types" ;
import "./Movie.css";
import LinesEllipsis from 'react-lines-ellipsis'

class Movie extends Component {

    static propTypes = {
        title : PropTypes.string,
        imgSrc : PropTypes.string, 
        //id : PropTypes.number.isRequired // isRequired mean not null 
        genres : PropTypes.array,
        synopsis : PropTypes.string
    }

    render(){
        // console.log(this.props)
        // console.log("the title is " + this.props["title"])
        return(
            <div className="Movie"  id={this.props.id} >
                <div className="Movie_Cols">
                    <MoviePoster imgSrc={this.props.imgSrc} title={this.props.title} />
                </div>
                <div className="Movie_Cols">
                    <h1> {this.props.title} </h1>
                    <div className="Movie_Gen" >
                    {this.props.genres.map((genres,index) => <MovieGenres genres={genres} key={index} /> )}
                    </div>
                    <div className="Movie_Synopsis" >
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='4'
                            ellipsis=' ...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>
                </div>    
                {/* <MoviePoster imgSrc={this.props.imgSrc}/> */}
            </div>
        )
    }
}

function MovieGenres({genres}){
    return (
        <span className="Movie_Genres" >{genres} </span>
    )
}

// 파라미터 설정에 주의 할것. 어디까지나 자바스크립트에 리액트 변수를 셋팅한다는 감각으로!!!
function MoviePoster({imgSrc}, {title}) {
    return (
        <img className="Movie_Poster" src={imgSrc} alt="Movie Poster IMG" title={title} />
    )
}


// class MoviePoster extends Component {
//     render(){
//         console.log(this.props)
//         return (
//             <img src={this.props.imgSrc} alt="Movie Poster IMG" />
//         )
//     }
// }

export default  Movie 