import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Common/Card';
import { useSelector } from 'react-redux';

const PaginateComponent = ReactPaginate.default || ReactPaginate;

const Paginate = ({ itemsPerPage }) => {
  const items = useSelector((state) => state.AllProducts?.products ?? []);

  function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Card
           key={item.id}
           id={item.id}
           productsDetail={item}
           image={item.thumbnail}
           dispercent="40"
           title={item.title}
           disprice={item.price - (item.price * 40) / 100} 
           price={item.price}
           rating={item.rating}
           review="88"
          />

        ))}
    </>
  );
}

// Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = items.length ? Math.ceil(items.length / itemsPerPage) : 0;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <PaginateComponent
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
         className="flex gap-4"
         pageLinkClassName="px-6.25 py-[2px] bg-black text-white cursor-pointer"
      />
    </>
  )
}

export default Paginate