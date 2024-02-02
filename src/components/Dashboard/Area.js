import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRegions, setRegions } from "../../redux/regionSlice";
import emptyDataImage from "../../assets/images/undraw_Login_re_4vu2 1.png";
import { selectAreas, setAreas } from "../../redux/areaSlice";

export default function Area() {
  const areas = useSelector(selectAreas);
  const regions = useSelector(selectRegions);
  const dispatch = useDispatch();
  const [areaName, setAreaName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [displayQuantity, setDisplayQuantity] = useState(10);
  const [totalArea, setTotalArea] = useState(0);
  const [selectedRegionId, setSelectedRegionId] = useState("");

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch(
          `https://staging-api.erpxbd.com/api/v1/area/All/${displayQuantity}/1`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();
        dispatch(setAreas(data.area));
        setTotalArea(data.length);
      } catch (error) {
        console.error("Error fetching regions;", error);
      }
    };

    fetchAreas();
  }, [dispatch, displayQuantity]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(
          `https://staging-api.erpxbd.com/api/v1/region/${displayQuantity}/1`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();
        dispatch(setRegions(data.region));
      } catch (error) {
        console.error("Error fetching regions;", error);
      }
    };

    fetchRegions();
  }, [dispatch, displayQuantity]);

  const handleCreateArea = async (e) => {
    e.preventDefault();

    try {
      const url = "https://staging-api.erpxbd.com/api/v1/area";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: areaName, region: selectedRegionId }),
      });

      const data = await response.json();

      if (data.status === "success") {
        dispatch(setRegions([...areas, data.area]));
        setAreaName("");
        setErrorMessage("");
        alert("Created Area Successfully");
      } else {
        setErrorMessage(data.message);
        console.error("Failed to create region:", data.message);
      }
    } catch (error) {
      setErrorMessage(error);
      console.error("An error occured while creating region", error);
    }
  };
  return (
    <div className="region">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h3 className="fw-bold text-black">Area List</h3>
          <div className="d-flex align-items-center">
            <p>Geo</p>
            <p className="ms-2 fw-bold">&rsaquo;</p>
            <p className="ms-2 primary-text">Area List</p>
          </div>
        </div>
        <button
          className="create-button"
          data-bs-toggle="modal"
          data-bs-target="#createAreaModal"
        >
          +Create New
        </button>
      </div>
      <div className="region-items">
        {!areas ? (
          <div className="region-items-empty">
            <img className="w-75" src={emptyDataImage} alt="abstract img" />
            <p>Currently you've no data.</p>
            <p>
              For next step first
              <span className="primary-text"> Create Area</span>
            </p>
          </div>
        ) : (
          <div className="region-list">
            <div className="region-list-filter">
              <input
                className="region-search-input"
                type="search"
                placeholder="Search..."
              />
              <select
                onChange={(e) => setDisplayQuantity(parseInt(e.target.value))}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value={totalArea}>{totalArea}</option>
              </select>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">Serial No.</th>
                  <th scope="col">Region</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((region, index) => (
                  <tr key={region._id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{index + 1}</td>
                    <td>{region.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* create region modal  */}
      <div
        className="modal fade"
        id="createAreaModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4">
              <div className="d-flex align-items-center justify-content-between">
                <p className="fw-bold text-black">Create Region</p>
                <button
                  type="button"
                  className="btn-close region-modal-close-button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <form className="region-create-form" onSubmit={handleCreateArea}>
                <select onChange={(e) => setSelectedRegionId(e.target.value)}>
                  <option value="">Select Region</option>
                  {regions.map((region) => (
                    <option value={region._id} key={region._id}>
                      {region.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Type Area"
                  onChange={(e) => setAreaName(e.target.value)}
                />
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <input
                  className="create-button mt-3"
                  type="submit"
                  value="Add Region"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
