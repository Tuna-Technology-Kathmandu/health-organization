export const NoticeDetailShimmer = () => {
    return(
        <div className="notice-detail-container p-4">
        <div className="notice-detail-content d-flex flex-column gap-4">
          <div className="placeholder-glow">
            <div
              className="placeholder w-100 rounded-4"
              style={{ height: "300px" }}
            ></div>
          </div>

          <div className="notice-detail-text">
            <h1 className="placeholder-glow">
              <span className="placeholder col-6"></span>
            </h1>

            <div className="placeholder-glow my-2">
              <span className="placeholder col-3"></span>
            </div>

            <div className="placeholder-glow">
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-10 mb-2"></span>
              <span className="placeholder col-8 mb-2"></span>
              <span className="placeholder col-5 mb-2"></span>
            </div>

            <div className="placeholder-glow mt-4">
              <span className="placeholder btn btn-primary disabled col-4"></span>
            </div>
          </div>
        </div>
      </div>
    );
}