import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import BreadCrunm from './components/BreadCrumb';
import Images from './components/Images'
import { getImages } from './services/api';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('cars');
  const [count, setCount] = useState(10);
  useEffect(() => {

    const getData = async () => {
      await getImages(text, count).then(response => {
        setData(response.data.hits);
      }); 
    }
    getData();
  }, [text, count])

  const onTextChange = (text) => {
    setText(text);
  }

  const onCountChange = (count) => {
    setCount(count);
  }
  return (
    <div className="App">
      <NavBar/>
      <BreadCrunm onTextChange={onTextChange} onCountChange={onCountChange}/>
      <Images data={data}/>
    </div>
  );
}

export default App;
