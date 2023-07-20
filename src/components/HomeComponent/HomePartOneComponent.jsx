function HomePartOneComponent() {
  return (
    <div class="homeOne row">
      <div className="column col-md-12 col-lg-6 partOneOne ">
      <div className="partOneOne">
       <h2>About</h2>
        <p className="partOneText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
      </div>

      </div>

      <div className="column col-md-12 col-lg-6">
      <div className= "partOneTwo">
        <h2>title</h2>
        <p className="partTwoPic">
          <img
            class="homeOne-img"
            src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
            alt="homeOne-img"
          ></img>
        </p>
        </div>
      </div>
    </div>
  );
}

export default HomePartOneComponent;
