import { useState, useEffect } from "react";
import Form from "./Form";
import ReservationComplete from "./ReservationComplete";
import { FormValues } from "./Form";
import CheckEmailNotification from "./CheckEmailNotification";

const Booking = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFinalSubmit, setIsFinalSubmit] = useState(false);

  //Initial form data values:
  const [formData, setFormData] = useState<FormValues>({
    carType: "",
    pickLocation: "",
    dropLocation: "",
    pickDate: "",
    dropDate: "",
  });

  //Form state management:
  const handleFormSubmit = (data: FormValues) => {
    setIsFormSubmitted(true);
    setFormData(data);
  };

  const handleCloseReservation = () => {
    setIsFormSubmitted(false);
  };

  const handleFinalSubmit = () => {
    setIsFinalSubmit(true);
    setIsFormSubmitted(false);
  };

  const handleCloseNotification = () => {
    setIsFinalSubmit(false);
    setIsFormSubmitted(false);
  };

  //Hide vertical scrollbar on main page when modal is open:
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

          {isFinalSubmit && (
            <CheckEmailNotification onClose={handleCloseNotification} />
          )}

          <Form onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      {isFormSubmitted && (
        <ReservationComplete
          formData={formData}
          onCloseReservation={handleCloseReservation}
          onFinalSubmit={handleFinalSubmit}
        />
      )}
    </div>
  );
};

export default Booking;
