import { useState } from "react";
import supabase from "../../supabase/supabaseConfig";

const ImageUpload = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    if (!name || !department || !image) {
      alert("Please fill all fields and select an image.");
      return;
    }
  
    const fileExt = image.name.split(".").pop(); // Extract file extension
    const fileName = `${Date.now()}.${fileExt}`; // Generate a unique filename
    const filePath = `${fileName}`; // File path inside the bucket
  
    console.log("Uploading file:", image);
  
    // ✅ Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from("team-profiles") // Ensure bucket name is correct
      .upload(filePath, image, {
        contentType: image.type,
        upsert: true,
      });
  
    if (error) {
      console.error("Upload Error:", error);
      alert(`Error uploading image: ${error.message}`);
      return;
    }
  
    // ✅ Fetch Public URL
    const { data: publicUrlData } = supabase.storage.from("team-profiles").getPublicUrl(filePath);
  
    if (!publicUrlData || !publicUrlData.publicUrl) {
      alert("Error generating public URL.");
      console.error("Public URL Generation Error:", publicUrlData);
      return;
    }
  
    const publicURL = publicUrlData.publicUrl;
    console.log("Generated Public URL:", publicURL);
  
    // ✅ Insert user details into Supabase database
    const { error: insertError } = await supabase
      .from("memberDetails")
      .insert([
        {
          name: name,
          department: department,
          profile: publicURL, // Store URL in database
        },
      ]);
  
    if (insertError) {
      console.error("Database Insert Error:", insertError);
      alert(`Error saving user details: ${insertError.message}`);
    } else {
      alert("Data uploaded successfully!");
      setName("");
      setDepartment("");
      setImage(null);
    }
  };  

  return (
    <div>
      <h2>Upload Member Details</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
