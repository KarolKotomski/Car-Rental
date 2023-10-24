import * as yup from "yup";

const today = new Date();

export const schema = yup.object().shape({
  carType: yup.string().required("field is required"),
  pickLocation: yup.string().required("field is required"),
  dropLocation: yup.string().required("field is required"),
  pickDate: yup
    .date()
    .typeError("invalid date format")
    .min(
      today,
      `Pick-up date cannot be ${today?.toLocaleDateString()} or earlier`,
    )
    .required("field is required"),
  dropDate: yup
    .date()
    .typeError("invalid date format")
    .min(
      today,
      `Drop-off date cannot be ${today?.toLocaleDateString()} or earlier`,
    )
    .when("pickDate", (pickDate, schema) => {
      return (
        pickDate &&
        schema.min(
          pickDate,
          "Drop-off date cannot be earlier than pick-up date",
        )
      );
    })
    .required("field is required"),
});
