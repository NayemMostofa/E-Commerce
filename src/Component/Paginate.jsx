import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Common/Card';
import { useSelector } from 'react-redux';

const PaginateComponent = ReactPaginate.default || ReactPaginate;

function Items({ currentItems }) {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
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
    </div>
  );
}

const Paginate = ({ itemsPerPage }) => {
  const items = useSelector((state) => state.AllProducts?.products ?? []);
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
    <div className="w-full">
      <Items currentItems={currentItems} />
      <PaginateComponent
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
         className="mt-8 flex flex-wrap justify-center gap-4"
         pageLinkClassName="px-6.25 py-[2px] bg-black text-white cursor-pointer"
      />
    </div>
  )
}

export default Paginate