import React, { useState, useCallback, useEffect } from "react";
import SideBar from "../Side and Top Bar/SideBar";
import "../App.css";
import TopBar from "../Side and Top Bar/TopBar";
import "./Vendors.css";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react"; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const initialValue = { name: "", email: "", phone: "", dob: "" };
const Vendors = () => {
  const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState();

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Title", field: "title" },
    { headerName: "Body", field: "body" },
    
  ];

  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = () => {
     fetch("https://jsonplaceholder.typicode.com/posts")
       .then((resp) => resp.json())
       .then((data) => setTableData(data));
   };

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="content">
        <div className="heading">
          <p className="headtext">Vendors</p>
          <Link className="headlink" to="addVendors">
            + Add New
          </Link>
        </div>
        <div className="ag-theme-alpine p-4" style={{height:'38rem'}}>
          <AgGridReact // Fix typo here
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={getUsers}
          />
        </div>
      </div>
    </>
  );
};

export default Vendors;
