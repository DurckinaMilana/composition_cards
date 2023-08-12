import './App.css';
import Card from './components/Card';
import image from './assets/no_photo.png';

function App() {

  return (
    <div className='app'>
      <Card>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn">Go somewhere</a>
      </Card>
      <Card image={image}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn">Go somewhere</a>
      </Card>
    </div>
  )
}

export default App