import { useState } from 'react'
import '../style/App.css'
import { EditPanel } from './EditPanel';
import { ResultPanel } from './ResultPanel';
import { useForm } from 'react-hook-form';

function App() {
  const {register, watch } = useForm(
    {
      defaultValues: {
        firstname: "",
        lastname: "",
        job: "",
        city: "",
        country: "",
        email: "",
        contact: "",
        summary: ""
      }
    
    });

  const values = watch();


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
       <EditPanel register={register}></EditPanel>
       <ResultPanel values={values}></ResultPanel>
    </>
  )
}

export default App
