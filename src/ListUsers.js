
import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';   
import MainContainer from './layout/MainContainer';
import StudentApi from './api/StudentApi';
import { Link, useNavigate } from 'react-router-dom';

const ListUsers = () => {
    const [users,setUser]= useState()
    const navigate = useNavigate()

    const columns = [
        {
          title: 'Tên',
          dataIndex: 'full_name',
          key: 'full_name',
        },
        {
          title: 'Mã SV ',
          dataIndex: 'ma_sv',
          key: 'ma_sv',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: 'Số điện thoại ',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Action',
            key: 'action',
            render: (value) => (
              <Space size="middle">
                <Link to={`/marks/`+value.ma_sv} >Xem </Link>
                <Link to={`/user/`+value.id} >Sửa </Link>
              </Space>
            ),
          },
      ];    
    useEffect(()=>{
        const getStudent = async ()=>{
            try {
                const {data:data} = await StudentApi.getAll()
              setUser(data?.data?.data)
            }
            catch(error){
                console.log(error);
            }
        }
        getStudent()
    },[])
    console.log(users);
  return (
    <div>
          <MainContainer> <div className='container'><Table columns={columns} dataSource={users} /></div></MainContainer>
    </div>
  )
}

export default ListUsers