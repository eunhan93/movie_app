import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component{
  
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpate() -> componentWillUpate() -> render() -> componentDidUpate();
  // 컴포넌트 안의 state가 바뀔 때마다 render가 일어난다


  state = {}
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie.genres);
      return <Movie 
          title={movie.title_english} 
          poster={movie.medium_cover_image} 
          key={movie.id} 
          genres={movie.genres}
          synopsis={movie.synopsis}
        >
        </Movie>
    });
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }


  render(){
      return(
          <div className = {this.state.movies ? "App" : "App--loading"}>
            {this.state.movies ? this._renderMovies() : 'Loading'}
          </div>
      );
  }
}

export default App;
