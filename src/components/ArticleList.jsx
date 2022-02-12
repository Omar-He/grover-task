import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { getArticles } from "../utils/requests";
import { useAppContext } from "../context/state";
import Backdrop from "./Backdrop";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  useParams,
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import { removeFalsyValue } from "../utils/filterParams";

const styles = makeStyles((theme) => ({
  root: {
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "& .MuiTableCell-head": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.font,
    },
  },
}));
const columns = [
  { id: "name", label: "Title", minWidth: 170 },
  { id: "action", label: "Action", align: "center" },
];

export default function ArticleList() {
  const classes = styles();
  const context = useAppContext();
  const { searchTerm } = context.state;
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { page } = context.state;

  const getInfo = async () => {
    const res = await getArticles(page, searchTerm);
    if (res?.response?.docs.length > 0 && res.status === "OK") {
      setArticles([...res?.response?.docs]);
      setCount(res?.response?.meta?.hits);
      context.setArticles(res.response.docs);
    }
    setLoading(false);
  };

  useEffect(() => {
    const initialParams = Object.fromEntries([...searchParams]);
    if (Object.keys(initialParams).length > 0) {
      context.setPage(initialParams.page);
      context.updateSearchTerm(initialParams.search || "");
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = removeFalsyValue({
      search: searchTerm,
      page: page,
    });
    navigate({
      pathname: `/articles`,
      search: `?${createSearchParams(params)}`,
    });

    getInfo();
  }, [page, searchTerm]);

  const handleChangePage = (event, newPage) => {
    context.setPage(newPage);
  };

  const viewArticle = (article) => {
    const idLink = article.split("/");
    const id = idLink[idLink.length - 1];
    navigate(`/articles/${id}`);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.root}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize: "16px" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <Backdrop open={loading} />
            {articles.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  <TableCell style={{ fontSize: "16px" }}>
                    {row?.headline?.main || "-"}
                  </TableCell>
                  <TableCell align="center">
                    <Button size="small" onClick={() => viewArticle(row._id)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={count}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
}
