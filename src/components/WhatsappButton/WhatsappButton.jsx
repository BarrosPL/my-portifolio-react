import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton({ number }) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
