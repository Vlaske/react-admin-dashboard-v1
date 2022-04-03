import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import "./userList.css";
import { useState } from "react";


export default function UserList() {
  
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item=> item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'user', headerName: 'Username', width: 170, renderCell: (params) =>{
            return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
        field: 'status',
        headerName: 'Status',
        width: 120,
        },
        {
        field: 'transaction',
        headerName: 'Transaction',
        width: 160,
        },
        {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return(
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete"  onClick={() => handleDelete(params.row.id)} />
                </>
            )
        }
        },
        
    ];

  return (
    <div className="userList">
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
