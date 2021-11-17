import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Input } from 'reactstrap';
const Form = () => {

    const paperStyle = { padding: 20, height: '100vh', width: '800px', margin: "20px auto" }
    const btnstyle = { margin: '8px 0' }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={{ color: "purple" }}>
                    <h1>Tạo bãi đỗ mới</h1>
                </Grid>

                <h2> Tên bãi đỗ</h2>
                <TextField label='Name' placeholder='Tên bãi đỗ' fullWidth required />
                <input type="file" />
                <h2> Địa chỉ </h2>
                <TextField label='Address' placeholder='Địa chỉ' type='password' fullWidth required />
                <h2> Bảng giá </h2>
                <input type="text" placeholder="Gia tien" style={{ borderRadius: '8px' }}></input> VNĐ
                <h2> Sức chứa </h2>
                <input type="text" placeholder="So xe" style={{ borderRadius: '8px' }}></input> XE
                <h2> Các thông số khác </h2>
                <div style={{ fontSize: "20px" }}>
                    <Input type="checkbox" /> camera &ensp;

                    <VideoCameraBackIcon style={{ top: "200px" }} />
                    <br></br>
                    <Input type="checkbox" /> mái che  &ensp;
                    <BeachAccessIcon />
                </div>
                <h2> Mô tả </h2>
                <TextField label='Description' placeholder='Mô tả' fullWidth required />
            </Paper>
        </Grid >
    )
}

export default Form