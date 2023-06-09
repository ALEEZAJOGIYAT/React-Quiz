import React,{useState} from "react";
import './style.css'
import brain from '../../images/brainstorm.png'
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [data,setData]=useState({
    name:'',
    age:'',
    email:'',
    school:'',
  })
  const [isEmailValid,setIsEmailValid]=useState(false)
  const [emailError,setEmailError] = useState('')
  const history = useNavigate();

  const handleChange=(event)=>{
    setData(event.target.value);
    setData({...data,[event.target.name]:event.target.value})
  }

  const handleSubmit=(e)=>{
    if(data.name && data.email && data.age && data.school){
      setData({
        name:'',
        age:'',
        email:'',
        school:'',
      })
      history('/quiz')
    }
    e.preventDefault()
  }

  const validateEmail=()=>{
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!data.email.match(pattern)){
      setEmailError("Please enter valid email address")
      return false;
    }else{
        setEmailError("")
        setIsEmailValid(true)
        return true
      }
    }
  }



  return (
    <div className="body">
      <div className="body-content">
        <div className="body-img">
            {/* <img src={brain} className='bg-image'/> */}
        </div>
      </div>
      <div className="form-body">
      <div >
        <h2> Quiz Form </h2>
      <div className="body-form">
          <form>
            <TextField 
            label='Name' 
            value={data.name} 
            name='name'
            onChange={handleChange}
            required= {true}
            />
            <br/>
            <br/>
            <TextField
            label='Age' 
            value={data.age}
            name='age'
            onChange={handleChange}
            required= {true}
            />
            <br/>
            <br/>
            <TextField 
            label='Email' 
            value={data.email}
            name='email'
            onChange={handleChange}
            required= {true}
            />
            <br/>
            <br/>
            <TextField
            label='School' 
            value={data.school}
            name='school'
            onChange={handleChange}
            required= {true}
            />
            <br/>
            <br/>
            <Button 
            type="submit"
            onClick={handleSubmit} 
            variant='contained'>
              Submitt
            </Button>
          </form>

        </div>
      </div>
      </div>


      {/* <h2>LETS TEST YOUR SKILSS!!</h2>
      <Button color="primary" variant="contained" size="medium" disableRipple>
        Start
      </Button> */}
    </div>
  );
};
