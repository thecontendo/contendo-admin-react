import * as React from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {getEntries} from "services/entry";
import {IResponse, IUser} from "../../../interfaces/global/IDashboard";

// @ts-ignore
import {v4 as uuid} from 'uuid/dist';


const Users = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);

    const onGetEntries = useCallback(() => {
        getEntries().then((response: any)=>{
            debugger;
            const data = response as IResponse;
            setUsers(data.entries);
        }).catch(error => {
            debugger;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        onGetEntries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Api</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Https</TableCell>
                            <TableCell>Cors</TableCell>
                            <TableCell align="right">Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={uuid()}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.API}
                                </TableCell>
                                <TableCell>{row.Category}</TableCell>
                                <TableCell>{row.Description}</TableCell>
                                <TableCell>{row.HTTPS}</TableCell>
                                <TableCell>{row.Cors}</TableCell>
                                <TableCell align="right">{row.Link}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Users;

