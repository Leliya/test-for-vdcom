import { useEffect, useMemo, useState } from "react";
import { Button } from "../Button/Button";
import { TableItem } from "./TableItem/TableItem";
import data from "./mockContacts";
import "./contacts.css";
import { TableHeadColumn } from "./TableHeadColumn/TableHeadColumn";

export function Contacts({ searchRequest }) {
  const { contacts } = data;
  const [searchedContacts, setSearchedContacts] = useState();
  const [currentContacts, setCurrentContacts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  console.log(searchRequest);
  useEffect(() => {
    if (searchRequest) {
      const filteredContacts = contacts.filter((contact) =>
        contact.name.includes(searchRequest)
      );
      setSearchedContacts(filteredContacts);
    }else{
      setSearchedContacts("")
    }
  }, [searchRequest, contacts]);

  useEffect(() => {
    setCurrentContacts(
      (searchedContacts || contacts).slice(
        (currentPage - 1) * 9,
        (currentPage - 1) * 9 + 9
      )
    );
  }, [currentPage, contacts, searchedContacts]);

  // useEffect(()=>{
  //   numberPages()
  // })

  const numberPages = useMemo(() => {
    const max =
      (searchedContacts || contacts).length % 9 === 0
        ? (searchedContacts || contacts).length / 9
        : (searchedContacts || contacts).length / 9 + 1;
    const pages = [];
    for (let i = 1; i < max; i++) {
      pages.push(i);
    }
    return pages;
  }, [searchedContacts, contacts]);

  function changePage(number) {
    if (numberPages.includes(number)) setCurrentPage(number);
    else return false;
  }

  // function searchByName() {
  //   console.log(searchRequest);
  // }

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
