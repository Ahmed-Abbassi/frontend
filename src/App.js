
import './styles/App.scss'
import chat from './images/chat.jpg'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import About from './components/About'
import Project from './components/Project'
import Modal from './components/Modal'

import {faCircleUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function App() {
  const [formData , setFormData] =useState({fullName: '', email: '', phone: '', service: '', message: ''})
  const [VisibleScrollButton, setVisibleScrollButton] = useState(false)
  const [modalType , setModalType] = useState("")




  //functions

  const goTop = function(){
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  }


  const handleSubmit = (e)=>{
    
    e.preventDefault()
    fetch("http://localhost:3001/contact", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(formData)
    }).then(response=>{
      if(!response.status===200){
        throw new Error('Network response error')
      }
      setFormData({fullName: '', email: '', phone: '', service: '', message: ''})
      return response.json()
    }).then(data=>{
      console.log(data);

    setModalType("success")
    setTimeout(()=>{
      setModalType("")
    },5000)
      
    }).catch((e)=>{
      console.log(e);
      
      setModalType("fail")
      setTimeout(()=>{
        setModalType("")
      },5000)
      
    })
  }
  
  
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
    console.log(formData);
  };

  useEffect(()=>{
    const handleScroll = ()=>{
      const isTop = window.scrollY < 500;
      setVisibleScrollButton(!isTop)
    }

    window.addEventListener("scroll", handleScroll)
    
    return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])
  console.log("hello");


  return (
    <div className="App">
      <Header />
      <main>
        {VisibleScrollButton && <div onClick={goTop} id='scrollTop'><FontAwesomeIcon id='icon' size='lg' icon={faCircleUp} /></div>}
        <AboutMe />
        <About />
        <h4 id='portfolio'>Portfolio</h4>
        <h4 id='afterPortfolio'>Each Project is a piece of developement</h4>
        <div id='projectsList'>
          <Project image={chat} technologies={['React js', "Css"]}  />
        </div>

        {/*contact form starts here*/}
        
        <div id='contact'>
          <h1>Contact me</h1>
          <form method='post' onSubmit={handleSubmit}>
            <div id='FullNameContainer'>
              <label>Full Name *</label><br/>
              <input value={formData.fullName} placeholder='Enter Your Name' onChange={handleChange} type='text' name='fullName' required />
            </div>
            <div  className='emailConatainer'>
                <label>Email *</label><br/>
                <input value={formData.email} placeholder='Enter Your Email' onChange={handleChange} type='text' name='email' required />
              </div>
              <div className='phoneContainer'>
                <label>Phone</label><br/>
                <input value={formData.phone} placeholder='Enter Phone Number' onChange={handleChange} type='text' name='phone' />
              </div>

            <div id='emailAndPhoneContainer'>
              <div className='emailConatainer1'>
                <label>Email *</label><br/>
                <input value={formData.email} placeholder='Enter Your Email' onChange={handleChange} type='text' name='email' required />
              </div>
              <div className='phoneContainer2'>
                <label>Phone</label><br/>
                <input value={formData.phone} placeholder='Enter Phone Number' onChange={handleChange} type='text' name='phone' />
              </div>
            </div>
            <div id='selecionContainer'>
              <label>Needed Service *</label><br/>
              <select value={formData.service} onChange={handleChange} name='service'>
                <option id='remove'>Please choose</option>
                <option>Build web solution</option>
                <option>Build mobile solution</option>
                <option>Integrate salesforce solution</option>
              </select>
            </div>
            <div id='textAreaContainer'>
              <div>
              <label>Message</label> <br/>
              <textarea value={formData.message} onChange={handleChange} placeholder='Your message here' name='message' />
              </div>
            </div>
            <div id='btnContainer'>
            <input type='submit' id='btn' value={"submit"} />
            </div>
          </form>
        </div>

      </main>
      <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>Portfolio</h3>
          <p>A showcase of my work</p>
        </div>
        <div className="footer-right">
          <h3>Contact Me</h3>
          <p>Email: abbassia082@gmail.com</p>
          <p>Phone: +50723785</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Abbassi Ahmed. All rights reserved.</p>
      </div>
    </footer>
  {modalType==="success" ? 
    <Modal identifier={'messageDialog1'} stateChange={setModalType}>form submitted successfully</Modal>
    :modalType==="fail" ? 
    <Modal identifier={'messageDialog2'} stateChange={setModalType}>Error submitting form</Modal>
    : <></>
    }
      
    </div>
  );
}
export default App