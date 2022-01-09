export interface ILesson{
    id: number
    title: string
}
export interface IModule{
    id:number
    title: string
    lessons: ILesson[]
}

export const modules:IModule[] =[
    {   
        id: 1, 
        title: 'Iniciando com React',
        lessons: [
            {id: 1, title: 'Primeira aula'},
            {id: 2, title: 'Segunda aula'},
        ]
    },{
        id: 2, 
        title: 'Aprendendo Redux',
        lessons: [
            {id: 3, title: 'Terceira aula'},
            {id: 4, title: 'Quarta aula'},
        ]
    }
] 