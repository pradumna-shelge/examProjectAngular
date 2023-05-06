export interface TIME{
    hour: number;
    minute: number;
    second: number;
}


export interface QUESTION{
    Id:number;
    Question:String,
    Mcq:{
        A:string,
        B:string,
        C:String,
        D:string
    },
    Ans:string,
    
}

export interface ANSWER{
    Id:number;
    status:boolean;
}

export interface MARK{
    mark:number;
    out:number;
}