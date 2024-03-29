import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  openSnackBar(message:string,action:string){
    if(action==='error'){
      this.snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000,
        panelClass:['black-snackbar']
      });
    }else{
        this.snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000,
        panelClass:['green-snackbar']
      });
    }
  }
}
