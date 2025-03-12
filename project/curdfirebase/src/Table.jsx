import React, { useContext } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

// import {set} from 'firebase/database';
import Mycontext from './Context/Mycontext';

function Table() {
  const context = useContext(Mycontext);
  console.log(context)
  
  const { allitem } = context;
  console.log(allitem)
  // const allProducts = allitems.filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {/* <div className=' flex justify-center items-center h-screen'>
        <div className=" container mx-auto max-w-7xl">
          <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
            <div className=" bg-[#2f3640] w-[50.1em] lg:w-full flex items-center justify-between p-2">
              <input type="text" className='w-80 py-1.5 rounded-md px-2 outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-white bg-gray-600 placeholder-gray-300' placeholder='Search here' />
              <div className="flex items-center space-x-2">
                <img className='w-9' src="/img/react.png" alt="" />
                <h1 className='text-white text-2xl font-semibold'>React Firebase CRUD </h1>
              </div>
              <Link to={'/addproduct'}>
                <button className=' bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white'>Add Product</button>
              </Link>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-100 uppercase bg-[#353b48] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No.
                  </th>

                  <th scope="col" className="px-6 py-3">
                    name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    model
                  </th>
                  <th scope="col" className="px-6 py-3">
                    color
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {
                allProducts.length > 0 ? allProducts.map((item, index) => {

                  const { title, price, name, model, color } = item
                  return (
                    <tbody key={index}>

                      <tr className="bg-gray-700 border-b text-white ">
                        <td className="px-6 py-4">{index + 1}.</td>
                        <td className="px-6 py-4">{title}</td>
                        <td className="px-6 py-4">₹{price}</td>
                        <td className="px-6 py-4">{name}</td>
                        <td className="px-6 py-4">1{model}</td>
                        <td className="px-6 py-4">1{color}</td>

                        <td className="px-6 py-4">
                          <a
                            onClick={() => deleteproducts(item)}
                            className="font-medium bg-red-300 px-4 rounded-lg py-1 text-black cursor-pointer  "
                          >
                            Del
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="/updateproduct"
                            onClick={() => editProducthandle(item)}
                            className="font-medium bg-green-300 px-4 rounded-lg py-1 text-black
        cursor-pointer"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  )
                }) : <h1 className=' font-bold text-black relative left-[260%]'>Product Not Found</h1>}
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Table;
