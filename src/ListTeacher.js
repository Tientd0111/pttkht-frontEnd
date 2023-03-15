
import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';   
import MainContainer from './layout/MainContainer';
import StudentApi from './api/StudentApi';
import { Link, useNavigate } from 'react-router-dom';

const ListTeacher = () => {
    const [teacher,setTeacher]= useState()
    const navigate = useNavigate()

    const columns = [
        {
          title: 'Tên',
          dataIndex: 'full_name',
          key: 'full_name',
        },
        {
          title: 'Mã Giáo viên ',
          dataIndex: 'ma_gv',
          key: 'ma_gv',
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
                <Link to={`/user/`+value.id} >sửa </Link>
              </Space>
            ),
          },
      ];    
    useEffect(()=>{
        const getStudent = async ()=>{
            try {
                const {data:data} = await StudentApi.getAllTeacher()
                setTeacher(data?.data?.data)
            }
            catch(error){
                console.log(error);
            }
        }
        getStudent()
    },[])
    console.log(teacher);
  return (
    <div>
          <MainContainer> <div className='container'><Table columns={columns} dataSource={teacher} /></div></MainContainer>
    </div>
  )
}

export default ListTeacher