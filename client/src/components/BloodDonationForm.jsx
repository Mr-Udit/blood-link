"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function BloodDonationForm() {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    cityname: "",
    name: "",
    email: "",
    contactNumber: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    alert("form is submited.")
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow "
    >
      <div>
        <label className="block mb-1">Name:</label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Email:</label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Contact:</label>
        <Input
          name="contactNumber"
          pattern="[0-9]*"
          inputMode="numeric"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          placeholder="Enter your contact number"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Blood Group:</label>
        <Input
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
          placeholder="Enter your blood group"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">City:</label>
        <Input
          name="cityname"
          value={formData.cityname}
          onChange={handleChange}
          required
          placeholder="Enter your city name"
          className="w-full p-2 border rounded"
        />
      </div>

      <Button
        type="submit"
        className="w-full mt-4 p-2 bg-red-700 text-white hover:bg-red-700 rounded"
      >
        Submit
      </Button>
    </form>
  );
}

export default BloodDonationForm;