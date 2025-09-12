import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const clear = () => {
    setName("");
    setEmail("");
    setSubmitFormData(undefined);
  };
  const [submitFormData, setSubmitFormData] = useState<FormData>();
  const submitForm = () => {
    alert(`ชื่อ: ${name}\nอีเมล: ${email}`);
    setSubmitFormData({ name, email });
  };

  return (
    <>
      <style>
        {`
          .button {
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .submit-btn {
            background-color: #14b840ff;
          }

          .submit-btn:hover {
            background-color: #0e8f34;
          }

          .clear-btn {
            background-color: #cb3c3cff;
          }

          .clear-btn:hover {
            background-color: #a42f2f;
          }
        `}
      </style>
      <div
        style={{
          width: "auto",
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h2>User Form Exercise  -  Solution</h2>
        <label>ชื่อ: {name}</label>
        <input
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #cec6c6ff",
            borderRadius: "4px",
            margin: "8px 0",
            boxShadow: "0 5px 10px rgba(240, 240, 240, 0.1)",
          }}
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="กรอกชื่อของคุณ"
        />

        <label>อีเมล: {email}</label>
        <input
          style={{
            width: "100%",
            padding: "5px",
            border: "1px solid #cec6c6ff",
            borderRadius: "4px",
            margin: "8px 0",
            boxShadow: "0 5px 10px rgba(240, 240, 240, 0.1)",
          }}
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="กรอกอีเมลของคุณ"
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '20px 0' }}>
            <button onClick={submitForm} className="button submit-btn">Submit</button>
            <button onClick={clear} className="button clear-btn">Clear</button>
          </div>
        <div
          style={{
            width: "90%",
            alignItems: "center",
            backgroundColor: "#dcdbdbff",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <h3 style={{ color: "black" }}>ข้อมูลปัจจุบัน:</h3>
          <p style={{ color: "black" }}>
            <strong>ชื่อ:</strong> {submitFormData?.name || "ยังไม่ได้กรอก"}
          </p>
          <p style={{ color: "black" }}>
            <strong>อีเมล:</strong> {submitFormData?.email || "ยังไม่ได้กรอก"}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserForm;
