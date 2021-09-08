import { ItemType } from '../../../models/item.model';
		
const ListOfItems = [
    {
        itemName: 'Example1',
        isActive: true,
        value: 1,
    },
    {
        itemName: 'Example2',
        isActive: false,
        value: 2,
    },
    {
        itemName: 'Example3',
        isActive: true,
        value: 3,
    },
];

export const listItems = (itemList = ListOfItems, action:{type: string, payload: ItemType} ) => {
    switch(action.type){
        case 'ITEM_ADDED':{
            console.log('testing');
            let list = [...itemList];
            const itemObj = {
                itemName: action.payload.itemName,
                isActive: action.payload.isActive,
                value: action.payload.value,
            };
            list.push(itemObj);
            return list;
        }
        default: return itemList;
    }
}
