import {ICrudGeneric} from './ICrudGeneric';
import {InItem} from '../Models/Items/InItem';

export abstract class CrudGeneric<Tclass extends InItem> implements ICrudGeneric<Tclass> {
	items: Tclass[] = [];
	
	addItem(item: Tclass){
		this.items.push(item);
	}

	removeItem(item: Tclass){
		this.items = this.items.filter(it => it.id !== item.id)
	}

	findItem(id: number): any {
	return this.items.find(e => e.id === id);
 	} 

	showNum(): String{
		return `Num is: ${this.items.length}`;	
	}
} 

