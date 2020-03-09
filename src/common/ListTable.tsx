import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface BarChartProps {
    data: Object
}

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

export const ListTable: React.FC<BarChartProps> = ({ data}) => {
    const [state, setState] = useState({})
    useEffect(() => {
        setState(prevState => {
            return data
          })
    }, [data])
    return (
        <div>
            {
                Object.keys(state).map(key => (
                    <TableContainer key={key}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>{key}</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    state[key].map((row,index) => (
                                        <StyledTableRow key={row + '-' + index}>
                                            <StyledTableCell component="th" scope="row">
                                                {row}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))
                                }
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                ))
            }
            
        </div>
        
        )
}