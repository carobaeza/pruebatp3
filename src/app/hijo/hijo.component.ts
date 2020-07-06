import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, FormBuilder, FormArray, Validators }from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  

  constructor(private fb:FormBuilder,private router:Router) { }
      
  nombre = new FormControl();

  celularForm = this.fb.group({
      nombre: ['', Validators.required],
      serie: [''],
      fechaFabricado: [''],
      marcas: this.fb.array([this.fb.control('')])
  });

      
  get marcas(){
      return this.celularForm.get('marcas') as FormArray;
  }
  addMarca(){
      this.marcas.push(this.fb.control(''));
  }



ngOnInit(): void {}

// goToListar(celularForm) {		
//   this.router.navigate(["/padre-component",celularForm]);
// }
submit(){
  debugger;
  this.celularForm.value;
}

}