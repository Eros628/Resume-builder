import "../../style/App.css";
import { PersonalPanel } from './PersonalPanel';
import { Menu } from './Menu';

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



