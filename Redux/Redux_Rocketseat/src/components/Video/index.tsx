import {connect} from 'react-redux'
import { Dispatch } from 'redux'
import { ILesson, IModule } from '../../data'
import { IReducerReturn } from '../../store/reducers'


interface IProp{
    activeLesson: ILesson 
    activeModule: IModule
    dispatch: Dispatch
}

const Video = (prop:IProp)=>{
    return (
        <div>
            <strong>Módulo {prop.activeModule.title}</strong>
            <span>Aula {prop.activeLesson.title}</span>
        </div>
    )
}


export default  connect((state:IReducerReturn)=> 
                    ({
                        activeLesson: state.course.activeLesson,
                        activeModule: state.course.activeModule 
                    })
                )(Video)
