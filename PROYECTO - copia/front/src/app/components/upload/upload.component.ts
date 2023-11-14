// Importar el módulo Component de Angular
import { Component } from '@angular/core';
// Importar el servicio UploadService
import { UploadService } from 'src/app/services/upload.service';

// Definir el componente UploadComponent
@Component({
 // Seleccionador del componente
 selector: 'app-upload',
 // Ruta al archivo HTML del componente
 templateUrl: './upload.component.html',
 // Ruta al archivo CSS del componente
 styleUrls: ['./upload.component.css']
})

// Exportar la clase UploadComponent
export class UploadComponent {

 // Definir un array para almacenar los archivos a cargar
 uploadFiles: Array<File> = [];

 // Constructor del componente
 constructor(private uploadService: UploadService){

 }

 // Método para manejar la carga de archivos
 onUpload(){
   // Crear un objeto FormData
   let formData = new FormData();
   // Iterar sobre los archivos a cargar
   for(let i = 0; i < this.uploadFiles.length; i++){
     // Añadir cada archivo al objeto FormData
     formData.append("uploads[]", this.uploadFiles[i], this.uploadFiles[i].name)
   }
   // Llamar al método uploadFile del servicio UploadService y suscribirse a la respuesta
   this.uploadService.uploadFile(formData).subscribe((res) => {
     // Imprimir la respuesta en la consola
     console.log('Response:', res);
   });
 }

 // Método para manejar el cambio de archivos en el input de tipo file
 onFileChange(e: any){
   // Asignar los archivos seleccionados al array uploadFiles
   this.uploadFiles = e.target.files;
 }

}
