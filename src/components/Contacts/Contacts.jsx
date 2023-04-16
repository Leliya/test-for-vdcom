import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { TableItem } from "./TableItem/TableItem";
import data from "./mockContacts";
import "./contacts.css";
import { TableHeadColumn } from "./TableHeadColumn/TableHeadColumn";

export function Contacts() {
  const { contacts } = data;
  const [currentContacts, setCurrentContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentContacts(contacts.slice((currentPage-1) * 9, (currentPage-1) * 9 + 9));
  }, [currentPage, contacts]);

  const numberPages = () => {
    const max = contacts.length / 9;
    const pages = [];
    for (let i = 1; i < max; i++) {
      pages.push(i);
    }
    return pages;
  };

  function changePage(number){
    if(numberPages().includes(number))
    setCurrentPage(number)
    else
    return false
  }

  return (
    <main className="contacts">
      <h2 className="contacts__title">Total Contacts</h2>
      <Button type="submit" classButton="addContact" buttonName="Add">
        <div className="contacts__iconAddContact" disabled="falses"></div>
      </Button>
      <table className="table">
        <thead className="table__title">
          <tr className="tableItem tableItem_head">
            <TableHeadColumn>
              <input
                id="editAll"
                type="checkbox"
                className="tableItem__checkbox"
              />
              <label htmlFor="editAll"></label>
            </TableHeadColumn>
            <TableHeadColumn title="Client ID" sort={true} />
            <TableHeadColumn title="Client name" sort={true} />
            <TableHeadColumn title="TRN/PPSN" sort={true} />
            <TableHeadColumn title="Year end" sort={true} />
            <TableHeadColumn title="ARD" sort={true} />
            <TableHeadColumn title="Company number" sort={true} />
            <TableHeadColumn title="Email" />
            <TableHeadColumn title="Phone number" />
            <TableHeadColumn title="Company address" />
            <TableHeadColumn title="Action" />
          </tr>
        </thead>
        <tbody className="tableItem__contacts">
          {currentContacts.map((contact) => (
            <TableItem contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
      <div className="contacts__pages">
        <Button classButton="pagination" type="button" disabled={false} onClick={()=>changePage(currentPage-1)}/>
        {numberPages().map((number) => (
          <Button
            key={number}
            classButton={number===(currentPage)?"page button_page_active":"page"}
            type="button"
            disabled={false}
            buttonName={number}
            onClick={()=>
              changePage(number)}
          />
        ))}
        <Button classButton="pagination" type="button" disabled={false} onClick={()=>changePage(currentPage+1)}/>
      </div>
    </main>
  );
}
