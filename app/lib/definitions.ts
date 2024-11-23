export type Plan = {
  id: string;
  name: string;
  essential : string;
  business : string;
  plus : string
};


export type Saying = {
  id : number;
  src : string;
  body : string;
  link : string ;
  name : string ;
  role : string
}

export type Collections = {
  id : number;
  src : string;
  body : string;
  name : string;
  role : string;
  link : string
}

export type Collabs = {
  id : number;
  topic : string;
  body : string;
  src : string
}