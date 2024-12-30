//require('dotenv').config();
import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { TransactionContext } from '../../context/TransactionContext';
import { ShortenAddress } from '../ShortenAddress'
import '../../css/Style.css';
import '../../css/App.css';

const Iptable = () => {
  const { nfts, currentAccount } = useContext(TransactionContext);

  const adminAddress = 0x226892cb0cc69752C50648E126731C1b97602522;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(nfts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(nfts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, nfts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % nfts.length;
    setItemOffset(newOffset);
  };

  function status(status) {
    if (status === "Pending") {
      return <div className="font-semibold text-gray-500">Pending</div>;
    } else if (status === "Accepted") {
      //Show();
      return <div className="font-semibold text-black">Accepted</div>;
    } else if (status === "Rejected") {
      return <div className="font-semibold text-gray-700">Rejected</div>;
    }
  }

  function Show(item) {
    const c = status(item.status);
    if (c.props.children === "Accepted") {
      return (
        <NavLink to={{ pathname: `/bidregister/${item.tokenId}/${item.IPname}/${item.Nftowner}` }} state={{ item }}>
          <button
            className='bg-black my-2 mt-5 ml-2 px-6 py-1 rounded text-white transition duration-150 ease-out hover:ease-in'>
            Bid
          </button>
        </NavLink>
      )
    }
  }

  function Bid(item, index) {
    const c = status(item.status);
    if (c.props.children === "Accepted") {
      return (
        <NavLink to={{ pathname: `/bidders/${index}/${item.user}` }} state={{ item }}>
          <button
            className='bg-black mt-5 px-6 py-1 rounded text-white transition duration-150 ease-out hover:ease-in'>
            Bidders
          </button>
        </NavLink>
      )
    }
  }

  return (
    <div className='fades'>
      <table className='shadow-lg mx-8 mt-24 table table-striped'>
        <thead>
          <tr className=''>
            <th className='text-gray-900' >ID</th>
            <th className='text-gray-900'>Owner Address</th>
            <th className='text-gray-900'> Ip Name </th>
            <th className='text-gray-900'> Full Name</th>
            <th className='text-gray-900'> Country Name</th>
            <th className='text-gray-900'> Street</th>
            <th className='text-gray-900'> Description</th>
            <th className='text-gray-900'> Logo Image</th>
            <th className='text-gray-900'> Status</th>
            <th className='text-gray-900'> Date</th>
            <th className='text-gray-900'></th>
            {/* { currentAccount == adminAddress ?
            <th className='text-gray-900'></th>: null }
            */}
          </tr>
        </thead>
        <tbody className='bg-gray-100'>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td >{index}</td>
              <td >{ShortenAddress(item.Nftowner)}</td>
              <td >{item.IPname}</td>
              <td className='text-black'>{item.fullname}</td>
              <td className='text-black'>{item.country}</td>
              <td className='text-black'>{item.street}</td>
              <td className='text-black'>{item.description}</td>
              <td>
                <a href={item.image}>
                  <img src={item.image} alt=""
                    className="rounded-lg w-20 h-20 object-cover" />
                </a>
              </td>
              <td className='text-black'>{status(item.status)}</td>
              <td>{item.timestamp}</td>
              <td>{Show(item)}</td>
              {currentAccount == adminAddress ?
                <td className='text-center'>
                  <NavLink to={{ pathname: `/status/${index}` }} state={{ item, index }}>
                    <button
                      className='bg-black mt-5 px-6 py-1 rounded text-white transition duration-150 ease-out hover:ease-in'>
                      Status
                    </button>
                  </NavLink>
                </td>
                : null}

              {/* { currentAccount == adminAddress ?
              <td>{Bid(item, index)}</td> : null }     */}
            </tr>
          ))
          }
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
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

export default Iptable