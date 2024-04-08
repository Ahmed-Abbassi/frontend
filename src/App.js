
import './styles/App.scss'
import chat from './images/chat.jpg'
import { useState } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import About from './components/About'
import Project from './components/Project'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import {faXmarkCircle} from '@fortawesome/free-regular-svg-icons'



function App() {
  const [formData , setFormData] =useState({fullName: '', email: '', phone: '', service: '', message: ''})
  const [modalViewed , setModalViewed] = useState("hideModal")
  const handleSubmit = (e)=>{
    
    e.preventDefault()
    fetch("http://localhost:3001/contact", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(formData)
    }).then(response=>{
      if(!response.status==200){
        throw new Error('Network response error')
      }
      setFormData({fullName: '', email: '', phone: '', service: '', message: ''})
      return response.json()
    }).then(data=>{
      console.log(data);
      setModalViewed("viewModal")
    setTimeout(()=>{
      setModalViewed("hideModal")
    },5000)
      
    }).catch((e)=>{
      console.log(e);
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
  


  return (
    <div className="App">
      <Header />
      <main>
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
            <div id='emailAndPhoneContainer'>
              <div id='emailConatainer'>
                <label>Email *</label><br/>
                <input value={formData.email} placeholder='Enter Your Email' onChange={handleChange} type='text' name='email' required />
              </div>
              <div id='phoneContainer'>
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
  { <div id='messageDialog' className={modalViewed}>
      <FontAwesomeIcon className='icon' icon={faCircleCheck} />
      <p>Form submitted successfully</p>
      <FontAwesomeIcon onClick={()=>{setModalViewed('hideModal')}} className='icon' icon={faXmarkCircle} />
    </div>}
      
    </div>
  );
}
export default App