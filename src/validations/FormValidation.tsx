import * as yup from "yup";

const today = new Date();

export const schema = yup.object().shape({
  carType: yup.string().required("field is required"),
  pickLocation: yup.string().required("field is required"),
  dropLocation: yup.string().required("field is required"),
  pickDate: yup
    .string()
    .required("field is required")
    .test("is-future", "Date must be in the future", function (value) {
      const dateValue = new Date(value);
      return dateValue > today;
    }),
  dropDate: yup
    .string()
    .required("field is required")
    .test(
      "is-after-pickDate",
      "Drop-off date must be after pick-up date",
      function (value, context) {
        const { pickDate } = context.parent;
        if (!pickDate) {
          return true;
        }
        const dropDateObj = new Date(value);
        const pickDateObj = new Date(pickDate);
        return dropDateObj >= pickDateObj;
      },
    ),
});
