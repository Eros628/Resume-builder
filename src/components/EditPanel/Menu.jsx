import { CircleUser, GraduationCap, NotepadText, Star} from 'lucide-react';

export  function Menu(){
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