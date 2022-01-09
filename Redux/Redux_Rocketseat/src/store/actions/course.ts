import { ILesson, IModule } from "../../data"
import { IActionRedux } from "../reducers/course"

export const toggleLesson=( module:IModule,lesson:ILesson):IActionRedux=>{
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    }
}