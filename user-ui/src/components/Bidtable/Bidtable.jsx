/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react'
import ReactPaginate from 'react-paginate';
import '../../css/Style.css';
import { TransactionContext } from '../../context/TransactionContext';

const Bidtable = ({ data }) => {
  const {connectWallet, currentAccount, AcceptBid } = useContext(TransactionContext);
  const [currentItems, setCurrentItems] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const acceptBidding = (tokenId, bidderAddress, bidValue) => {
    console.log(tokenId, bidderAddress, bidValue);
    AcceptBid(tokenId, bidderAddress, bidValue);
  }

  return (
    <div className='mx-20 mb-32'>
      <table className='table table-striped'>
        <thead>
          <tr className=''>
            <th className='text-gray-900'>ID</th>
            <th className='text-gray-900'> Ip Name </th>
            <th className='text-gray-900'> Bidder Address </th>
            <th className='text-gray-900'> value </th>
            <th className='text-gray-900'> Transfer Ownership</th>
            <th className='text-gray-900'> Bidding Acceptance</th>
            <th className='text-gray-900'> Bid Date</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100'>

          {data.map((item, index) => (
            <tr key={index}>
              <td >{index}</td>
              <td >{item.ownerIPname}</td>
              <td className='text-black'>{item.bidderAddress}</td>
              <td>{item.bidValue} ether</td>
              <td className='text-center'>
                <button
                  className='bg-black px-6 py-1 rounded text-white'
                  onClick={(event) => acceptBidding(item.tokenID, item.bidderAddress, item.bidValue, event)}
                >
                  Accept
                </button>
              </td>
              <td className='text-center'>{item.bidAccepted}</td>
              <td>{item.timestamp}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  )
}

export default Bidtable