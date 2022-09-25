import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ButtonAddImage from "../components/AddImage";

function imageData(image: string, link: string) {
  return { image, link };
}

const list = [
  imageData(
    "https:source.unsplash.com/360x200?programming",
    "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1pbmd8fHx8fHwxNjY0MTI2NDc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360"
  ),
  imageData(
    "https:source.unsplash.com/360x200?database",
    "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1pbmd8fHx8fHwxNjY0MTI2NDc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360"
  ),
];

export default function ListImage() {
  return (
    <div>
      <Container>
        <Box sx={{ color: "info.main" }} display="flex" justifyContent="center">
          <h1>MPI Media Center</h1>
        </Box>
        <ButtonAddImage />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>No.</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={item?.image}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  </TableCell>
                  <TableCell>{item.link}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
