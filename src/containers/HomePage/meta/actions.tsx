import { ItemType } from '../../../models/item.model';
		
export const addNewItem = (item: ItemType) => {
    return (
        {
            type: 'ITEM_ADDED',
            payload: item
        }
    )
}