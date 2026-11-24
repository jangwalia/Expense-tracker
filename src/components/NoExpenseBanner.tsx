function NoExpenseBanner() {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      {" "}
      <h1 className="display-4 fw-bold text-body-emphasis">
        No Expense Is Available
      </h1>{" "}
      <div className="col-lg-6 mx-auto">
        {" "}
        <p className="lead mb-4">
          Create Your Expense In the form and you can se the list here!
        </p>{" "}
      </div>
    </div>
  );
}

export default NoExpenseBanner;
