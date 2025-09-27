import React from "react";

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition w-[450px] mx-auto"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">{ticket.title}</h2>
        </div>
        <div>
          <p className="text-sm"><strong></strong> {ticket.status}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{ticket.description}</p>
      <div className="flex justify-between">
        <div className="flex gap-1.5">
            <div>
                <p className="text-sm text-gray-400"><strong></strong> {ticket.id}</p> 
            </div> 
            <div>
                <p className="text-sm text-red-500"><strong></strong> {ticket.priority}</p>
            </div>
        </div>
      <div className="flex gap-1.5">
        <div>
          <p className="text-sm text-gray-400"><strong></strong> {ticket.customer}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400"><strong></strong> {ticket.createdAt}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TicketCard;
