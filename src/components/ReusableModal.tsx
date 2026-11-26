interface ReusableModalProp {
  title: string;
  description: string;
  cancelOption: () => void;
  actionOption: () => void;
  cancelButtonText: string;
  actionButtonText: string;
}

function ReusableModal({
  title,
  description,
  cancelOption,
  actionOption,
  cancelButtonText,
  actionButtonText,
}: ReusableModalProp) {
  return (
    <>
      <div
        className=" modal show d-block bg-dark bg-opacity-50"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {title}
              </h1>
            </div>
            <div className="modal-body">{description}</div>
            <div className="modal-footer">
              <button
                onClick={cancelOption}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {cancelButtonText}
              </button>
              <button
                onClick={actionOption}
                type="button"
                className="btn btn-primary"
              >
                {actionButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReusableModal;
