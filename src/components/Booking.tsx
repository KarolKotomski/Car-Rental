import { useState, useEffect } from "react";
import Form from "./Form";
import ReservationComplete from "./ReservationComplete";
import { FormValues } from "./Form";

const Booking = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormValues>({
    carType: "",
    pickLocation: "",
    dropLocation: "",
    pickDate: "",
    dropDate: "", 
  })

  const handleFormSubmit = (data:FormValues) => {
    setIsFormSubmitted(true);
    setFormData(data)
  };

  useEffect(() => {
    if (isFormSubmitted === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFormSubmitted]);

  return (
    <div className="bg-gray4 pt-20" id="booking-section">
      <div className="container">
        <div className="relative z-10 rounded-lg bg-white bg-booking bg-cover bg-no-repeat p-10 shadow-xl">
          <div className="pb-5">
            <h2 className="pb-2 text-2xl font-bold">Book a car</h2>
            <p>
              <span className="text-lg font-medium text-orange">*</span> - field
              required
            </p>
          </div>
          <Form onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      {isFormSubmitted && <ReservationComplete formData={formData} />}
    </div>
  );
};

export default Booking;
