import '../style/App.css';
import { CircleUser, GraduationCap, Mail, NotepadText, Phone, Star} from 'lucide-react';
export function EditPanel({register}){
    return(
        <>
            <div className='col1-edit'>
                <Menu></Menu>
                <div className='edit-section'>
                    <PersonalPanel register= {register}></PersonalPanel>
                </div>
            </div>
        </>

    )
}

function PersonalPanel({register}){
    return(
        <>
            <h1>Personal Information</h1>
            <form>
                <div className='inputs'>
                    <div className='nameField'>
                        <div className='fieldgroup'>
                            <label htmlFor='firstName' >First Name:</label>
                            <input {...register('firstname')} id='firstName' className='firstname field' placeholder='First Name'></input>
                        </div>
                        <div className='fieldgroup'>
                            <label htmlFor='lastName' >Last Name:</label>
                            <input {...register('lastname')} id='lastName'  className='lastname field' placeholder='Last Name'></input>
                        </div>
                    </div> 
                    <div className='jobField fieldgroup'>
                        <label htmlFor='jobTitle'>Job Title:</label>
                        <input {...register("job")} id='jobTitle' className='job field' placeholder='Enter Job Title'></input>
                    </div>
                    <div className='addressField'>
                        <div className='fieldgroup'>
                            <label htmlFor='city'>City</label>
                            <input {...register('city')} id='city' className='city field' placeholder='Enter Your City'></input>
                        </div>
                        <div className='fieldgroup'>
                            <label htmlFor='country'>Country</label>
                            <input {...register('country')} id='country' className='country field' placeholder='Enter Your Country'></input>
                        </div>
                        
                    </div>
                    <div className='socialsField'>
                        <div className='fieldgroup-row'>
                            <Phone/>
                           
                            <input {...register('contact')} className='contactNum field'></input>
                        </div>
                        <div className='fieldgroup-row'>
                            <Mail/>
                           
                            <input {...register('email')} className='email field'></input>
                        </div>
                        
                    </div>

                    <div className='summaryField fieldgroup'>
                        <label htmlFor='summary'>Summary</label>
                        <textarea rows={10} {...register('summary')} className='summary field'></textarea>
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
            <ButtonsMenu title={"Personal Information"} >
                <CircleUser></CircleUser>
            </ButtonsMenu>

            <ButtonsMenu title={"Work Experience"}>
                <NotepadText></NotepadText>
            </ButtonsMenu>

            <ButtonsMenu title={"Education"}>
                <GraduationCap></GraduationCap>
            </ButtonsMenu>

            <ButtonsMenu title={"Skills"}>
                <Star></Star>
            </ButtonsMenu>

            </div>
            <div className='open-menu'>
                
            </div>
        </div>
       
    )
}

function ButtonsMenu({title, children}){
    return(
        <button className= {title + " btn"} title={title}>
                {children}
        </button>   
    )
}