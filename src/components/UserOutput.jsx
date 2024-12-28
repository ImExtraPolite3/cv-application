function General({ generalName, generalEmail, generalPhoneNumber }) {
  return (
    <>
      <h1>{generalName}</h1>
      <p>{generalEmail}</p>
      <p>{generalPhoneNumber}</p>
    </>
  );
}

function EducationOutput({
  educationName,
  educationLocation,
  educationStartDate,
  educationEndDate,
}) {
  return (
    <>
      <p>{educationName}</p>
      <p>{educationLocation}</p>
      <p>{educationStartDate}</p>
      <p>{educationEndDate}</p>
    </>
  );
}

function ExperienceOutput({
  companyName,
  companyLocation,
  companyStartDate,
  companyEndDate,
}) {
  return (
    <>
      <p>{companyName}</p>
      <p>{companyLocation}</p>
      <p>{companyStartDate}</p>
      <p>{companyEndDate}</p>
    </>
  );
}

export default function GeneralOutput({
  generalName,
  generalEmail,
  generalPhoneNumber,
}) {
  return (
    <General
      generalName={generalName}
      generalEmail={generalEmail}
      generalPhoneNumber={generalPhoneNumber}
    />
  );
}

export { EducationOutput, ExperienceOutput };
