export class ConfigService {
 
    private urlService:string;
 
    constructor(){
 
        // localhost:8080 - Mesmo endereço da aplicação java em que o tomcat do spring está subindo
        this.urlService = 'http://localhost:8080/service';
    }
 
    getUrlService(): string {
 
        return this.urlService;
    }
 
}