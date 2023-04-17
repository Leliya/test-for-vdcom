import "./tableHeadColumn.css";

export function TableHeadColumn({ title, sort, children, id, onClick }) {
  return (
    <th className="tableItem__cell tableItem__cell_head" >
      <span className="tableItem__cellText">{title}</span>
      {children}
      {sort ? (
        <div className="tableItem__sortButton" id={id}>
          <div className="tableItem__sortUp" id="up" onClick={onClick}></div>
          <div className="tableItem__sortBottom" id="down" onClick={onClick}></div>
        </div>
      ) : (
        <></>
      )}
    </th>
  );
}
