import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaIdBadge,
  FaCamera,
  FaUserShield,
  FaExclamationTriangle,
  FaClock,
  FaUserFriends,
} from "react-icons/fa";
 
const policyItems = [
  {
    icon: <FaCheckCircle color="#4a90e2" />,
    text: "All visitors must register at the front desk upon arrival.",
  },
  {
    icon: <FaIdBadge color="#4a90e2" />,
    text: "Visitors must wear a badge at all times.",
  },
  {
    icon: <FaCamera color="#4a90e2" />,
    text: "Photography and video recording are not allowed without permission.",
  },
  {
    icon: <FaUserShield color="#4a90e2" />,
    text: "Visitors must be accompanied by an employee at all times.",
  },
  {
    icon: <FaExclamationTriangle color="#4a90e2" />,
    text: "Please follow all safety instructions provided by staff.",
  },
  {
    icon: <FaIdBadge color="#4a90e2" />,
    text: "Return your visitor badge before leaving the premises.",
  },
];
 
export default function GuestGuidelines() {
  const navigate = useNavigate();
 
  return (
    <div
      style={{
        // background: "#f5faff", // Optional: add a soft background color
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: 16,
          padding: 40,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          fontFamily: "'Segoe UI', sans-serif",
          animation: "fadeIn 0.6s ease-in-out",
        }}
      >
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
 
        <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
          <FaUserFriends style={{ fontSize: 36, color: "#4a90e2", marginRight: 12 }} />
          <h2
            style={{
              color: "#4a90e2",
              fontWeight: 600,
              fontSize: 30,
              margin: 0,
              letterSpacing: 0.5,
            }}
          >
            Visitor Guidelines
          </h2>
        </div>
 
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 30 }}>
          {policyItems.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 17,
                marginBottom: 14,
                background: "#f0f8ff",
                borderRadius: 10,
                padding: "10px 16px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <span style={{ marginRight: 14, fontSize: 22 }}>{item.icon}</span>
              <span style={{ fontWeight: 500 }}>{item.text}</span>
            </li>
          ))}
        </ul>
 
        <div
          style={{
            background: "#e3f2fd",
            borderRadius: 10,
            padding: "16px 20px",
            marginBottom: 30,
            display: "flex",
            alignItems: "center",
            fontSize: 16,
            color: "#1565c0",
            fontWeight: 500,
          }}
        >
          <FaClock style={{ marginRight: 12, fontSize: 22, color: "#1565c0" }} />
          <span>
            Visitors staying beyond <b>2 hours</b> will trigger an automatic admin notification.
          </span>
        </div>
 
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              background: "#4a90e2",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              marginRight: 16,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
            onClick={() => navigate("/visitor-details")}
          >
            I Accept
          </button>
          <button
            style={{
              background: "#90caf9",
              color: "#0d47a1",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
            onClick={() => navigate("/login")}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
 