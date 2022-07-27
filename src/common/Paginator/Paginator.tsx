import { FC, useState } from "react"
import cn from "classnames"

import a from "./Paginator.module.css"

type PropsType = {
  currentPage: number
  totalItemsCount: number
  pageSize: number
  onPageChange: (change: number) => void
  portionSize?: number
}

const Paginator: FC<PropsType> = ({ currentPage, totalItemsCount, pageSize, onPageChange, portionSize = 10 }) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  };

  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      <div className={a.UserCountBody}>
        {portionNumber > 1 &&
          <button className={a.btn} onClick={() => setPortionNumber(portionNumber - 1)}>
            Prev
          </button>}
        {pages
          .filter(m => m >= leftPortionPageNumber && m <= rightPortionPageNumber).map(m => (
            <span key={m} className={cn({ [a.selectpage]: currentPage === m }, a.pageNumber)}
              onClick={() => { onPageChange(m) }}>
              {m}
            </span>
          ))}
        {portionCount > portionNumber &&
          <button className={a.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>
            Next
          </button>}
      </div>
    </div>
  );
}
export default Paginator;