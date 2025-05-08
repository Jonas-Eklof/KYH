import React, { useState } from "react";
import { X } from "lucide-react";

export default function AddCompany({ isOpen, onClose, onAddCompany }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
    time: new Date().toLocaleDateString(),
    how: "email/call",
    response: "None",
    nextStep: "",
    status: "Active",
    lastContact: "Just now",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    onAddCompany({
      ...formData,
      id: Date.now(),
    });
    onClose();
  };

  if (!isOpen) return null; // Visar inget om modalen inte är öppen

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">
            Lägg till företag
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <X size={24} />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Företagets namn"
            value={formData.name}
            onChange={handleChange}
            required
            className=" block w-full border border-gray-300 px-3 py-2 rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Kontaktperson"
            value={formData.contact}
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 px-3 py-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefonnummer"
            value={formData.phone}
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 px-3 py-2 rounded"
          />
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Avsluta
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Lägg till
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --------------------------------------------------------------

// import React, { useState } from "react";
// import { X } from "lucide-react";

// export default function AddCompany({ isOpen, onClose, onAddCompany }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     phone: "",
//     time: new Date().toLocaleDateString(),
//     how: "email/call",
//     response: "None",
//     nextStep: "",
//     status: "Active",
//     lastContact: "Just now",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddCompany({
//       ...formData,
//       id: Date.now(), // Simple way to generate unique ID
//     });
//     setFormData({
//       name: "",
//       contact: "",
//       email: "",
//       phone: "",
//       time: new Date().toLocaleDateString(),
//       how: "email/call",
//       response: "None",
//       nextStep: "",
//       status: "Active",
//       lastContact: "Just now",
//     });
//     onClose();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-gray-700">Add New Company</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Contact Person
//               </label>
//               <input
//                 type="text"
//                 name="contact"
//                 required
//                 value={formData.contact}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 How to Contact
//               </label>
//               <select
//                 name="how"
//                 value={formData.how}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="email">Email</option>
//                 <option value="call">Call</option>
//                 <option value="email/call">Email/Call</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Response
//               </label>
//               <select
//                 name="response"
//                 value={formData.response}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="None">None</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Next Step
//               </label>
//               <input
//                 type="text"
//                 name="nextStep"
//                 value={formData.nextStep}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Status
//               </label>
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Add Company
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
