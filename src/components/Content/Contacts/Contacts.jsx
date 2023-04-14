import { Button } from "../../Button/Button";
import { TableItem } from "./TableItem/TableItem";
import data from "./mockContacts.json";

export function Contacts() {
  const { contacts } = data;
  console.log(contacts);
  return (
    <main className="contacts">
      <h2 className="contacts__title">Total Contacts</h2>
        <Button />
        <table className="table">
          <thead className="table__title">
            <tr className="tableItem">
              <th className="tableItem tableItem__head">
                <input type="checkbox" className="tableItem__checkbox" />
              </th>
              <th>Client ID</th>
              <th>Client name</th>
              <th>TRN/PPSN</th>
              <th>Year end</th>
              <th>ARD</th>
              <th>Company nu...</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Company address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <TableItem contact={contact} key={contact.id} />
            ))}
          </tbody>
        </table>
    </main>
  );
}
