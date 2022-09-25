import { useState } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  Container,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

export default function ButtonAddImage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({ image: File });
  const [preview, setPreview] = useState<any | null>(null);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  return (
    <div>
      <Box mb={2} display="flex" justifyContent="right">
        <Button onClick={handleOpen} variant="contained">
          Add Image
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Box sx={styleModal} component="form">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
              my={2}
              sx={{ color: "info.main" }}
            >
              Upload Image
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="file"
                onChange={handleChange}
                inputProps={{
                  multiple: true,
                }}
              />
              <Button type="submit" variant="contained">
                Upload
              </Button>
            </Stack>
            {preview && (
              <img
                src={preview}
                alt="view"
                style={{ width: "20%", borderRadius: "2px", margin: "5px" }}
              />
            )}
          </Box>
        </Container>
      </Modal>
    </div>
  );
}
