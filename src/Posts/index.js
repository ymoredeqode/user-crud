import React, { useState, useEffect, useMemo } from "react"
import { fetchPosts } from '../Redux/Actions/posts'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Spinner from '../Components/spinner';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Index = (props) => {
    const { setEdit } = props;
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageCount, setPageCount] = useState(1)
    let initData = useSelector((state) => state.postReducer)
    useEffect(() => {
        console.log(pageCount, 'pageCount')
        dispatch(fetchPosts(pageCount))
    }, []);

    useEffect(() => {
        console.log('called', initData)
        setPosts(initData.posts)
        setIsLoading(initData.isLoading)
    }, [initData.posts])

    const deletedata = (val) => {
    }

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            // setPageCount(pageCount + 1)
            alert('sss' + pageCount)
        }
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Posts List</title>
            </Helmet>
            {isLoading && <Spinner />}
            <br />
            <br />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell >Title</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            posts.length > 0
                                ?
                                posts.map((item, index) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.id}
                                        </TableCell>

                                        <TableCell component="th" scope="row">
                                            {item.title}
                                        </TableCell>

                                        <TableCell component="th" scope="row">

                                            <ButtonGroup disableElevation variant="contained">
                                                <Button variant="outlined" >
                                                    <Link onClick={() => setEdit(true)} to={{ pathname: '/post-form/' + item.id }}><EditIcon ></EditIcon></Link>
                                                </Button>
                                                <Button variant="outlined" color="error">
                                                    <DeleteIcon></DeleteIcon>
                                                </Button>
                                            </ButtonGroup>

                                        </TableCell>
                                    </TableRow>

                                ))

                                :

                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        No Data
                                    </TableCell>
                                </TableRow>


                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </HelmetProvider >
    )

}

export default Index
