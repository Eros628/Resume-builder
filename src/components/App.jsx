import { useState } from 'react'
import '../style/App.css'
import { EditPanel } from './EditPanel';
import { ResultPanel } from './ResultPanel';


function App() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    job: null,
    city: "",
    country: "",
    email: "",
    contact: "",
    summary: "",
  });

  const handleChange = (e)=>{
    const name = e.target.name;
    const newValue = e.target.value;
    setValue((prev)=>
    ({
      ...prev, [name]: newValue,
    }));
  };

  return (
    <>
       <EditPanel handleChange = {handleChange} value={value}></EditPanel>
       <ResultPanel value={value}></ResultPanel>
    </>
  )
}

export default App
