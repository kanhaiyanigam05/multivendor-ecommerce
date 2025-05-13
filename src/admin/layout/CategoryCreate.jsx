import React from "react";
import { Modal } from "react-bootstrap";
import Input from "../components/Input";
import DropZone from "../components/DropZone";
import Loader from "../components/Loader";

const CategoryCreate = ({ show, toggleShow, data, setData, errors, processing, onSubmit }) => {
  return (
    <Modal className="custom-modal fade" centered size="lg" show={show} onHide={toggleShow}>
      <div className="modal-header">
        <h5 className="modal-title">Add New Category</h5>
        <button type="button" className="bd-btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fa-solid fa-xmark-large" onClick={toggleShow}></i>
        </button>
      </div>
      <div className="modal-body">
        <div className="card__wrapper">
          {processing && <Loader />}
          <form onSubmit={onSubmit}>
            <div className="row gy-20 setup-content" id="step-1">
              <div className="col-md-12">
                {/* <div className="employee__profile-chnage">
                  <div className="employee__profile-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label htmlFor="imageUpload"></label>
                  </div>
                  <div className="employee__profile-preview">
                    <div
                      className="employee__profile-preview-box"
                      id="imagePreview"
                      style={{
                        backgroundImage:
                          "url('assets/images/user/user-mockup.png')",
                      }}
                    ></div>
                  </div>
                </div> */}
                <DropZone />
              </div>
              <div className="col-lg-12">
                <Input
                  label={"Category Name"}
                  id={"name"}
                  placeholder={"Enter category name"}
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  error={errors.name}
                  // required
                />
              </div>
              <div className="col-lg-12">
                <Input
                  textarea
                  label={"Description"}
                  id={"description"}
                  placeholder={"Enter description"}
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                  error={errors.description}
                  // required
                />
              </div>
              <div className="d-flex justify-content-start">
                <div className="col-xl-3">
                  <button className="nextBtn-2 btn btn-primary" type="submit">
                    Create Category
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CategoryCreate;
