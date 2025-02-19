import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./PhotoUpload.css";

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Arquivo selecionado:", selectedFile);
    }
  };

  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload da Foto</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleUpload}>
        Enviar Foto
      </Button>
    </Form>
  );
}

export default PhotoUpload;