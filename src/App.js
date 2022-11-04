import React from 'react';
import './App.css';
import CalendarComponent from './components/CalendarComponent';

function App() {
  const [data,setData] =React.useState([])
  const getApiData = async() =>{
    const url = "https://calendarific.com/api/v2/holidays?&api_key=8b3ec351e7a4bea5ab34323761dd950c3a6797dd&country=pk&year=2022"
    const response = await fetch(url,{
      method:"GET"
    })
    const data  = await response.json()
    setData(data.response.holidays)
  }
  React.useEffect(()=>{

    getApiData()
  },[])
  return (
    <div className="App">
    <CalendarComponent data={data}/>
    </div>
  );
}

export default App;
