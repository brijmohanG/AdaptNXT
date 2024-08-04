import {Component} from 'react'
import { GoAlertFill } from "react-icons/go";
import './index.css'

class Icon extends Component{

    render() {
        return(
            <div className='bg-container'>
                <div className='container'>
                    <GoAlertFill className='icon'/>
                </div>
            </div>
        )
    }
        
}

export default Icon