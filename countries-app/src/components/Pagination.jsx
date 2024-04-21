import React from 'react'

const Pagination = ({ searchParams, setSearchParams }) => {
  const ChangePage = (pageNumber) => {
    setSearchParams({
      page: pageNumber
    });
    window.location.reload();
  }

  const GoToPrevious = () => {
    let currentPage = Number(searchParams.get('page'));
    
    if (currentPage > 1) {
      ChangePage(currentPage - 1);
    }
  };

  const GoToNext = () => {
    let currentPage = Number(searchParams.get('page'));
    
    if (currentPage < 5) {
      ChangePage(currentPage + 1);
    }
  };

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <li>
        <button
          type='button'
          onClick={GoToPrevious}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

      <li>
        <button
          type='button'
          onClick={() => { ChangePage(1) }}
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          1
        </button>
      </li>

      {/* <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
        2
      </li> */}

      <li>
        <button
          type='button'
          onClick={() => { ChangePage(2) }}
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          2
        </button>
      </li>

      <li>
        <button
          type='button'
          onClick={() => { ChangePage(3) }}
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          3
        </button>
      </li>

      <li>
        <button
          type='button'
          onClick={() => { ChangePage(4) }}
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          4
        </button>
      </li>

      <li>
        <button
          type='button'
          onClick={() => { ChangePage(5) }}
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          5
        </button>
      </li>

      <li>
        <button
          type='button'
          onClick={GoToNext}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ol>
  )
}

export default Pagination