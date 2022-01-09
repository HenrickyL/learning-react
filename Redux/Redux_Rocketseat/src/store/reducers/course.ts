import { Action } from "redux";
import { ILesson, IModule, modules } from "../../data";


export interface ICourseReturn{
    activeLesson: ILesson 
    activeModule: IModule 
    modules: IModule[]
}

const INITIAL_STATE:ICourseReturn = 
{
    activeLesson: {id:0, title:"none"},
    activeModule: {id:0, title:"none", lessons:[]},
    modules
};


export interface IActionRedux extends Action{
    lesson: ILesson
    module: IModule
}


export default function reducerCourse(state:ICourseReturn = INITIAL_STATE, action:IActionRedux):ICourseReturn{
    switch (action.type) {
        case "TOGGLE_LESSON":
            return{
                ...state,
                activeLesson: action.lesson,
                activeModule: action.module
            }
    
        default:
            return state;
    }
    
    
    
    
}
