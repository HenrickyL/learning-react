import { useState } from "react"
import {Dispatch} from 'redux'
import { connect } from "react-redux"
import { IReducerReturn } from "../../store/reducers"
import * as CourseActions from "../../store/actions/course"
import {bindActionCreators} from 'redux'

type TLessons = {
    id: number,
    title:string,
}
type TModule = {
    id: number,
    title:string,
    lessons: TLessons[]
}
type TProp  = {
    modules?: TModule[],
    toggleLesson: Function
}




const Sidebar = ({modules,toggleLesson}:TProp): JSX.Element=>{
    const [_modules] = useState(modules || [])

    
    return (

        <aside>
            {
                _modules.map(module=>(
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map(lesson=>(
                                <li key={lesson.id}>
                                    {lesson.title}
                                    <button 
                                        onClick={()=>toggleLesson(module,lesson)}>
                                            Selecionar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </aside>
    )
}


const mapStateToProps = (state:IReducerReturn) =>{

    return{modules: state.course.modules}
}
const mapDispatchToProps = (dispatch:Dispatch) =>
     bindActionCreators(CourseActions,dispatch)

export default  connect(
                    mapStateToProps,
                    mapDispatchToProps
                )(Sidebar);
