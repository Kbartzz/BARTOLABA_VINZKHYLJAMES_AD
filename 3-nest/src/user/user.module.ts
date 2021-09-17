import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
export class User{
  private id: number;
  private name: string;
  private age: number;
  private email: string;
  private password: string;

  constructor(id:number, name:string,age:number,email:string,password:string){
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
  log()
  {
    console.log(`${this.name}:${this.age}:${this.email}`)
  }
  
  toJson(){
    return{
      id: this.id,
      name:this.name,
      age:this.age,
      email:this.email
    }
  }
  register(){
    console.log("This account has been registered");

  }
  logIn(email:string, password:string){
    if(email===this.email && password===this.password){
      return "Login Sucess";
      }
    else{
      return "Invalid Password and Email";
    }
  }
}

