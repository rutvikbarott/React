import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Afotter from '../../Afotter';
import Aheader from '../Aheader';
import axios from 'axios';
import { Button } from 'mdb-react-ui-kit';





function Maneage() {

    const [data, setdata] = useState([])


    useEffect(() => {
        fetchdata()
    }, [])

    // get data
    const fetchdata = async () => {
        const res = await axios.get(`http://localhost:3000/packages/`)
        console.log(res.data)
        setdata(res.data)
    }

    const [fromvalue, setfromvalue] = useState({
        id: "",
        url: "",
        price: "",
        city: "",
        days: "",
        person: "",
        desc: ""
    })
    // delete
    const handledelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/packages/${id}`)
        console.log(res.data)
        fetchdata();
    }

    // view
    const handleview = async (id) => {
        const res = await axios.get(`http://localhost:3000/packages/${id}`)
        console.log(res.data)
        setfromvalue(res.data)
    }

    // edit 
    const [editingpackage, seteditingpackge] = useState(null)
    const [editedpaackge, seteditedpackage] = useState({
        id: "",
        url: "",
        price: "",
        city: "",
        days: "",
        person: "",
        desc: ""
    })

    function saveedit(Packages) {
        seteditingpackge(Packages);
        seteditedpackage(Packages)

    }

    const handleupate =async(e)=>{
        try {
            e.preventDefault()
            const res =await axios.put(`http://localhost:3000/packages/${editingpackage.id}`,editedpaackge)
            console.log(res.data)
            fetchdata()
            seteditingpackge(null)
            console.log("data update")
            
        } catch (error) {
            console.log("not fetch",error)
        }
    }
    return (
        <div>
            <div>
                <Aheader desc="Manage Package data" />
                <div className="container">
                    <h1>Manage Package data</h1>
                    <MDBTable>
                        <MDBTableHead>
                            <tr className='text-center'>
                                <th scope='col'>#id</th>
                                <th scope='col'>City</th>
                                <th scope='col'>Days</th>
                                <th scope='col'>Person</th>
                                <th scope='col'>Price</th>
                                <th scope='col' colSpan={3} >Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                data && data.map((item) => {
                                    return (
                                        <tr className='text-center' key={item.id}>
                                            <th scope='row'>{item.id}</th>
                                            <td>{item.city}</td>
                                            <td>{item.days}</td>
                                            <td>{item.person}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => handleview(item.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                                <button className='btn btn-success mx-2' onClick={() => saveedit(item)}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => handledelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </MDBTableBody>
                    </MDBTable>
                </div>
                {
                    editingpackage && (
                        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="container">
                                <div className="booking p-5">
                                    <div className="row g-5 align-items-center">

                                        <div className="col-md-12">
                                            <h1 className="text-white mb-4">Upadate Packges</h1>
                                            <form >
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input type="url" value={editedpaackge.url} onChange={(e) => seteditedpackage({ ...editedpaackge, url: e.target.value })} className="form-control bg-transparent" name='url' placeholder="Your package image" />
                                                            <label htmlFor="package Image">Your Package Image</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating" >
                                                            <input type="tel" value={editedpaackge.price} onChange={(e) => seteditedpackage({ ...editedpaackge, price: e.target.value })} className="form-control bg-transparent" name='price' placeholder="Price" />
                                                            <label htmlFor="Price">Package Price</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <select name='city' value={editedpaackge.city} onChange={(e) => seteditedpackage({ ...editedpaackge, city: e.target.value })} className="form-select bg-transparent" id="select1">
                                                                <option value="India">India</option>
                                                                <option value="USA">USA</option>
                                                                <option value="UAE">UAE</option>
                                                                <option value="Canda">Canda</option>
                                                            </select>
                                                            <label htmlFor="select1">Location</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <select name='days' value={editedpaackge.days} onChange={(e) => seteditedpackage({ ...editedpaackge, days: e.target.value })} className="form-select bg-transparent" id="select1">
                                                                <option value="2">2</option>
                                                                <option value="4">4</option>
                                                                <option value="6">6</option>
                                                                <option value="8">8</option>
                                                            </select>
                                                            <label htmlFor="select1">days</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <select name='person' value={editedpaackge.person} onChange={(e) => seteditedpackage({ ...editedpaackge, person: e.target.value })} className="form-select bg-transparent" id="select1">
                                                                <option value="2">2</option>
                                                                <option value="4">4</option>
                                                                <option value="3">3</option>
                                                                <option value="8">8</option>
                                                            </select>
                                                            <label htmlFor="select1">Person</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating">
                                                            <textarea className="form-control bg-transparent" value={editedpaackge.desc} onChange={(e) => seteditedpackage({ ...editedpaackge, desc: e.target.value })} name='desc' placeholder="package Descitioon" id="message" style={{ height: 100 }} defaultValue={""} />
                                                            <label htmlFor="Descrition">package Descitioon</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6"> <button className="btn btn-outline-light w-100 py-3" onClick={handleupate} type="submit">update</button>

                                                            </div>
                                                            <div className="col-6">
                                                                <button className="btn btn-outline-light w-100 py-3" type="submit" onClick={() => seteditingpackge(null)} >cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Package details</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <tr className='text-center'>
                                        <th scope='col'>#id</th>
                                        <th scope='col'>City</th>
                                        <th scope='col'>Days</th>
                                        <th scope='col'>Person</th>
                                        <th scope='col'>Price</th>
                                        <th scope='col' colSpan={3} >Action</th>
                                    </tr>
                                    <tr className='text-center'>
                                        <td scope='col'>{fromvalue.id}</td>
                                        <td scope='col'>{fromvalue.city}</td>
                                        <td scope='col'>{fromvalue.days}</td>
                                        <td scope='col'>{fromvalue.person}</td>
                                        <td scope='col'>{fromvalue.price}</td>
                                        <td className="btn btn-secondary" data-bs-dismiss="modal">close</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                        </div>
                    </div>
                </div>

                <Afotter />
            </div>
        </div>
    )
}

export default Maneage
