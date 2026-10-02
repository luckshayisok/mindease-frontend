import CheckinForm from "../components/CheckinForm";
import Navbar from "@/components/Navbar";
    
const Dashboard = () => {
  const handleCheckinSuccess = (data) => {
    console.log("Check-in successful:", data);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to Dashboard 🚀</h1>
        <CheckinForm onSuccess={handleCheckinSuccess} />
      </div>
    </>
  )
}

export default Dashboard
