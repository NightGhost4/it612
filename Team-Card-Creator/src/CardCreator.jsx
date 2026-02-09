import { useState } from "react";

function CardCreator(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const emojis = ["😊", "🚀", "💻", "🎨", "🎯"];

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter a name!");
      return;
    }
    props.onAddCard({
      name: name,
      role: role || "Team Member",
      email: email || "no-email@example.com",
      emoji: emoji,
    });
    setName("");
    setRole("");
    setEmail("");
    setEmoji("😊");
  };

  return (
    <div className="form-section">
      <h2>Create a Team Member</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role (e.g., Developer, Designer)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Choose an emoji:</p>
      <div className="emoji-picker">
        {emojis.map((e) => (
          <button
            key={e}
            type="button"
            className={emoji === e ? "selected" : ""}
            onClick={() => setEmoji(e)}
          >
            {e}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit}>Create Card</button>
    </div>
  );
}
export default CardCreator;
