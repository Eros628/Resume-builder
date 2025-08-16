import '../style/App.css';
import { Mail, Phone} from 'lucide-react';
export function EditPanel(props){
    return(
        <>
            <div className='col1-edit'>
                <Menu></Menu>
                <div className='edit-section'>
                    <PersonalPanel value={props.value} handleChange={props.handleChange}></PersonalPanel>
                </div>
            </div>
        </>

    )
}

function PersonalPanel(prop){
    return(
        <>
            <h1>Personal Information</h1>
            <form>
                <div className='inputs'>
                    <div className='nameField'>
                        <div className='fieldgroup'>
                            <label htmlFor='firstName' >First Name:</label>
                            <input name='firstname' value={prop.value.firstname} onChange={prop.handleChange} id='firstName' className='firstname field' placeholder='First Name'></input>
                        </div>
                        <div className='fieldgroup'>
                            <label htmlFor='lastName' >Last Name:</label>
                            <input name='lastname' value={prop.value.lastname} id='lastName'  onChange={prop.handleChange} className='lastname field' placeholder='Last Name'></input>
                        </div>
                    </div> 
                    <div className='jobField fieldgroup'>
                        <label htmlFor='jobTitle'>Job Title:</label>
                        <input name='job' value={prop.value.job} onChange={prop.handleChange} id='jobTitle' className='job field' placeholder='Enter Job Title'></input>
                    </div>
                    <div className='addressField'>
                        <div className='fieldgroup'>
                            <label htmlFor='city'>City</label>
                            <input name='city' value={prop.value.city
                            } onChange={prop.handleChange} id='city' className='city field' placeholder='Enter Your City'></input>
                        </div>
                        <div className='fieldgroup'>
                            <label htmlFor='country'>Country</label>
                            <input name="country" value={prop.value.country} onChange={prop.handleChange} id='country' className='country field' placeholder='Enter Your Country'></input>
                        </div>
                        
                    </div>
                    <div className='socialsField'>
                        <div className='fieldgroup-row'>
                            <Mail/>
                           
                            <input name="email" value={prop.value.email} onChange={prop.handleChange} className='email field'></input>
                        </div>
                        <div className='fieldgroup-row'>
                            <Phone/>
                           
                            <input name='contact' value={prop.value.contact} onChange={prop.handleChange} className='contactNum field'></input>
                        </div>
                    </div>

                    <div className='summaryField fieldgroup'>
                        <label htmlFor='summary'>Summary</label>
                        <textarea rows={10} value={prop.value.summary} name='summary' onChange={prop.handleChange} className='summary field'></textarea>
                    </div>


                </div>
               
               
                
              
            </form>
        </>
        
    )
}

function WorkPanel(){

}

function EducationPanel(){

}


function Menu(){
    return(
        <div className='menu-section'>
             <div className='menu'>
            <ButtonsMenu title={"Personal Information"} 
                 svg={<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1">
                <path d="M512 0C229.611606 0 0 229.611606 0 512s229.611606 512 512 512 512-229.611606 512-512S794.258081 0 512 0z m309.102571 815.890048c-9.773479-52.776788-32.83889-102.686689-67.502164-144.386867a38.937541 38.937541 0 0 0-54.99211-4.951896 38.937541 38.937541 0 0 0-4.951896 54.99211c35.184525 42.351743 54.601171 95.91041 54.601171 151.032833 0 0.912191 0.260626 1.824383 0.260626 2.736574-68.023416 44.436752-149.20845 70.369051-236.518198 70.369051s-168.364469-25.932298-236.518198-70.369051c0-0.912191 0.260626-1.69407 0.260626-2.736574 0-130.182744 105.944515-236.257572 236.257572-236.257572 121.712395 0 220.750318-99.037923 220.750318-220.750318s-99.037923-220.750318-220.750318-220.750318-220.750318 99.037923-220.750318 220.750318c0 70.499364 33.229829 133.179944 84.8338 173.576992-89.003818 42.872996-154.811911 126.533978-173.186053 226.614405C125.7521 737.571901 78.187834 630.193942 78.187834 512 78.187834 272.745228 272.745228 78.187834 512 78.187834s433.812166 194.557394 433.812166 433.812166c-0.130313 118.193942-47.694579 225.571901-124.709595 303.890048zM369.307203 415.698651c0-78.578773 63.983711-142.562484 142.562484-142.562484s142.562484 63.983711 142.562484 142.562484c0 78.709086-63.983711 142.562484-142.562484 142.562484S369.307203 494.277424 369.307203 415.698651z"/></svg>}>
            </ButtonsMenu>

            <ButtonsMenu title={"Work Experience"} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px" viewBox="0 0 100 100"><path d="M28.5,68.5v-34H26.9a4.89,4.89,0,0,0-4.8,4.9V74.8a4.89,4.89,0,0,0,4.8,4.9H62.5a4.89,4.89,0,0,0,4.8-4.9V73.4h-34A4.89,4.89,0,0,1,28.5,68.5Z"/><path d="M46.4,30.2H64.1a1.58,1.58,0,0,0,1.6-1.6V25.3a4.89,4.89,0,0,0-4.8-4.9H49.6a4.82,4.82,0,0,0-4.8,4.9v3.3A1.64,1.64,0,0,0,46.4,30.2Z"/><path d="M73,24.4H71.4a.74.74,0,0,0-.8.8v3.3a6.57,6.57,0,0,1-6.5,6.6H46.4a6.64,6.64,0,0,1-6.5-6.6V25.2a.74.74,0,0,0-.8-.8H37.5a4.82,4.82,0,0,0-4.8,4.9V64.6a4.89,4.89,0,0,0,4.8,4.9H73a4.82,4.82,0,0,0,4.8-4.9V29.4A4.85,4.85,0,0,0,73,24.4ZM60.9,55.5a1.58,1.58,0,0,1-1.6,1.6H43.1a1.58,1.58,0,0,1-1.6-1.6V53.9a1.58,1.58,0,0,1,1.6-1.6H59.3a1.58,1.58,0,0,1,1.6,1.6ZM69,47.3a1.58,1.58,0,0,1-1.6,1.6H43.1a1.58,1.58,0,0,1-1.6-1.6V45.7a1.58,1.58,0,0,1,1.6-1.6H67.4A1.58,1.58,0,0,1,69,45.7Z"/></svg>}>
            </ButtonsMenu>

            <ButtonsMenu title={"Education"} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true"><path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z"/></svg>}>
            </ButtonsMenu>

            <ButtonsMenu title={"Skills"} svg={<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" viewBox="0 0 232.688 232.688" xml:space="preserve">
            <g id="XMLID_350_">
                <g id="XMLID_351_">
                    <path id="XMLID_352_" d="M97.688,61.344h120c8.284,0,15-6.716,15-15s-6.716-15-15-15h-120c-8.284,0-15,6.716-15,15    S89.403,61.344,97.688,61.344z"/>
                </g>
                <g id="XMLID_439_">
                    <path id="XMLID_440_" d="M217.688,101.344h-120c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15    S225.972,101.344,217.688,101.344z"/>
                </g>
                <g id="XMLID_441_">
                    <path id="XMLID_443_" d="M217.688,171.344h-120c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15    C232.688,178.06,225.972,171.344,217.688,171.344z"/>
                </g>
                <g id="XMLID_444_">
                    <path id="XMLID_445_" d="M48.785,104.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181    c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104    c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336    c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698    c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5    c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688    C53.958,106.797,51.61,104.818,48.785,104.408z"/>
                </g>
                <g id="XMLID_446_">
                    <path id="XMLID_447_" d="M48.785,34.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181    c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104    c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336    c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698    c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142,0,7.499-3.358,7.499-7.5c0-0.629-0.077-1.241-0.223-1.825    l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688C53.958,36.797,51.61,34.818,48.785,34.408z"/>
                </g>
                <g id="XMLID_448_">
                    <path id="XMLID_449_" d="M48.785,174.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181    c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104    c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336    c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698    c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5    c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688    C53.958,176.797,51.61,174.818,48.785,174.408z"/>
                </g>
            </g>
            </svg>}>

            </ButtonsMenu>

            </div>
            <div className='open-menu'>
                
            </div>
        </div>
       
    )
}

function ButtonsMenu(props){
    return(
        <button className= {props.title + " btn"} title={props.title}>
                {props.svg}
        </button>   
    )
}