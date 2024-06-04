import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

function getCategory(type: FilterType) {
    if(type === FilterType.MUG) return "mugs";
    if(type === FilterType.SHIRT) return "t-shirts";
    return "";
}

function getCategoryByPriority(priority: PriorityTypes) {
    if(priority === PriorityTypes.POPULARITY) return {field: "sales", order: "DSC"};
    if(priority === PriorityTypes.BIGGEST_PRICE) return {field: "price_in_cents", order: "DSC"};
    if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"};
    if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"};
}

export const FilterProducts = (type: FilterType, priority: PriorityTypes, page: number) => {
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) {
        return `
            query {
                allProducts(sortField: "sales" sortOrder: "DSC" page: ${page} perPage: 12) {
                    id
                    name
                    price_in_cents
                    image_url
                    category
                }
            }
        ` 
    }else{
        const categoryFilter = getCategory(type);
        return `
            query {
                allProducts(page: ${page} perPage: 12 ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ''}, sortField: "${getCategoryByPriority(priority)?.field}", sortOrder: "${getCategoryByPriority(priority)?.order}") {
                    id
                    name
                    price_in_cents
                    image_url
                    category
                }
            }
        ` 
    }
}