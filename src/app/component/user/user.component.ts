import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;
//
  constructor(private dataservice:DataService) {
      console.log("constructor ran");
   }

  ngOnInit() {
  console.log("ng init ");
  this.name="jhon";
  this.age= 30;
  this.email = 'test@test.com';
  this.address= {
  street:'50 main street',
  city:'boston',
  state:'MA'
  }
  this.hobbies = ['write code','watch movies','play music'];
    this.hello = 'hello';

    this.dataservice.getPosts().subscribe((posts)=>
      {
       // console.log(posts);
       this.posts = posts;
      }
    )
  }

onClick(){

console.log("heelo on click event has been occured");
this.name="krishna sravalya";
this.hobbies.push('new hobby');

}

addHobby(hobby)
{
console.log(hobby);
this.hobbies.unshift(hobby);
return false;
}

deleteHobby(hobby)
{

  for( let i = 0;i < this.hobbies.length;i++)
  {
    if(this.hobbies[i] == hobby)
    {
    this.hobbies.splice(i,1);
    }
  }

}

toggleEdit()
{
    this.isEdit = !this.isEdit ;
}

}


interface Address
{
street:string,
city:string,
state:string
}

interface Post
{
  id: number,
  title:string,
  body: string,
  userId: number
}
