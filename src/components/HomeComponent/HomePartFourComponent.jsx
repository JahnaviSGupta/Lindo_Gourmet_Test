function HomePartFourComponent() {
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  return (
    <div>
      <div class="flex justify-content-center flex-col items-center">
        <label class="FAQ-title m-[50px]">FAQ</label>
        {categories.map((category, index) => (
          <div class="drop-down" key={index}>
            {/* <label htmlFor={`dropdown${index}`}>{category}</label> */}
            <select id={`dropdown${index}`} className="custom-dropdown">
              <option value="option1">Lorem Ipsum</option>
              <option value="option2">Lorem Ipsum</option>
              <option value="option3">Lorem Ipsum</option>
            </select>
          </div>
        ))}
      </div>
      {/* <div className="row">
        <div className="column col-lg-6 recoSec">
          <h2>FAQ</h2>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
          </ul>
        </div>
        <div className="column col-lg-6 recoSec">
          <h2>More</h2>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default HomePartFourComponent;
