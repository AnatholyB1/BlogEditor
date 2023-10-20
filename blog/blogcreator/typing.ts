export interface User {
    token?: string,
    usr : string,
    pwd : string
}


export type UpdateObject = {
  publish_date? : string,
  image? : File,
  category : string,
  writer : string
  submited : boolean
}

import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  contentType: z.string(),
})

export type Task = z.infer<typeof taskSchema>

const categorySchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
})

export type CategoryTab = z.infer<typeof categorySchema>



export type DataDocList = {
  content_type
: 
string,
name
: 
string,
published
: 
number,
title
: 
string,
blog_category : string,
content_json : string,
blogger : string,
}


export type Category = {
  name : string,
}

export type TabContextType = 'Post' | 'Categories' 

export type contextTab = {
  variable : TabContextType;
  ChangeVariable : (newValue: TabContextType) => void;
}

export type PostContextType = string

export type contextPost = {
  update : UpdateObject;
  variable : PostContextType;
  dataList : DataDocList[] | undefined
  data : DataDocList | undefined;
  ChangeObject :(newobj?: UpdateObject, property?: keyof UpdateObject, value?: UpdateObject[keyof UpdateObject]) => void;
  ChangeVariable : (newValue: PostContextType) => void;
}

export type DataType = {
  name : string,
  title : string,
  published : number,
}

export type TypeContextType = string

export type contextType = {
  variable : TypeContextType;
  data : () => {
    data: DataType[];
    isLoading: boolean;
};
  ChangeVariable : (newValue: TypeContextType) => void;
}



export type UserType = {
  name : string,
  full_name : string
}