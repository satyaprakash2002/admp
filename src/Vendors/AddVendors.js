import React from "react";
import SideBar from "../Side and Top Bar/SideBar";
import TopBar from "../Side and Top Bar/TopBar";
import { Link } from "react-router-dom";
import "../App.css";
import "./Vendors.css";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  promocode: "",
  active: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "*Name is required";
  }
  if (!values.phone) {
    errors.phone = "*Phone Number is required";
  }
  return errors;
};

const AddVendors = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Form Values",formik.values)

  return (
    <>
      <SideBar />
      <TopBar />

      <div className="content ">
        <div className="heading">
          <p className="headtext">Vendors</p>
          <Link className="backvendors" to="/Vendors">
            - Back to Vendors List
          </Link>
        </div>
        <p className=" text-2xl font-bold text-center">Add New Vendor</p>
        <div className="p-4">
          <p className="text-left">Vendor Info</p>
          <div className=" pl-10 pr-10 pt-20">
            <form className="grid-container" onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Vendor's Name..."
                className="border"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />

              {formik.touched.name && formik.errors.name ? (
                <div className="errormsg">{formik.errors.name}</div>
              ) : null}

              <label htmlFor="email">Email Id</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Vendor's EmailId..."
                className="border"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <label htmlFor="phone">Phone No.</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Vendor's Phone No..."
                className="border"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />

              {formik.touched.phone && formik.errors.phone ? (
                <div className="errormsg">{formik.errors.phone}</div>
              ) : null}

              <label htmlFor="promocode">Promocode</label>
              <input
                type="text"
                id="promocode"
                name="promocode"
                placeholder="Enter a Valid Promocode..."
                className="border"
                onChange={formik.handleChange}
                value={formik.values.promocode}
              />

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address..."
                className="border"
                onChange={formik.handleChange}
                value={formik.values.address}
              />

              <label htmlFor="active">Active</label>
              <input
                type="checkbox"
                id="active"
                name="active"
                onChange={formik.handleChange}
                value={formik.values.active}
              />

              <button type="submit" className="savebutton">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVendors;
