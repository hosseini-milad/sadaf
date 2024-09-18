import tabletrans from "../../translate/tables";
import Pagination from "material-ui-flat-pagination";

function Paging(props) {
  const pageInfo =
    props.content

  const setOffset = (value) => {
    var curPage = pageInfo && pageInfo.currentPage;
    var newPage = parseInt(curPage) + parseInt(value);
    props.setFilters((prevState) => ({
      ...prevState,
      offset: newPage,
    }));
  };
  return (
    <div className="order-list-footer">
      <div className="dense-btn">
        <input className="switch-input" type="checkbox" id="switch" />
        <label className="switch-label" htmlFor="switch"></label>
        <p></p>
      </div>
      <div className="per-page">
        <p>{tabletrans.rowsPerPage[props.lang.lang]}</p>
        <select
          name="page" onChange={(e) =>
            setOffset(props.filters&&props.filters.offset, e.target.value)
          }
        >
          <option value="5">5</option>
          <option value="10" selected={true}>
            10
          </option>
          <option value="25">25</option>
        </select>
      </div>
      {pageInfo ? (
        <div className="page-counter">
          <Pagination
            limit={parseInt(props.filters&&props.filters.pageSize) || 10}
            offset={parseInt(props.filters&&props.filters.offset) || 0}
            otherPageColor={"default"}
            currentPageColor={"primary"}
            total={props.size?props.size:pageInfo.totalItem}
            onClick={(e, offset) => {
              props.setFilters((prevState) => ({
                ...prevState,
                offset: offset.toString(),
              }));
            }}
          />
        </div>
      ) : (
        <div className="page-counter"></div>
      )}
    </div>
  );
}
export default Paging;
