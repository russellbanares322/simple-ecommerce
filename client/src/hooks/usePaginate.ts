import  { useState } from "react"

const ITEMS_PER_PAGE = 6;

type UsePaginateProps<T> = {
  pageData: T[]
}

const usePaginate = <T>({ pageData }: UsePaginateProps<T>) => {
const [itemOffset, setItemOffset] = useState<number>(0)

const endOffset = itemOffset + ITEMS_PER_PAGE;
const paginatedItems = pageData.slice(itemOffset, endOffset);
const pageCount = Math.ceil(pageData.length / ITEMS_PER_PAGE);

const handleClickPaginationButton = (event: any) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % pageData.length

    setItemOffset(newOffset)
}
return {handleClickPaginationButton,paginatedItems, pageCount}
}

export default usePaginate