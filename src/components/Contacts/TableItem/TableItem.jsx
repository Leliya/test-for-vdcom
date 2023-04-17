import "./tableItem.css";

export function TableItem({ contact }) {
  const {
    id,
    name,
    idNumber,
    yearEnd,
    ard,
    companyNumber,
    email,
    phone,
    address,
  } = contact;
  return (
    <tr className="tableItem tableItem_line">
      <td className="tableItem__cell tableItem__cell_line">
        <input
          id={`editContact_${id}`}
          type="checkbox"
          className="tableItem__checkbox"
        />
        <label htmlFor={`editContact_${id}`}></label>
      </td>
      <td className="tableItem__cell tableItem__cell_line">{id}</td>
      <td className="tableItem__cell tableItem__cell_line">{name}</td>
      <td className="tableItem__cell tableItem__cell_line">{idNumber}</td>
      <td className="tableItem__cell tableItem__cell_line">{yearEnd}</td>
      <td className="tableItem__cell tableItem__cell_line">{ard}</td>
      <td className="tableItem__cell tableItem__cell_line">{companyNumber}</td>
      <td className="tableItem__cell tableItem__cell_line">{email}</td>
      <td className="tableItem__cell tableItem__cell_line">{phone}</td>
      <td className="tableItem__cell tableItem__cell_line">{address}</td>
      <td className="tableItem__cell tableItem__cell_line">
        <div className="tableitem__icon_edit"></div>
        <div className="tableitem__icon_delete"></div>
      </td>
    </tr>
  );
}
