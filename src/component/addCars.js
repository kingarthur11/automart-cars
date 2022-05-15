import React, { useEffect, useState } from "react";
import "./css/add_car.css";
import axios from "axios";

function AddCars() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImages] = useState([]);
  const [id, setId] = useState("");

  const data = {
    name,
    amount,
    description,
  };

  const postData = (event) => {
    event.preventDefault();
    axios.post(`https://auto-mart-cars.herokuapp.com/api/car/create`, data).then((getData) => {
      setId(getData.data.car._id);
    });
  };

  useEffect(() => {
    if (id) {
      let formData = new FormData();
      formData.append("image", image[0]);
      console.log({ image, formData: formData.values() });
      axios
        .put(`https://auto-mart-cars.herokuapp.com/api/car/upload_car_image/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((getData) => {
          console.log(getData);
        });
    }
  }, [id, image]);

  return (
    <div className="add_car_bg py-5">
      <section>
        <div className="container py-5 bg-light">
          <div className="row">
            <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
              <h3 className="text-center">ADD A NEW CAR</h3>
              <form id="contact-form" autoComplete="off">
                <div className="card-body">
                  <div className="mb-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="CAR NAME"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="PRICE OF CAR"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      placeholder="CAR DESCRIPTION"
                      name="message"
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}
                      id="message"
                      rows="4"></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">
                      Upload Car image
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFileMultiple"
                      onChange={(e) => setImages(e.target.files)}
                      multiple
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        onClick={postData}
                        type="submit"
                        className="btn btn-dark w-50">
                        Post Car
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddCars;
