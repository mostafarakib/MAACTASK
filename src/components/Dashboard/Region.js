import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import emptyDataImage from "../../assets/images/undraw_Login_re_4vu2 1.png";
import { useDispatch, useSelector } from "react-redux";
import { selectRegions, setRegions } from "../../redux/regionSlice";

export default function Region() {
  const regions = useSelector(selectRegions);
  const dispatch = useDispatch();
  const [regionName, setRegionName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(
          "https://staging-api.erpxbd.com/api/v1/region/20/1",
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
  }, [dispatch]);

  const handleCreateRegion = async (e) => {
    e.preventDefault();

    try {
      const url = "https://staging-api.erpxbd.com/api/v1/region";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: regionName }),
      });

      const data = await response.json();

      if (data.status === "success") {
        dispatch(setRegions([...regions, data.region]));
        setRegionName("");
        setErrorMessage("");
        alert("Created Region Successfully");
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
          <h3 className="fw-bold text-black">Region List</h3>
          <div className="d-flex align-items-center">
            <p>Geo</p>
            <p className="ms-2 fw-bold">&rsaquo;</p>
            <p className="ms-2 primary-text">Region List</p>
          </div>
        </div>
        <button
          className="create-button"
          data-bs-toggle="modal"
          data-bs-target="#createRegionModal"
        >
          +Create New
        </button>
      </div>
      <div className="region-items">
        {!regions ? (
          <div className="region-items-empty">
            <img className="w-75" src={emptyDataImage} alt="abstract img" />
            <p>Currently you've no data.</p>
            <p>
              For next step first
              <span className="primary-text"> Create Region</span>
            </p>
          </div>
        ) : (
          <div>
            <ul>
              {regions.map((region) => (
                <li key={region._id}>{region.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* create region modal  */}
      <div
        className="modal fade"
        id="createRegionModal"
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

              <form
                className="region-create-form"
                onSubmit={handleCreateRegion}
              >
                <input
                  type="text"
                  placeholder="Type region"
                  onChange={(e) => setRegionName(e.target.value)}
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
