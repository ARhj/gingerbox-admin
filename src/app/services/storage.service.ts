import { Injectable } from "@angular/core";

@Injectable()
export class StorageService
{
    constructor(){
    }

    getItem(key : string): string | null{
        return sessionStorage.getItem(key); 
    }

    setItem(key : string , value : string): void {
        sessionStorage.setItem(key,value);
    }

    removeItem(key : string): void{
        sessionStorage.removeItem(key);
    }

    clear(): void{
        sessionStorage.clear();
    }
    
    getLocalStorageItem(key : string): string | null{
        return localStorage.getItem(key); 
    }

    setLocalStorageItem(key : string , value : string): void {
        localStorage.setItem(key,value);
    }

    removeLocalStorageItem(key : string): void{
        localStorage.removeItem(key);
    }

    clearLocalStorage(): void{
        sessionStorage.clear();
    }
}