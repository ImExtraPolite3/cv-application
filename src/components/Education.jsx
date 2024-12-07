export default function Education({ eduNum }) {
  return (
    <div>
      <h2>School {eduNum}</h2>
      <div>
        <div>
          <label htmlFor="institution">Institution:</label>
          <input type="text" id="institution" />
        </div>
        <div>
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" />
        </div>
        <div>
          <label htmlFor="location">School Location:</label>
          <input type="text" id="location" />
        </div>
        <div>
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" />
        </div>
        <div>
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" />
        </div>
      </div>
    </div>
  );
}
