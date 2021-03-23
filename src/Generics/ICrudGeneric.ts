

export interface ICrudGeneric<Tclass>{
    addItem(item: Tclass):void;
    removeItem(item: Tclass):void;
    findItem(id:number): any;
}