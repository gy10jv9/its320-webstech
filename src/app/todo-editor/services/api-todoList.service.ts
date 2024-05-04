import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
  
@Injectable({ 
    providedIn: 'root'
}) 
export class ApiService_TodoList { 
    constructor(private http: HttpClient) { }

    get_todolist() {
        return this.http.get(
            'http://localhost:3000/task'
        )
    }
    post_todolist = (data: any) => {
        return this.http.post( 
            'http://localhost:3000/task', data
        );
    }
}