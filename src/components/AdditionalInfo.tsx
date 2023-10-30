import AdditionalInfoContact from "./AdditionalInfoContact";
import AdditionalInfoForm from "./AdditionalInfoForm";

const AdditionalInfo = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 gap-16 bg-contact bg-center bg-no-repeat sm:grid-cols-2">
        <div className="flex flex-col items-center gap-8 sm:items-start ">
          <div className="flex max-w-lg flex-col gap-8 text-center sm:text-start">
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Need additional information?
            </h2>
            <p className="text-gray2">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
          </div>
          <AdditionalInfoContact />
        </div>
        <AdditionalInfoForm />
      </div>
    </div>
  );
};

export default AdditionalInfo;
