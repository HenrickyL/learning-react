import {combineReducers} from 'redux'

import course,{ICourseReturn} from '../reducers/course'

export interface IReducerReturn{
    course: ICourseReturn;
}

export default combineReducers<IReducerReturn>({
    course
})