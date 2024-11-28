export default function Experience({ hideExperience, onExperience }) {
  return (
    <div
      className="experience"
      style={{ display: hideExperience, backgroundColor: onExperience }}
    >
      <button>+</button>
      <div>
        <label htmlFor="work-title">Title:</label>
        <input type="text" id="work-title" />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" />
      </div>
      <div>
        <label htmlFor="office-location">Office Location</label>
        <input type="text" id="office-location" />
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
  );
}
