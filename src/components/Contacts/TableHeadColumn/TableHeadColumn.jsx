import "./tableHeadColumn.css";

export function TableHeadColumn({ title, sort, children }) {
  return (
    <th className="tableItem__cell tableItem__cell_head">
      <span className="tableItem__cellText">{title}</span>
      {children}
      {sort ? (
        <div className="tableItem__sortButton">
          <div className="tableItem__sortUp"></div>
          <div className="tableItem__sortBottom"></div>
        </div>
      ) : (
        <></>
      )}
    </th>
  );
}
