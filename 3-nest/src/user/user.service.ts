import { Injectable } from '@nestjs/common';
import { User } from './user.module';


@Injectable()
export class UserService {
    private users: Map<number,User> = new Map<number,User>();

    

    getAll(){
        var populatedData=[];
        for(const [number,users] of this.users.entries()){
           users.log();
        }
        return populatedData;
    }

    add(id:any){
        var newUser: User;
        newUser= new User(id?.id, id?.name, id?.age, id?.email, id?.password);
        this.users.set(id.id,newUser);
        this.logId();
 
     }

     search(id:number){
        if(this.users.has(id)){
            return this.users.get(id).toJson();
        }
        else{
            return "This is not exist in the database";
        }
        
      }

   logId(){
       for(const [number,users] of this.users.entries()){
           users.register();
       }
   }

    delete(id:number){
        if(this.users.has(id)){
            this.users.delete(id);
            return " This Id has been deleted";

        }
        else
        return " This id does not exist";
    }           


    logIn(email:string, password:string){
        for(const [string,users] of this.users.entries()){
            return users.logIn(email,password);
        }
    }
}
