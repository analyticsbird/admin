import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";

type Feedback ={
    email: string,
    feedback: string
    updatedAt: string;
}
interface PropTypes{
    tableData: Feedback[]
}

const FeedbackTable:React.FC<PropTypes> = ({ tableData }) => (
  <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>Feedback</TableCell>
          <TableCell align="right">Feedback Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((feedback, key) => (
          <TableRow
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {feedback.email || "N/A"}
            </TableCell>
            <TableCell>{feedback.feedback}</TableCell>
            <TableCell align="right">{dayjs(feedback.updatedAt).format("LLL")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FeedbackTable;
