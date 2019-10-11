import React from 'react';
import { View,Image,ImageBackground } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'quanlynhanvien.db', createFromLocation : 1});
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(id INTEGER PRIMARY KEY AUTOINCREMENT,manv VARCHAR(20),tennv VARCHAR(40),diachi VARCHAR(50),phone VARCHAR(15),ngaysinh VARCHAR(15),gioitinh VARCHAR(5),chucvu VARCHAR(20),luong VARCHAR(10))',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <ImageBackground source={require('./hinhnen.jpg')} style={{width:'100%',height:'100%'}}>
        <Image style={{width:250,height:250,marginLeft:55,borderRadius:150}} source={require('./logo.jpg') } />
        <Mybutton
          title="Đăng Ký Mới"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Cập Nhật"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="Xem Chi Tiết Nhân Viên"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="Xem Danh Sách Nhân Viên"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Xóa Nhân Viên"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
        </ImageBackground>
        
      </View>
    );
  }
}