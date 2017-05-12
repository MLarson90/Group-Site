import { Pipe, PipeTransform } from '@angular/core';
import { Member } from 'app/member.model';

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {

  transform(input: Member[], filterByRole) {
    var output: Member[]=[];
    if(filterByRole === "cheiftain"){
    for(var i=0; i<input.length; i++){
      if(input[i].role === "Cheiftain"){
        output.push(input[i]);
      }
    }
    return output;
  }else if (filterByRole === "prospect"){
    for(var i=0; i<input.length; i++){
      if(input[i].role === "Prospect"){
        output.push(input[i]);
      }
    }
    return output;
  }else if (filterByRole === "member"){
    for(var i=0; i<input.length; i++){
      if(input[i].role === "Member"){
        output.push(input[i]);
      }
    }
    return output;

}else {
  return input;
}
}
}
