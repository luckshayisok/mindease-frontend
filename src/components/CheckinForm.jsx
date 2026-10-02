import { useState } from "react";
import { api } from "../utils/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CheckinForm = ({ onSuccess }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/checkin", { message });
      setMessage("");
      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      setError("Failed to check in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="How are you feeling today?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Checking in..." : "Check In"}
      </Button>
    </form>
  );
};

export default CheckinForm;
