import { Either } from "src/generics/Either";
import { Optional } from "src/generics/Optional";
import { v4 as uuidv4 } from 'uuid';


export class body {

    private idNota: string;  //Nota al cual esa asociado el body 
    private text?: string;
    private imagen?: Buffer;
    private IDbody: string;

    private constructor(idNota: string, text?: string, imagen?: Buffer) {
        this.idNota = idNota;
        this.text = text;
        this.imagen = imagen;
        this.IDbody = uuidv4();
    }

    static create(idNota: string, text?: string, imagen?: Buffer): Either<Error, body> {
        if(text===undefined && imagen===undefined){
            return Either.makeLeft(new Error("Debe haber al menos un campo con información"));
        }
        if(idNota===undefined){
            return Either.makeLeft(new Error("Debe haber una nota para ser asociada"));
        }
        return Either.makeRight(new body(idNota, text, imagen));
        
    }

    //GETTERS
    public getidNota(): string {
        return this.idNota;
    }

    public gettext(): Optional<string> {
        if(this.text===undefined){
            return new Optional<string>();
        }else{
            return new Optional<string>(this.text);
        }
    }

    public getimagen(): Optional<Buffer> {
        if(this.imagen===undefined){
            return new Optional<Buffer>();
        }else{
            return new Optional<Buffer>(this.imagen);
        }
    }

    public getIDbody(): string {
        return this.IDbody;
    }

    //SETTERS
    public settext(text: string): void {
        this.text = text;
    }

    public setimagen(imagen: Buffer): void {
        this.imagen = imagen;
    }


    

}