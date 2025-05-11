import React, { useState } from "react";
import AddCompany from "./AddCompany";
import CompaniesHeader from "./CompaniesHeader";
import SearchAndFilter from "./SearchAndFilter";
import CompanyTable from "./CompanyTable";

export default function Content() {
  const [companyToEdit, setCompanyToEdit] = useState(null);
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Company one",
      contact: "John Doe",
      email: "companyone@companyone.com",
      phone: "123 12",
      time: "2025-04-04",
      how: "email/call",
      response: "N/A",
      nextStep: "Followup",
      status: "Aktiv",
      lastContact: "2 days ago",
    },
  ]);

  const [isAddCompanyOpen, setIsAddCompanyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Alla");

  const filteredCompanies = companies.filter((company) => {
    // Sökfunktion
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Filterfunktion
    let matchesFilter = true;
    if (filter === "Aktiva") matchesFilter = company.status === "Aktiv";
    if (filter === "Inaktiva") matchesFilter = company.status === "Inaktiv";

    return matchesSearch && matchesFilter;
  });

  const handleAddCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  const handleEditCompany = (updatedCompany) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === updatedCompany.id ? updatedCompany : company
      )
    );
    setCompanyToEdit(null);
  };

  const handleDeleteCompany = (id) => {
    const confirmDelete = window.confirm(
      "Är du säker på att du vill ta bort detta företag?"
    );
    if (confirmDelete) {
      setCompanies((prevCompany) =>
        prevCompany.filter((company) => company.id !== id)
      );
    }
  };

  return (
    <div className="companies space-y-6">
      <CompaniesHeader onAddCompany={() => setIsAddCompanyOpen(true)} />

      <AddCompany
        isOpen={isAddCompanyOpen}
        onClose={() => {
          setIsAddCompanyOpen(false);
          setCompanyToEdit(null);
        }}
        onAddCompany={handleAddCompany}
        onEditCompany={handleEditCompany}
        companyToEdit={companyToEdit}
      />

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <SearchAndFilter
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
          filter={filter}
          onFilterChange={(e) => setFilter(e.target.value)}
        />

        <CompanyTable
          companies={filteredCompanies}
          onEdit={(company) => {
            setCompanyToEdit(company);
            setIsAddCompanyOpen(true);
          }}
          onDelete={handleDeleteCompany}
        />
      </div>
    </div>
  );
}
