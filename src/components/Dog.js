import {Component} from 'react';

class Dog extends Component {

  constructor(props){
    super(props);

    this.state = {
      dogImg:""
    };

    this.fetchDogs();

  }

  fetchDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({dogImg:data.message}))

  }

  render() {
    return (
      <>
        <div className='container'>
          <h2>Dog</h2>
          <button className='btn btn-success' onClick={this.fetchDogs}>Fetch New Dog</button>
          <br/>
          <img className='img-fluid' alt='dog' height={300} width={300} src={this.state.dogImg} />
        </div>
      </>
    );
  }
}



export default Dog;
