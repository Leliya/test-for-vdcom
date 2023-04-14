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
    <tr className="tableItem">
      <td className="tableItem__cell">
        <input type="checkbox" className="tableItem__checkbox" />
      </td>
      <td className="tableItem__cell">{id}</td>
      <td className="tableItem__cell">{name}</td>
      <td className="tableItem__cell">{idNumber}</td>
      <td className="tableItem__cell">{yearEnd}</td>
      <td className="tableItem__cell">{ard}</td>
      <td className="tableItem__cell">{companyNumber}</td>
      <td className="tableItem__cell">{email}</td>
      <td className="tableItem__cell">{phone}</td>
      <td className="tableItem__cell">{address}</td>
      <td className="tableItem__cell">
        <div className="tableitem__icon_edit"></div>
        <div className="tableitem__icon_delete"></div>
      </td>
    </tr>
  );
}
