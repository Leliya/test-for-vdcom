import { useEffect, useMemo, useState } from "react";
import { Button } from "../Button/Button";
import { TableItem } from "./TableItem/TableItem";
import data from "./mockContacts";
import "./contacts.css";
import { TableHeadColumn } from "./TableHeadColumn/TableHeadColumn";
import { selectionSort } from "../../utils/selectionSort";

export function Contacts({ searchRequest }) {
  let { contacts } = data;
  const [transormedContacts, setTransormContacts] = useState();
  const [currentContacts, setCurrentContacts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchRequest) {
      const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchRequest.toLowerCase())
      );
      setTransormContacts(filteredContacts);
    } else {
      setTransormContacts("");
    }
    setCurrentPage(1)
  }, [searchRequest, contacts]);

  useEffect(() => {
    setCurrentContacts(
      (transormedContacts || contacts).slice(
        (currentPage - 1) * 9,
        (currentPage - 1) * 9 + 9
      )
    );
  }, [currentPage, contacts, transormedContacts]);

  const numberPages = useMemo(() => {
    const lengthContactsArr = (transormedContacts || contacts).length;
    const max =
      lengthContactsArr % 9 === 0
        ? lengthContactsArr / 9
        : lengthContactsArr / 9 + 1;
    const pages = [];
    for (let i = 1; i < max; i++) {
      pages.push(i);
    }
    return pages;
  }, [transormedContacts, contacts]);

  function changePage(number) {
    if (numberPages.includes(number)) setCurrentPage(number);
    else return false;
  }

  function sortContacts(e) {
    const fieldId = e.target.parentNode.id;
    const cursor = e.target.id;
    setTransormContacts(
      selectionSort(contacts, fieldId, cursor === "down" ? true : false)
    );
    setCurrentPage(1)
  }

  return (
    <main className="contacts">
      <h2 className="contacts__title">Total Contacts</h2>
      <Button type="submit" classButton="addContact" buttonName="Add">
        <div className="contacts__iconAddContact"></div>
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
            <TableHeadColumn
              title="Client ID"
              sort={true}
              onClick={sortContacts}
              id="id"
            />
            <TableHeadColumn
              title="Client name"
              sort={true}
              onClick={sortContacts}
              id="name"
            />
            <TableHeadColumn
              title="TRN/PPSN"
              sort={true}
              onClick={sortContacts}
              id="idNumber"
            />
            <TableHeadColumn
              title="Year end"
              sort={true}
              onClick={sortContacts}
              id="yearEnd"
            />
            <TableHeadColumn
              title="ARD"
              sort={true}
              onClick={sortContacts}
              id="ard"
            />
            <TableHeadColumn
              title="Company number"
              onClick={sortContacts}
              sort={true}
              id="companyNumber"
            />
            <TableHeadColumn title="Email" id="email" />
            <TableHeadColumn title="Phone number" id="phone" />
            <TableHeadColumn title="Company address" id="address" />
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
        <Button
          classButton="pagination"
          type="button"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        />
        {numberPages.map((number) => (
          <Button
            key={number}
            classButton={
              number === currentPage ? "page button_page_active" : "page"
            }
            type="button"
            disabled={false}
            buttonName={number}
            onClick={() => changePage(number)}
          />
        ))}
        <Button
          classButton="pagination"
          type="button"
          disabled={currentPage === numberPages.length}
          onClick={() => changePage(currentPage + 1)}
        />
      </div>
    </main>
  );
}
